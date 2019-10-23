import { LitElement, css, html } from '@lion/core';

export class LionTabs extends LitElement {
  static get properties() {
    return {
      /**
       * index number of the selected tab
       */
      selectedIndex: {
        type: Number,
        value: 0,
      },
    };
  }

  static get styles() {
    return [
      css`
        .tabs__tab-group {
          display: flex;
          border-bottom: 1px solid grey;
        }

        ::slotted([slot="tab"]) {
          padding: 8px;
        }

        ::slotted([slot="tab"][selected]) {
          font-weight: bold;
        }

        .tabs__panels {
          display: block;
        }
      `,
    ];
  }

  /* eslint-disable-next-line class-methods-use-this */
  get uuid() {
    return Math.random()
      .toString(36)
      .substr(2, 10);
  }

  connectedCallback() {
    super.connectedCallback();
    let items = [];
    this._tabList = this.querySelectorAll('[slot="tab"]');
    this._tabPanels = this.querySelectorAll('[slot="panel"]');

    this._tabList.forEach(tab => {
      items = [
        ...items,
        {
          tabId: `tab-${this.uuid}`,
          tabPanelId: `tabpanel-${this.uuid}`,
        },
      ];
    });
    this.tabs = [...items];

    this._tabList.forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('id', this.tabs[index].tabId);
      tab.setAttribute('aria-controls', this.tabs[index].tabPanelId);
    });

    this._tabPanels.forEach((panel, index) => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('id', this.tabs[index].tabPanelId);
      panel.setAttribute('aria-labelledby', this.tabs[index].tabId);
    });

    this.selectedIndex = this.selectedIndex || 0;
    this.activateTab(this._tabList[this.selectedIndex], this.selectedIndex);

    this._tabList.forEach((tab, index) => {
      tab.addEventListener('click', e => this.activateTab(e.target, index));
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._tabList.forEach((tab, index) => {
      tab.addEventListener('click', e => this.activateTab(e.target, index));
    });
  }

  updated() {
    super.updated();

  }

  activateTab(tab, index) {
    console.log(tab.id, this.tabs[index].tabId);
    this._deactivateTabs();
    tab.setAttribute('tabindex', 0);
    tab.setAttribute('aria-selected', true);
    tab.setAttribute('selected', true);

    const controls = tab.getAttribute('aria-controls');
    const panel = this.querySelector(`[id="${controls}"]`);
    panel.removeAttribute('hidden');

    this.selectedIndex = index;
    this.dispatchEvent(new Event('selected-changed', tab))
  }

  _deactivateTabs() {
    this._tabList.forEach(tab => {
      tab.setAttribute('aria-selected', false);
      tab.removeAttribute('selected');
      tab.setAttribute('tabindex', -1);
    });

    this._tabPanels.forEach(panel => {
      panel.setAttribute('hidden', true);
    });
  }

  render() {
    return html`
      <div class="tabs__tab-group">
        <slot
          name="tab"
          role="tablist"
        ></slot>
      </div>
      <div class="tabs__panels">
        <slot
          name="panel"
          role="tabpanel"
        ></slot>
      </div>
    `
  }
}
