<template>
    <div>
        <lillydoo-header/>
        <product-details></product-details>
        <product-selection></product-selection>
        <product-tips></product-tips>
    </div>
</template>
<script>
import LillydooHeader from './../components/Header'
import ProductDetails from './../components/ProductDetails'
import ProductSelection from './../components/ProductSelection'
import ProductTips from './../components/ProductTips'

export default {
    name: 'TrialKit',
    components: {
        LillydooHeader,
        ProductDetails,
        ProductSelection,
        ProductTips
    }
}
</script>