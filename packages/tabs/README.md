# Tabs

`lion-tabs` implements Tabs view to allow users to quickly move between a small number of equally important views

## How to use

### Installation

```sh
npm i --save @lion/tabs;
```

### Usage

```js
import '@lion/tabs/lion-tabs.js';
import '@lion/tabs/lion-tab.js';
import '@lion/tabs/lion-tab-panel.js';
```

```html
<lion-tabs>
  <lion-tab slot="tab">Info</lion-tab>
  <lion-tab-panel slot="panel">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi odit cumque, enim aut
    assumenda itaque quis voluptas est quos fugiat unde labore reiciendis saepe, iure, optio
    officiis obcaecati quibusdam.
  </lion-tab-panel>
  <lion-tab slot="tab">About</lion-tab>
  <lion-tab-panel slot="panel">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam sequi odit cumque, enim aut
    assumenda itaque quis voluptas est quos fugiat unde labore reiciendis saepe, iure, optio
    officiis obcaecati quibusdam.
  </lion-tab-panel>
</lion-tabs>
```

Rationales:

- **No separate active/focus state when using keyboard**

  We will immediately switch content as all our content comes from light dom (e.g. no latency)

  See Note at <https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-19>

  > It is recommended that tabs activate automatically when they receive focus as long as their
  > associated tab panels are displayed without noticeable latency. This typically requires tab
  > panel content to be preloaded.

- **Panels are not focusable**

  Focusable elements should have a mean to interact with them. Tab panels itself do not offer any interactive.
  If there is a button or a form inside the tab panel then these elements get focused directly.

- **Force vertical layout if tab labels width exceeds its container**

  When all tab labels side by side are too long for the container then they should be displayed vertically.
  This avoids the need of having a scrollable tabs bar which can be cumbersome to interact with.
