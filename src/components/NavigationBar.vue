<template>
  <v-container fluid="true" style="padding-bottom: 0">
    <div class="toolbar">
       <v-toolbar-title class="toolbar-title"><h1>Dawid Widulinski</h1></v-toolbar-title>
          <v-toolbar-items class="toolbar-items">
          <router-link v-for="route in $router.options.routes" :key="route" :to="route.path">
            <v-btn class="button"  color="grey" variant="text">{{ route.name }}</v-btn>
          </router-link>
          </v-toolbar-items>
    </div>
  </v-container>
</template>

<script>
import router from "@/router";

export default {
  name: "NavigationBar",
  data() {
    return {
      toolbarHeight: 50,
    }
  },
  methods: {
    handleResize() {
      // jeśli szerokość okna jest mniejsza niż 600 pikseli, zmniejsz wysokość toolbar'a
      if (window.innerWidth < 600) {
        this.toolbarHeight = 50 * (this.$router.options.routes.length);
        console.log(this.$router.options.routes.length)
      } else {
        this.toolbarHeight = 50;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize(); // inicjalizacja

  },
  async beforeUnmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    $router() {
      return router;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

.button {
  line-height: 50px;
}

.toolbar {
  background-color: #121212;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  justify-content: flex-end;

}

.toolbar-items {
  display: flex;
  align-items: end;
  margin-left: 0;
}

.toolbar-title {
  display: block;

}

h1 {
  font-family: 'Titillium Web', sans-serif;
  font-size: 50px;
  display: block;
  line-height: 1.5;
  height: 100%;
}

@media only screen and (max-width: 1280px) {
  .toolbar {
    flex-direction: column;
    width: 100%;
    align-items: center;;
    display: block;
  }

  .toolbar-items {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  h1 {
    font-family: 'Titillium Web', sans-serif;
    font-size: xxx-large;
    line-height: normal;
    display: flex;
    justify-content: center;
  }

}


@media only screen and (max-width: 600px) {

  .toolbar {
    flex-direction: column;
    width: 100%;
    align-items: center;;
    display: block;
  }

  .toolbar-title {
    display: block;

  }

  .toolbar-items {
    display: block;
    align-items: center;
    width: 100%;
  }

  .button {
    width: 100%;
    text-align: center;
  }

  h1 {
    font-family: 'Titillium Web', sans-serif;
    font-size: 40px;
    line-height: normal;
  }
}




</style>