<script setup lang="ts">
import {ref} from "vue";

const form = ref({
  name: '',
  email: '',
  message: ''
});

function submitForm() {

}

</script>

<template>
  <div class="form-style">
    <form @submit.prevent="submitForm">
      <div class="form-elements">
        <div class="input-group">
          <label for="name">Name:</label>
          <input class="input-field-style" v-model="form.name" type="text" id="name" required>
        </div>
        <div class="form-elements">
          <label for="email">Email:</label>
          <input class="input-field-style" v-model="form.email" type="email" id="email" required>
        </div>
        <div class="form-elements">
          <label for="message">Message:</label>
          <textarea class="input-field-style" v-model="form.message" id="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

.form-style {
  align-content: start;
  display: block;
}

.input-field-style {
  background-color: #f2f2f2;
  margin: 10px;
  width: 300px;
  color: #181818;
}
.form-elements{
  margin-bottom: 15px;
}

.form-elements label{
  display: block;
  margin-bottom: 5px
}


</style>