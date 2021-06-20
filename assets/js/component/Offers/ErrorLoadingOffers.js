import Vue from "../../lib/vue.js";
import "../Nav.js";

const ErrorLoadingOffers = Vue.component("app-first-task-fail", {
  template: `
<section>
  <app-nav></app-nav>
  <app-error>
    <p>Sigorta teklifleri yüklenilemedi</p>
  </app-error>
</section>
`,
});

export default ErrorLoadingOffers;
