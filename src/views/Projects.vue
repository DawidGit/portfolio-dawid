<script setup lang="ts">

import projects from "@/assets/projects.json";
import icons from "@/assets/skill-icons.json";
</script>


<template>
  <v-card class="card" v-for="project in projects" :key="project">
    <div class="project-container">
      <h1>{{ project.name }}</h1>
      <span class="description">
       <p>{{ project.description }}</p>
     </span>
      <p>Status: {{ project.status }}</p>

      <div class="technologies-container">
        <p>Used technologies:</p>
        <v-row class="icons-container">
          <div class="icon" v-for="technology in project.technologies" :key="technology">
            <div v-for="icon in icons" :key="icon">
              <span v-if="technology===icon.name" class="tooltip-text">{{ icon.name }}</span>
              <a v-if="technology===icon.name" :href="icon.website" target="_blank">
                <v-avatar v-if="technology===icon.name" class="avatar" :image="icon.path"></v-avatar>
              </a>
            </div>
          </div>
        </v-row>
      </div>
      <div class="available-on-container">
        <p> Available on: </p>
        <a :href="project.link" target="_blank">
          <button class="custom-button"></button>
        </a>
      </div>

    </div>
  </v-card>


</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:100");


.card {
  display: block;
  padding: 20px 40px;
  width: 80%;
  border-radius: 10px;
  z-index: 1;
  text-align: start;

}

.icons-container {
  display: flex;
  justify-content: start;
  margin: 5px 5px;

}

.icon {
  position: relative;
}

.icon .tooltip-text {
  visibility: hidden;
  position: absolute;
  z-index: 3;
  width: auto;
  max-width: 120px;
  color: white;
  font-size: 10px;
  background-color: #192733;
  border-radius: 5px;
  padding: 0 5px;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.avatar {
  height: 40px;
  width: 40px;
}

.avatar:hover {
  transform: scale(1.10);
}
button:hover {
  transform: scale(1.05);
}

.icon:hover .tooltip-text {
  visibility: visible;
}

.available-on-container {
  display: flex;
  justify-content: start;
  align-items: center;
}

h1, p {
  font-family: 'Titillium Web', sans-serif;
  line-height: normal;
  height: 100%;
}

.custom-button {
  background-image: url("/icons/githubButton.svg");
  width: 102px;
  height: 30px;
  border-radius: 20px;
  margin: 5px 10px;
}

.technologies-container {
  display: flex;
  justify-content: start;
  align-items: center;
}

.description {
  max-width: 80%;
  margin-bottom: 10px;
  text-align: justify;
}
</style>