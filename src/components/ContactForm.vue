<script setup lang="ts">
import {ref} from "vue";
import {MessageClient} from 'cloudmailin';



const mailFrom: string = "contact_form@dawidwidulinski.com"
const apiKeyEnv =  import.meta.env.VITE_API_KEY_CMI
const userNameEnv = import.meta.env.VITE_USER_NAME_CMI;
const mailToEnv = import.meta.env.VITE_MAIL_TO_DAWID;

const form = ref({
  name: '',
  email: '',
  message: ''
});

async function submitForm() {

  console.log("USERNAME" + userNameEnv)
  console.log("TOKEN" + apiKeyEnv)
  console.log("MAILTO" + mailToEnv)

  const client = new MessageClient({username: userNameEnv, apiKey: apiKeyEnv});
  const message = {
    to: mailToEnv,
    from: form.value.name + '<' + mailFrom + '>',
    plain: form.value.message,
    html: "<h1>" + form.value.message + "</h1>",
    subject: "Mail from contact form"
  }


  console.log(form)

  try {

    const response = await client.sendMessage(message)
    form.value.name = '';
    form.value.email = '';
    form.value.message = '';
    alert('The email was sent successfully.');
    console.log(response)

  } catch (error) {
    console.error('An error occurred while sending an e-mail:', error);
    alert('An error occurred while sending an e-mail');
  }
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
          <textarea class="input-field-style message-field" v-model="form.message" id="message" required></textarea>
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

.form-elements {
  margin-bottom: 15px;
}

.form-elements label {
  display: block;
  margin-bottom: 5px;
}

.form-elements input {
  border-radius: 5px;
  cursor: text;
}

.message-field {
  height: 200px;
  border-radius: 5px;
}

button {
  border: 1px solid grey;
  width: 100px;
  height: 30px;
  border-radius: 5px;
}

button:hover {
  background-color: grey;
  transition: all 1s;
}

</style>