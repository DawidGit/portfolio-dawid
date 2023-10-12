import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import {install} from "vue3-recaptcha-v2";

loadFonts()


createApp(App)
    .use(router)
    .use(vuetify)
    .use(install, {
        sitekey: '6Ldk1oAoAAAAABdGsyAjZqisOjPREVj5heFX-h90'
    })
    .mount('#app')

