import price from "./helper/price.js";
import getOfferCount from "./api/getOfferCount.js";
import getThirdCase from "./api/getThirdCase.js";
import Vue from "./lib/vue.js";
import Vuex from "./lib/vuex.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    /**
     * @type {Offer[]}
     */
    offers: [],
    /**
     * @type {number}
     */
    offerCount: 0,
  },
  mutations: {
    /**
     *
     * @param {State} state
     * @param {Offer} offer
     */
    addOffer(state, offer) {
      const { offers } = state;

      for (let i = 0; i < offers.length; i++) {
        if (price(offer) < price(offers[i])) {
          offers.splice(i, 0, offer);
          break;
        }
      }

      if (offers.indexOf(offer) === -1) {
        offers.push(offer);
      }
    },
    /**
     *
     * @param {State} state
     * @param {number} offerCount
     */
    setOfferCount(state, offerCount) {
      state.offerCount = offerCount;
    },
  },
  actions: {
    getOfferCount(store) {
      return getOfferCount().then((data) =>
        store.commit("setOfferCount", data.num_offers)
      );
    },
    getOffer(store) {
      return getThirdCase().then((offer) => store.commit("addOffer", offer));
    },
    async init(store) {
      const { offers, offerCount } = store.state;

      if (!offerCount) {
        await store.dispatch("getOfferCount");
      } else if (offers.length < offerCount) {
        await store.dispatch("getOffer");
      } else {
        return;
      }

      await store.dispatch("init");
    },
  },
});

export default store;
