<script setup lang="ts">

import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <div class="contact-container">
    <p> Let's be in touch! </p>
    <ContactForm class="contact-form"></ContactForm>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

.contact-container{
  display: block;
}

.contact-form{
  margin-top: 40px;
}

p{
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

</style>