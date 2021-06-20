import "./Offer.js";
import "./shared/Container.js";
import Vue from "../lib/vue.js";

Vue.component("app-offers", {
  template: `
    <app-container>
    <section class="mb-20 md:mb-8">
      <main role="list">
        <app-offer
            role="listitem"
            v-for="offer in offers"
            :offer="offer"
            :key="offer.FirmName + ':' + offer.Cash"
        ></app-offer>
      </main>
    </section>
    </app-container>`,
  props: ["offers"],
});
