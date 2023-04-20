<template>
    <v-app>
      <v-btn @click="toggleTheme"></v-btn>
      <v-main>
        <router-view/>
      </v-main>
    </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useTheme} from "vuetify";


export default defineComponent({
  name: 'App',

  methods: {
    toggleTheme() {

      return this.theme.current.dark.valueOf().valueOf() ? 'light' : 'dark';
    }
  },
  data() {
    return {
      theme: useTheme()
    }
  },
})
</script>

<style>


</style>
