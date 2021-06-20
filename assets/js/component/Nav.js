import Vue from "../lib/vue.js";
import "./Nav/NavLink.js";

/**
 * @typedef {Object} Link
 * @property {string} href
 * @property {string} label
 */

/**
 *
 * @type {Link[]}
 */
const links = [
  { href: "./task1.html", label: "Task 1" },
  { href: "./task2.html", label: "Task 2" },
  { href: "./task3.html", label: "Task 3" },
];

Vue.component("app-nav", {
  template: `
<app-container>
  <nav>
    <ul class="flex justify-center">
      <li :key="link.href" v-for="link of links" class="ml-4 first:ml-0">
        <app-nav-link :href="link.href" :label="link.label"></app-nav-link>
      </li>
    </ul>
  </nav>
</app-container>`,
  data: () => ({ links }),
});
