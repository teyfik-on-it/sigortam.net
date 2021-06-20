import '../filter/currency.js';
import './shared/Badge.js';
import './shared/Button.js';
import './shared/Popover.js';
import Vue from '/assets/js/lib/vue.js';

Vue.component('app-offer', {
  template: `
    <section class="flex flex-col md:flex-row p-4 mt-4 border bg-white shadow-sm first:mt-0 whitespace-nowrap">
    <aside class="flex justify-center items-center">
      <figure class="w-36">
        <img :src="offer.ImagePath" :alt="offer.FirmName" class="max-w-full max-h-full mx-auto"/>
      </figure>
    </aside>

    <div class="border-l m-4 border-gray-100"></div>

    <div class="flex-1 flex flex-wrap justify-around">
      <header class="flex-1 flex items-center text-sm">
        <div>
          <h3 class="font-bold">{{ offer.ProductDesc }}</h3>
          <h4>
            {{ offer.FirmName }}
            <app-badge v-if="offer.popoverContent" class="group border-blue-500">
              <span class="text-blue-500">?</span>
              <app-popover class="px-4 py-2 text-left top-6 bg-white shadow-md cursor-text select-text">
                <section v-for="popoverContent of offer.popoverContent" :key="popoverContent.Description"
                         class="text-sm">
                  <header>
                    <h5 class="font-bold">{{ popoverContent.Title }}</h5>
                  </header>

                  <main>
                    <p>{{ popoverContent.Description }}</p>
                  </main>
                </section>
              </app-popover>
            </app-badge>
          </h4>
        </div>
      </header>

      <main v-if="offer.QuotaInfo.HasDiscount" class="flex flex-col justify-center">
        <div class="my-4 text-right">
          <p class="text-xs">Peşin: <span class="line-through">{{ offer.Cash | currency }}</span></p>
          <p class="font-bold text-lg">{{ offer.QuotaInfo.PremiumWithDiscount | currency }}</p>
        </div>

        <app-button>
          SATIN AL
        </app-button>
      </main>

      <main v-else class="flex flex-col justify-center">
        <p class="font-bold text-lg text-right my-4">{{ offer.Cash | currency }}</p>

        <app-button>
          SATIN AL
        </app-button>
      </main>
    </div>
    </section>`,
  props: ['offer'],
  data: () => ({
    popover: false,
  }),
  methods: {
    toggle() {
      this.popover = !this.popover;
    },
  },
});
