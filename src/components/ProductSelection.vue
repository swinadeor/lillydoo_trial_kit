<template>
  <section id="productSelection" class="bg-white">
    <div class="flex flex-direction-row section-container">
      <div class="position-relative">
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
            v-for="trialKit in trialKits"
            :key="trialKit.index"
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
    props: {
      selectedKit: {
        index: Number,
        description: String,
        img: {
          src: String,
          alt: String
        },
        active: Boolean,
        content: Object
      },
      trialKits: Array
    },
    methods: {
      selectKit (trialKitIndex) {
        this.$emit('updateDetailsContent', trialKitIndex)
      }
    }
  }
</script>
