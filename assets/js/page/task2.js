import getSecondCase from "../api/getSecondCase.js";
import Vue from "../lib/vue.js";
import LoadingOffers from "../component/Offers/LoadingOffers.js";
import ErrorLoadingOffers from "../component/Offers/ErrorLoadingOffers.js";
import "../component/Nav.js";

Vue.component("app-second-task", () => ({
  component: getSecondCase()
    .then((firstCase) => ({
      template: `
<section>
  <header>
    <app-nav></app-nav>
  </header>

  <main>
    <app-offers :offers="offerList"></app-offers>
  </main>
</section>`,
      data: () => firstCase,
    }))
    .catch(() => ErrorLoadingOffers),
  loading: LoadingOffers,
  error: ErrorLoadingOffers,
}));
