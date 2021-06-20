import "./Spinner.js";
import Vue from "../../lib/vue.js";

Vue.component("app-loading", {
  template: `
    <app-container>
    <section class="flex flex-col items-center italic">
      <slot v-if="hasContent"></slot>
      <p v-else>Lütfen bekleyiniz</p>
      <div class="h-4"></div>
      <app-spinner></app-spinner>
    </section>
    </app-container>`,
  computed: {
    hasContent() {
      return this.$slots.default;
    },
  },
});
