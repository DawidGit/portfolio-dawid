<script setup lang="ts">

import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <div class="contact-container">
    <h1>Contact</h1>
    <ContactForm class="contact-form"></ContactForm>
  </div>
</template>

<style scoped>

.contact-container{
  display: block;
}

.contact-form{
  margin-top: 40px;
}

</style>