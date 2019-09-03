<template>
  <section class="bg-white section">
    <div class="section-container">
      <h2>Dein Testpaket enthält</h2>
    </div>
    <div class="flex flex-direction-row flex-nowrap section-container">
      <div class="flex flex-direction-row flex-nowrap">
        <div>
          <img :src="diaper.img">
        </div>
        <div class="flex flex-direction-col flex-nowrap">
          <div>
            <h3>{{diaper.title}}</h3>
          </div>
          <ul>
            <li v-for="detail in diaper.details" :key="detail.title">
              {{detail}}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-direction-row flex-nowrap">
        <div>
          <img :src="towel.img">
        </div>
        <div class="flex flex-direction-col flex-nowrap">
          <div>
            <h3>{{towel.title}}</h3>
          </div>
          <ul>
            <li v-for="detail in towel.details" :key="detail.title">
              {{detail}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
