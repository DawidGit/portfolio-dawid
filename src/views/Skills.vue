<template>

  <div class="container">
    <h1>My Skills</h1>

    <!--    programming-->
    <div class="subtitle-container">
      <p>Programming</p>
      <v-row class="icons-container">
        <div class="icon" v-for="icon in icons" :key="icon">
          <span v-if="icon.category==='programming'" class="tooltiptext">{{ icon.name }}</span>
          <a v-if="icon.category==='programming'" href="https://www.google.com" target="_blank">
            <v-avatar v-if="icon.category==='programming'" class="avatar" :image="icon.path"></v-avatar>
          </a>
        </div>
      </v-row>
    </div>

    <!--    testing-->
    <div class="subtitle-container">
      <p>Testing</p>
      <v-row class="icons-container">
        <div class="icon" v-for="icon in icons" :key="icon">
          <span v-if="icon.category==='testing'" class="tooltiptext">{{ icon.name }}</span>
          <a v-if="icon.category==='testing'" href="https://www.google.com" target="_blank">
            <v-avatar v-if="icon.category==='testing'" class="avatar" :image="icon.path"></v-avatar>
          </a>
        </div>
      </v-row>

      <!--      other-->
      <div class="subtitle-container">
        <p>Other</p>
        <v-row class="icons-container">
          <div class="icon" v-for="icon in icons" :key="icon">
            <span v-if="icon.category==='other'" class="tooltiptext">{{ icon.name }}</span>
            <a v-if="icon.category==='other'" href="https://www.google.com" target="_blank">
              <v-avatar v-if="icon.category==='other'" class="avatar" :image="icon.path"></v-avatar>
            </a>
          </div>
        </v-row>

      </div>
    </div>
  </div>

</template>

<script setup>
import icons from '@/assets/skill-icons.json'
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

.container {
  display: block;
}

.subtitle-container {
  display: block;
  margin-top: 30px;

}

p {
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

.icons-container {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;

}

.avatar {
  height: 120px;
  width: 120px;
}

.avatar:hover {
  transform: scale(1.05);
}

.icon:hover .tooltiptext {
  visibility: visible;
}

.icon {
  position: relative;
}

.icon .tooltiptext {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: auto;
  max-width: 120px;
  color: white;
  font-size: 12px;
  background-color: #192733;
  border-radius: 5px;
  padding: 0 5px;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
}

</style>