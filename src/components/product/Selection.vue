<template>
  <section id="productSelection" class="bg-white padding-top-3">
    <div class="product-selection section-container">
      <div class="product-selection__option product-selection__option--relative product-selection__option--no-space">
        <img
          class="product-selection__option__oekotex-logo"
          src="@/assets/img/oekotex_de.png"
          alt="Oeko-Tex Certificate"
        >
          <img
            class="product-selection__option__img"
            :src="selectedKit.img.src"
            :alt="selectedKit.img.alt"
          >
      </div>
      <div class="product-selection__option product-selection__option--left product-selection__option--left flex-nowrap">
        <h2 class="gap-bottom-2">Unser gratis Testpaket</h2>
        <p class="uppercase gap-bottom-2">Wähle deine Größe</p>
        <div class="gap-bottom-2 flex flex-direction-row flex-wrap text-align-center">
          <div
            class="option-trial-kit flex flex-direction-col"
            v-for="trialKit in trialKits"
            :key="trialKit.index"
            :class="{'option-trial-kit--active': trialKit.active}"
            @click="selectKit(trialKit.index)"
          >
            <p class="option-trial-kit__index">{{trialKit.index}}</p>
            <span class="option-trial-kit__description">{{trialKit.description}}</span>
          </div>
        </div>
        <p>Teste jetzt unsere Windeln und Feuchttücher - In Größe 1 - 3 enthält unser Testpaket unsere Feuchttücher mit 99 % Wasser, ab Gr. 4 erhältst Du unsere Sensitiven Feuchttücher. Wir zahlen die Produkte, Du nur den Versand.</p>
        <ul>
          <li class="lillydoo">
            Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 Euro pro Lieferung.
          </li>
          <li>
            Preise inkl. MwSt., ggf. zzgl. <a href="https://www.lillydoo.com/de/zahlung-und-versand" target="_blank">Versandkosten</a>
          </li>
        </ul>
        <button class="button uppercase gap-top-4 gap-bottom-4">In den Warenkorb legen</button>
      </div>
    </div>
  </section>
</template>

<script>

/**
   * Product Selection
   *
   * Renders data
   * Sends to the parent the trialKitIndex if the selection of the kit changes
   *
   */

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
