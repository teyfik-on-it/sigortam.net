import Vue from "../../lib/vue.js";
import "../Nav.js";
import "../shared/Loading.js";

const LoadingOffers = Vue.component("app-first-task-loading", {
  template: `
<section>
  <app-nav></app-nav>
  <app-loading>
    <p>Sigorta teklifleri yükleniyor</p>
  </app-loading>
</section>
`,
});

export default LoadingOffers;
