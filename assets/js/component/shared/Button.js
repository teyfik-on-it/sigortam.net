import Vue from "../../lib/vue.js";

Vue.component('app-button', {
  template: `
<div
  class="w-36 max-w-full border border-blue-500 bg-blue-500 text-xs text-white px-4 py-2 text-center transition-colors hover:bg-transparent hover:text-blue-500" 
  role="button"
  tabindex="0">
  <slot></slot>
</div>`,
});
