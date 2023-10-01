<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer-buttons">
      <a class="linkedin-icon footer-icon" href="https://www.linkedin.com/in/dawidwidulinski" target="_blank"></a>
      <a class="instagram-icon footer-icon" href="https://www.instagram.com/dawid_wid" target="_blank"></a>
      <a class="facebook-icon footer-icon" href="https://www.facebook.com/dawid.widulinski" target="_blank"></a>
      <a class="github-icon footer-icon" href="https://github.com/DawidGit" target="_blank"></a>
    </div>
    <p>©2023 Dawid Widulinski | All Rights Reserved</p>
  </footer>
</template>

<style scoped>

.footer {
  border-top: 1px solid grey;
  max-height: 100px;
  background-color: #121212;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 30px;
  padding-top: 20px;
}

.footer-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.facebook-icon {
  background-image: url("../../public/footer-icons/facebookIcon.svg");
}
.linkedin-icon{
  background-image: url("../../public/footer-icons/linkedinIcon.svg");
}

.instagram-icon{
  background-image: url("../../public/footer-icons/instagramIcon.svg");
}
.github-icon{
  background-image: url("../../public/footer-icons/githubIcon2.svg");
}

.footer-icon{
  margin: 10px 30px;
  width: 32px;
  height: 32px;
  filter: grayscale(100%);
  border-radius: 10px;
}

.footer-icon:hover{
  transition: all 0.8s ease;
  filter: grayscale(0%);

}
p{
  text-align: center;
  font-size: 10px;
}

</style>