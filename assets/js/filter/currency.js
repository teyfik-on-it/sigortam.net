import Vue from "../lib/vue.js";

const numberFormat = Intl.NumberFormat(
  Intl.NumberFormat().resolvedOptions().locale,
  {
    style: 'currency',
    currency: 'TRY',
  },
);
const currency = (input) => numberFormat.format(input);

Vue.filter('currency', currency);
