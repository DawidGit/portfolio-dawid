import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from "@/views/AboutMe.vue";
import Experience from  "@/views/Experience.vue";
import Skills from  "@/views/Skills.vue";
import Projects from  "@/views/Projects.vue";
import Contact from  "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'About Me',
      component: AboutMe
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router
