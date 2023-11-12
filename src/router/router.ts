import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/Homepage.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Members from "../components/Members.vue";
import Apply from "../components/Apply.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/apply",
    name: "Apply",
    component: Apply,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
