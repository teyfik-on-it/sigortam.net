import Vue from "../../lib/vue.js";

Vue.component("app-nav-link", {
  template: `
<a :href="href"
   :class="defaultClass + (active ? activeClass : passiveClass)"
>{{label}}</a>`,
  props: {
    href: String,
    label: String,
  },
  data() {
    return {
      defaultClass: "inline-block px-4 py-2 text-blue-600 border rounded-lg",
      activeClass: " bg-blue-200 border-blue-300 pointer-events-none",
      passiveClass:
        " bg-blue-100 border-transparent transition-colors hover:bg-blue-200",
    };
  },
  computed: {
    active() {
      return location.href === new URL(this.href, location.href).href;
    },
  },
});
