import Vue from "../lib/vue.js";
import { mapState } from "../lib/vuex.js";
import "../component/shared/Loading.js";
import "../component/shared/ErrorHandler.js";
import "../component/shared/Container.js";
import "../component/Nav.js";

Vue.component("app-third-task", {
  template: `
<section>
  <template v-if="error">
    <header>
      <app-nav></app-nav>
    </header>
  
    <main>
      <app-error v-if="error">
        <p>Sigorta teklifleri yüklenilemedi</p>
      </app-error>
    </main>
  </template>

  <template v-else>
    <header>
      <app-nav></app-nav>
      
      <app-loading v-if="!offerCount">
        <p class="text-lg">Yüklenilecek teklif sayısı öğreniliyor</p>
      </app-loading>
  
      <app-loading v-else-if="offers.length < offerCount">
        <p class="text-lg">{{ offerCount }} tekliften {{ offers.length }} tanesi yüklendi</p>
      </app-loading>
  
      <app-container v-else>
        <section class="flex justify-center italic">
          <p class="text-lg">Tüm teklifler yüklendi</p>
        </section>
      </app-container>
    </header>
  
    <template v-if="offers.length">
      <div
          v-if="offers.length"
          class="border-t border-gray-200 w-2/3 md:w-2/5 lg:w-2/6 xl:w-1/4 mx-auto"
      ></div>
  
      <main v-if="offers.length">
        <app-offers :offers="offers"></app-offers>
      </main>
    </template>
  </template>
</section>`,
  data() {
    return { error: false };
  },
  computed: mapState(["offers", "offerCount"]),
  mounted() {
    this.$store.dispatch("init").catch(() => {
      this.error = true;
    });
  },
});
