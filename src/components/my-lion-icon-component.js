import {html, LitElement} from 'lit';
import {LionIcon} from '@lion/ui/icon';
import {LionButton} from '@lion/ui/button';
import {ScopedElementsMixin} from '@lion/ui/core';
// import '@lion/ui/define/lion-button.js';

import {addIconResolverForPortal} from './iconset-portal/addIconResolverForPortal.js';

try {
  addIconResolverForPortal();
} catch (e) {
  // do nothing
  // icons can be registered by somebody else?
}

export class MyLionIconComponent extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'lion-icon': LionIcon,
    'lion-button': LionButton,
  };

  render() {
    return html`
      <div>
        <lion-button @click="${() => console.log('Click...')}">Clickable button</lion-button>
        Icon:
        <lion-icon icon-id="lion-portal:portal:home"></lion-icon>
      </div>
    `;
  }
}

/*
todo: on the server side apparently this is not working
because the registry of customElements from @lit-lags/ssr-dom-shim is not cleared between refreshes


17:10:41 [ERROR] Failed to execute 'define' on 'CustomElementRegistry': the constructor has already been used with this registry for the tag name my-lion-icon-component
  Stack trace:
    at CustomElementRegistry.define (file:///Users/ud40ht/Work/lion/node_modules/@lit-labs/ssr-dom-shim/index.js:164:19)
    at /Users/ud40ht/Work/lion/site/src/pages/components/lion-icon.astro:20:16
    [...] See full stack trace in the browser, or rerun with --verbose.
'CustomElementRegistry' already has "my-lion-icon-component" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.
*/
customElements.define('my-lion-icon-component', MyLionIconComponent);
