<script setup lang="ts">

 const props = defineProps< {
   messageType: "error" | "success" | "warning" | "info" | undefined
   messageText: String,
}>()

</script>

<template>
  <div>
    <v-overlay class="overlay" @click="$emit('hideAlertEvent')"
        :model-value = true
        location-strategy="connected">
<!--        scroll-strategy="close"-->
      <div class="alert">
        <v-alert :text="props.messageText" :type="props.messageType"></v-alert>
      </div>

    </v-overlay>
  </div>

</template>

<style scoped>

.alert {
  display: flex;
  align-items: center;
  height: 100vh;
  width: auto;
}
.overlay{
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center
}

</style>