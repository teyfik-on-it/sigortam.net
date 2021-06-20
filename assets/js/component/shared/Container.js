import Vue from "../../lib/vue.js";

Vue.component("app-container", {
  template: `
<div class="bg-gray-50 px-4 pb-4 first:pt-4">
  <div class="max-w-2xl mx-auto">
    <slot></slot>
  </div>
</div>`,
});
