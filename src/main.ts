import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import UnIcon from "./plugins/icons";
import VueFeather from 'vue-feather';

const pinia = createPinia();

import ResumeSkills from "@/components/Resume/ResumeSkills.vue";
import ResumeAbout from "@/components/Resume/ResumeAbout.vue";
import ResumeEducation from "@/components/Resume/ResumeEducation.vue";
import ResumeExperiance from "@/components/Resume/ResumeExperiance.vue";
import router from "./router";


const app  = createApp(App);
app.use(UnIcon as any, {
    height: 18,
    width: 18,
})
.use(pinia).use(router);

app.component(VueFeather.name, VueFeather);

app.component('resume-skills', ResumeSkills);
app.component('resume-about', ResumeAbout);
app.component('resume-education', ResumeEducation);
app.component('resume-experiance', ResumeExperiance);
app.mount("#app");
