<template>
  <div>
    <product-intro/>
    <product-selection></product-selection>
    <product-tips></product-tips>
    <product-details></product-details>
  </div>
</template>
<script>
  import ProductIntro from '@/components/ProductIntro'
  import ProductDetails from '@/components/ProductDetails'
  import ProductSelection from '@/components/ProductSelection'
  import ProductTips from '@/components/ProductTips'

  export default {
    name: 'TrialKit',
    components: {
      ProductIntro,
      ProductDetails,
      ProductSelection,
      ProductTips
    }
  }
</script>
