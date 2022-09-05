<template>
  <div class="template">
    <div>
      <b-button @click="print"> Print </b-button>
    </div>
    <div class="container" id="resume">
      <div class="row">
        <div class="col">
          <h1 class="text-center">{{ formData.fullName }}</h1>
          <h4 class="text-center">{{ formData.position }}</h4>
        </div>
      </div>
      <div class="row" v-if="formData.contacts">
        <div
          v-for="(contact, index) in formData.contacts"
          :key="`conatct-key-${index}`"
          class="col-4"
        >
          <div class="d-flex align-items-center justify-content-center">
            <div class="pr-2">
              <b-icon :icon="contact.icon" />
            </div>
            <div class="pl-2">{{ contact.value }}</div>
          </div>
        </div>
      </div>
      <title-container text="Skills" />
      <div>
        <div class="row">
          <div v-for="(skill, index) in formData.skills" :key="index" class="col-4 text-center">
            <div class="d-flex align-items-center justify-content-center py-1">
                <div class="text-center">{{ skill }}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <title-container text="Experience" />
        <div>
          <div v-for="(experience, index) in formData.expiriences" :key="`conatct-key-${index}`">
            <div class="container">
              <div class="row row-cols-2">
                <div class="text-center">
                  <div class="col"><b>{{ experience.companyName }}</b></div>
                  <div class="col">{{ experience.position }}</div>
                  <div class="col">{{ experience.date.from }} - {{ experience.date.to }}</div>
                </div>
                <div class="col">{{ experience.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <title-container text="Education" />
        <div>
          <div v-for="(education, index) in formData.educations" :key="`conatct-key-${index}`">
            <div class="container">
              <div class="row row-cols-2">
                <div class="text-center">
                  <div class="col"><b>{{ education.educationName }}</b></div>
                  <div class="col">{{ education.date.from }} - {{ education.date.to }}</div>
                </div>
                <div class="col">{{ education.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <title-container text="About" />
        <div>
          <div class="row">
            <div class="col-8 ml-auto mr-auto">{{ formData.about }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TitleContainer from '@/components/TitleContainer.vue';

export default {
  components: { TitleContainer },
  name: 'TemplateView',
  comments: {
    TitleContainer,
  },
  computed: {
    ...mapState('form', ['formData']),
  },
  methods: {
    async print() {
      await this.$htmlToPaper('resume');
    },
  },
};
</script>
