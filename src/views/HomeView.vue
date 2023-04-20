<template>
  <NavigationBar></NavigationBar>
  <AboutMe />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutMe from "@/components/AboutMe.vue";
import NavigationBar from "@/components/NavigationBar.vue";

// Components


export default defineComponent({
  name: 'HomeView',

  components: {
    NavigationBar,
    AboutMe,
  },
});
</script>
