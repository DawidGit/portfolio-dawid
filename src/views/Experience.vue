<template>
  <v-card class="card" v-for="job in jobs.jobs" :key="job">
    <div class="avatar-container">
      <div class="avatar">
        <a :href="job.companyWebsite" target="_blank">
          <v-avatar class="custom-btn" :image="'src' + job.companyLogo" size="60"></v-avatar>
        </a>
      </div>
      <div class="job-title-container">
        <h1>{{ job.title }}</h1>
        <p>{{ job.company }}</p>
        <p>{{ job.place }}</p>
      </div>
    </div>
    <ul class="responsibilities">
      <li v-for="responsibility in job.responsibilities.valueOf()" :key="responsibility">{{ responsibility }}</li>
    </ul>
  </v-card>
</template>

<script setup>
import jobs from '@/assets/experience.json'
</script>


<style scoped>


.card {
  display: block;
  padding: 20px 40px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;

}

.avatar-container {
  display: flex;
  justify-content: flex-start;
  padding: 10px 10px;
}

.avatar {
  display: flex;
  padding-right: 30px;
  justify-items: center;
  padding-top: 5px;
}

.custom-btn:hover {
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
  transition: box-shadow 0.3s;
}

.job-title-container {
  display: block;
  align-content: center;
}

.responsibilities {
  text-align: left;
  padding-top: 20px;
  padding-left: 20px;
}

p {
  text-align: left;
}

h1 {
  color: #f2f2f2;
  font-size: 20px;

}

v-col {
  height: 300px;
}


@media only screen and (min-width: 1280px) {

}

</style>