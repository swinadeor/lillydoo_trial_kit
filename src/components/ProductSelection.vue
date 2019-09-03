<template>
  <section id="productSelection" class="bg-white">
    <div class="flex flex-direction-row section-container">
      <div style="position: relative">
        <img
          class="oekotex-logo"
          src="@/assets/oekotex_de.png"
          alt="Oeko-Tex Certificate"
        >
        <div>
          <img
            :src="selectedKit.img.src"
            :alt="selectedKit.img.alt"
          >
        </div>
      </div>
      <div class="flex flex-direction-col flex-nowrap text-align-left">
        <h2 class="gap-bottom-1">Unser gratis Testpaket</h2>
        <p class="uppercase gap-bottom-1">Wähle deine Größe</p>
        <div class="gap-bottom-1 flex flex-direction-row text-align-center">
          <div
            class="option-trial-kit"
            v-for="trialKit in trialKits" :key="trialKit.index"
            :class="{'option-trial-kit__active': trialKit.active}"
            @click="selectKit(trialKit.index)"
          >
            <p>{{trialKit.index}}</p>
            <span>{{trialKit.description}}</span>
          </div>
        </div>
        <p>Teste jetzt unsere Windeln und Feuchttücher. Wir zahlen die Produkte, Du nur den Versand</p>
        <ul>
          <li class="lillydoo">
            Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 Euro pro Lieferung.
          </li>
          <li>
            Preise inkl. MwSt., ggf. zzgl. <a href="https://www.lillydoo.com/de/zahlung-und-versand" target="_blank">Versandkosten</a>
          </li>
        </ul>
        <button class="button uppercase">In den Warenkorb legen</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ProductSelection',
    data () {
      return {
        trialKits: [
          {
            index: 1,
            description: '(2-3KG)',
            img: {
              src: require('@/assets/lillydoo-trial-kit-10.jpg'),
              alt: 'Lillydoo Testpaket mit Windeln in Größe 1 und 15 Feuchttüchern'
            },
            active: true
          },
          {
            index: 2,
            description: '(3-4KG)',
            img: {
              src: require('@/assets/lillydoo-trial-kit-20.jpg'),
              alt: 'Lillydoo Testpaket mit Windeln in Größe 2 und 15 Feuchttüchern'
            },
            active: false
          },
          {
            index: 3,
            description: '(4-7KG)',
            img: {
              src: require('@/assets/lillydoo-trial-kit-30.jpg'),
              alt: 'Lillydoo Testpaket mit Windeln in Größe 3 und 15 Feuchttüchern'
            },
            active: false
          },
          {
            index: 4,
            description: '(7-10KG)',
            img: {
              src: require('@/assets/lillydoo-trial-kit-40.jpg'),
              alt: 'Lillydoo Testpaket mit Windeln in Größe 4 und 15 Feuchttüchern'
            },
            active: false
          },
          {
            index: 5,
            description: '(10-12KG)',
            img: {
              src: require('@/assets/lillydoo-trial-kit-50.jpg'),
              alt: 'Lillydoo Testpaket mit Windeln in Größe 5 und 15 Feuchttüchern'
            },
            active: false
          }
        ]
      }
    },
    computed: {
      selectedKit () {
        return this.trialKits.find(kit => kit.active)
      }
    },
    methods: {
      selectKit (trialKitIndex) {
        this.trialKits.map(kit => kit.active = trialKitIndex === kit.index)
      }
    }
  }
</script>
