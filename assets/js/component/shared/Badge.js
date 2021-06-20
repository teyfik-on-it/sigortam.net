import className from "../../helper/className.js";
import Vue from "../../lib/vue.js";

Vue.component("app-badge", {
  template: `
    <span role="button" tabindex="0" :class="className">
  <slot></slot>
</span>`,
  computed: {
    className: className(
      "relative inline-block w-4 h-4 leading-4 text-center border text-xs rounded-full cursor-pointer select-none"
    ),
  },
});
