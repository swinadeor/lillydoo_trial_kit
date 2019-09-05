<template>
  <div>
    <product-intro/>
    <product-selection
      :selectedKit="selectedKit"
      :trialKits="trialKits"
      v-on:updateDetailsContent="updateDetailsContent"
    />
    <product-tips/>
    <product-details
      :diaper="selectedKit.content.diaper"
      :towel="selectedKit.content.towel"
    />
  </div>
</template>
<script>
  import ProductIntro from '@/components/ProductIntro'
  import ProductDetails from '@/components/ProductDetails'
  import ProductSelection from '@/components/ProductSelection'
  import ProductTips from '@/components/ProductTips'

  import { trialKits } from './const.js'

  /**
   * Trial Kit
   *
   * Handles the trialKits and passes it down to its children to render the data
   *
   */

  export default {
    name: 'TrialKit',
    components: {
      ProductIntro,
      ProductDetails,
      ProductSelection,
      ProductTips
    },
    data () {
      return {
        trialKits: trialKits
      }
    },
    computed: {
      selectedKit () {
        return this.trialKits.find(kit => kit.active)
      }
    },
    methods: {
      updateDetailsContent (trialKitIndex) {
        this.trialKits.map(kit => kit.active = trialKitIndex === kit.index)
      }
    }
  }
</script>
