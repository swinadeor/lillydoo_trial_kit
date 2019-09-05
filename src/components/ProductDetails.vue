<template>
  <section class="bg-white padding-top-3">
    <div class="section-container">
      <h2>Dein Testpaket enthält</h2>
    </div>
    <div class="product-flex section-container">
      <div class="product-flex__content flex flex-direction-row flex-nowrap product-details">
        <div class="product-details__img gap-right-3">
          <img :src="diaper.img">
        </div>
        <div class="flex flex-direction-col flex-nowrap">
          <div>
            <h3 class="product-details__title">{{diaper.title}}</h3>
          </div>
          <ul>
            <li v-for="detail in diaper.details" :key="detail.title">
              {{detail}}
            </li>
          </ul>
        </div>
      </div>
      <div class="product-flex__content flex flex-direction-row flex-nowrap product-details">
        <div class="product-details__img gap-right-3">
          <img :src="towel.img">
        </div>
        <div class="flex flex-direction-col flex-nowrap">
          <div>
            <h3 class="product-details__title">{{towel.title}}</h3>
          </div>
          <ul class="product-details__description">
            <li v-for="detail in towel.details" :key="detail.title">{{detail}}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  /**
   * Product Details
   *
   * Renders data
   *
   */

  export default {
    name: 'ProductDetails',
    props: {
      diaper: {
        img: String,
        title: String,
        details: Array
      },
      towel: {
        img: String,
        title: String,
        details: Array
      }
    }
  }
</script>
