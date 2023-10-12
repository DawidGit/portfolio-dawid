<template>
  <v-app class="global">
    <NavigationBar class="navigation-bar"/>
    <v-container class="container-style" fluid="true">
      <v-sheet color="#121212" rounded="lg"
               class="d-flex align-center justify-center flex-wrap text-center mx-auto sheet-style">
        <router-view/>
      </v-sheet>
    </v-container>
    <CustomFooter></CustomFooter>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import NavigationBar from "@/components/NavigationBar.vue";
import CustomFooter from "@/components/CustomFooter.vue";

export default defineComponent({
  name: 'App',
  components: {CustomFooter, NavigationBar},

  data() {
    return {}
  },
})
</script>

<style scoped>

.navigation-bar {
  width: 80%
}

.sheet-style {
  background-color: #181818;
  height: fit-content;
  width: 80%;
  margin-top: 10px;
}

.container-style {
  min-height: 80vh;
}

body{
  background-color: #121212;
}


</style>
