import Vue from "../../lib/vue.js";

Vue.component("app-error", {
  template: `
<app-container>
  <section class="flex flex-col items-center p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg">
    <h3 class="text-xl">Hata</h3>
    <slot v-if="hasContent"></slot>
    <p v-else>İşlem tamamlanılamadı</p>
  </section>
</app-container>`,
  computed: {
    hasContent() {
      return this.$slots.default;
    },
  },
});
