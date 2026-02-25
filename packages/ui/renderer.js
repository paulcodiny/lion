import '@astrojs/lit/server-shim.js';

import {render} from '@lit-labs/ssr';
import {collectResult} from '@lit-labs/ssr/lib/render-result.js';
import {LitElementRenderer} from '@lit-labs/ssr/lib/lit-element-renderer.js';
import {html} from 'lit';

function isCustomElementTag(name) {
  return typeof name === 'string' && /-/.test(name);
}

/* todo: issues
1. Custom Scoped Registry is not working, custom elements must be defined globally:
  1.1 I tried to find if it's possible to pass host custom element to getTemplateOpcodes function
  in node_modules/@lit-labs/ssr/lib/render-value.js
  because eventually this function call customElements.get
  it can be done by passing
  getLast(renderInfo.customElementInstanceStack)?.element?.constructor?.scopedElements)
  however, the problem, is that custom elements don't have shadow DOM
  which is created by attachShadow. and attachShadow function does not exist at all in
  @lit-labs/ssr-dom-shim
  so, the only option for now is to globally define the elements
  For now is solved with WithSSH mixin
 2. HMR is not working (patches/@lit-labs+ssr-dom-shim+1.4.0.patch)
 */

function getCustomElementConstructor(name) {
  // todo: apparently, shim for customElements is needed on the server
  console.log(
    'getCustomElementConstructor',
    name,
    typeof customElements !== 'undefined',
    isCustomElementTag(name),
  );
  if (typeof customElements !== 'undefined' && isCustomElementTag(name)) {
    return customElements.get(name) || null;
  } else if (typeof name === 'function') {
    return name;
  }
  return null;
}

async function isLitElement(Component) {
  const Ctr = getCustomElementConstructor(Component);
  console.log('contructor', Ctr);
  //return !!Ctr?._$litElement$;
  return true;
}

async function getElementAsString(litRenderer, tagName) {
  const output = [];

  if (!litRenderer) {
    return null;
  }

  try {
    litRenderer.connectedCallback();

    //const attributes = ssrRenderAttrs(mergeProps(litElementVNodeProps, litWrapperAttrs));

    // for some reason default lit astro renderer adds defer-hydration attribute which breaks everything
    // see details https://lit.dev/docs/ssr/server-usage/
    output.push(
      `<${tagName}><template shadowrootmode="open" shadowroot="open">`,
    );

    for (const shadowContent of litRenderer.renderShadow({
      elementRenderers: [LitElementRenderer],
      customElementInstanceStack: [litRenderer],
      customElementHostStack: [litRenderer],
    })) {
      output.push(shadowContent);
    }

    output.push(`</template>`);

    // Render the LitElement slot
    // const litElementChildren = litElementVNode.children
    //   ? Array.isArray(litElementVNode.children)
    //     ? litElementVNode.children
    //     : [litElementVNode.children]
    //   : [];
    //
    // litElementChildren.forEach((child) => ssrRenderVNode(push, ssrUtils.normalizeVNode(child), litWrapperInstance));

    output.push(`</${tagName}>`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);

    return null;
  }

  return output.join('\n');
}

async function check(Component) {
  console.log('check??', Component, !!(await isLitElement(Component)));
  // Lit doesn't support getting a tagName from a Constructor at this time.
  // So this must be a string at the moment.
  return !!(await isLitElement(Component));
}

async function renderToStaticMarkup(Component, props, slots) {
  if (props['skip-ssr']) {
    // for debug purposes skip ssr for client-side components
    return false;
  }
  console.log('renderToStaticMarkup', Component, props, slots);
  // const result = render(html`<my-lion-icon-component my-attr></my-lion-icon-component>`);
  const litRenderer = new LitElementRenderer(Component);

  if (props) {
    const customElementConstructor = getCustomElementConstructor(Component);
    for (const [key, value] of Object.entries(props)) {
      // check if this is a reactive property
      if (
        customElementConstructor !== null &&
        typeof customElementConstructor !== 'string' &&
        key in customElementConstructor.prototype
      ) {
        const isBooleanProp = customElementConstructor.elementProperties.get(key)?.type === Boolean;

        if (isBooleanProp && value === '') {
          // handle key only boolean props e.g. <my-element disabled></my-element>
          litRenderer.setProperty(key, true);
        } else {
          litRenderer.setProperty(key, value);
        }
      } else {
        litRenderer.setAttribute(key, value);
      }
    }
  }

  console.log('actual result');
  console.log(await getElementAsString(litRenderer, Component));

  // console.log('alternative', await collectResult(result));

  // const contents = await collectResult(result);
  return {
    html: await getElementAsString(litRenderer, Component),
  };
}

export default {
  name: 'lion/ssr',
  check,
  renderToStaticMarkup,
};
