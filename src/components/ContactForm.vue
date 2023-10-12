<script setup lang="ts">
import {ref} from "vue";
import {MessageClient} from 'cloudmailin';
import {RecaptchaV2, useRecaptcha} from "vue3-recaptcha-v2";
import AlertWindow from "@/components/AlertWindow.vue";


const mailFrom: string = "contact_form@dawidwidulinski.com"
const apiKeyEnv = import.meta.env.VITE_API_KEY_CMI
const userNameEnv = import.meta.env.VITE_USER_NAME_CMI;
const mailToEnv = import.meta.env.VITE_MAIL_TO_DAWID;
const {handleReset} = useRecaptcha();

let messageType: "error" | "success" | "warning" | "info" = "info"
let messageText: string = ""
let alertVisibility = ref(false)

const form = ref({
  name: '',
  email: '',
  message: ''
});

let captchaStatus: boolean = false


async function submitForm(this: any) {

  if (captchaStatus) {

    const client = new MessageClient({username: userNameEnv, apiKey: apiKeyEnv});
    const message = {
      to: mailToEnv,
      from: form.value.name + '<' + mailFrom + '>',
      plain: form.value.message,
      html: "<h1>" + form.value.message + "</h1>",
      subject: "Mail from contact form"
    }

    try {

      await client.sendMessage(message)
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
      showAlert("success", "Thank You for the message. I will reply as soon ass possible. Have a nice day!")


    } catch (error) {
      console.error('An error occurred while sending an e-mail:', error);
      showAlert("error", "An error occurred while sending an e-mail. Please try again or contact with me on LinkedIn.")


    }
  } else {
    showAlert("warning", "Check the recaptcha checkbox")
  }


}

const handleWidgetId = (widgetId: number) => {
  console.log("Widget ID: ", widgetId);
  handleReset(widgetId);
};
const handleErrorCallback = () => {
  console.log("Error callback");
};
const handleExpiredCallback = () => {
  console.log("Expired callback");
  captchaStatus = false
};
const handleLoadCallback = (response: unknown) => {
  console.log("Load callback", response);
  captchaStatus = true
};

const showAlert = (type: "error" | "success" | "warning" | "info", text: string) => {
  messageType = type
  messageText = text
  alertVisibility.value = true
  console.log("VISIBILITY : " + alertVisibility.value)
}
const alertWindowClosed = () => {
  alertVisibility.value = false
}

</script>

<template>
  <div class="form-style">
    <form @submit.prevent="submitForm">
      <div class="form-elements">
        <div class="input-group">
          <label for="name">Name:</label>
          <input class="input-field-style" v-model="form.name" type="text" id="name">
        </div>
        <div class="form-elements">
          <label for="email">Email:</label>
          <input class="input-field-style" v-model="form.email" type="email" id="email">
        </div>
        <div class="form-elements">
          <label for="message">Message:</label>
          <textarea class="input-field-style message-field" v-model="form.message" id="message"></textarea>
        </div>

        <div class="recaptcha">
          <RecaptchaV2
              language="en"
              ref="recaptcha"
              @widget-id="handleWidgetId"
              @error-callback="handleErrorCallback"
              @expired-callback="handleExpiredCallback"
              @load-callback="handleLoadCallback"
              theme="dark"
              size="normal"/>
        </div>
        <AlertWindow @hideAlertEvent="alertWindowClosed" v-if="alertVisibility" :message-text="messageText"
                     :message-type="messageType"></AlertWindow>

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
  caret-color: #181818;
}

.form-elements {
  position: relative;
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
  margin-top: 20px;
  border: 1px solid grey;
  width: 100px;
  height: 30px;
  border-radius: 5px;
}

button:hover {
  background-color: grey;
  transition: all 1s;
}

.recaptcha {
  display: grid;
  place-items: center;
}

input {
  text-rendering: optimizeLegibility;
  animation: nazwa-animacji 2s ease-in-out infinite;
}


</style>