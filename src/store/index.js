import Vue from 'vue';
import Vuex from 'vuex';
import form from '@/store/modules/form';
import resume from '@/store/modules/resume';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    form,
    resume,
  },
});
