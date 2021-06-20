import className from "../../helper/className.js";
import Vue from "../../lib/vue.js";

Vue.component("app-popover", {
  template: `
<div :class="className">
  <slot></slot>
</div>
`,
  computed: {
    className: className(
      // https://tailwindcss.com/docs/hover-focus-and-other-states#group-focus
      // By default, the group-focus variant is not enabled for any core plugins.
      // You can control whether group-focus variants are enabled for a plugin in
      // the variants section of your tailwind.config.js file:
      // varsayılan build kullanıldığı için "group-focus:opacity-100" çalışmayacak
      "absolute w-56 md:w-auto left-0 top-6 transform whitespace-normal md:whitespace-nowrap -translate-x-1/4 md:-translate-x-1/2 opacity-0 transition-opacity z-10 group-focus:opacity-100 group-hover:opacity-100"
    ),
  },
});
