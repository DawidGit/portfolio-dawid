<template>

  <v-row class="about-me-row" justify="space-around">
    <v-avatar :image="myPhoto" size="250" density="compact"/>
    <v-col  cols="12" sm="10" md="7">
        <p> {{ summary }} </p>
    </v-col>
  </v-row>
</template>

<script setup>
import myPhoto from '@/assets/my_photo.png'
import summary from '@/assets/summary.json'


</script>

<style scoped>


p{
  line-height: 2;
}

h1 {
  color: #f2f2f2;
  align-items: center;
}

v-col {
  height: 300px;
}

.about-me-row {
  padding: 30px;
  align-items: center;
  background-color: #212121;
  border-radius: 10px;
}

@media only screen and (min-width: 1280px) {
  .about-me-row {
    align-items: center;
    padding:30px;
  }

}

</style>