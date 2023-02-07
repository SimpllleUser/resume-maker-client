<template>
  <div>
    <b-card
    text-variant="dark"
     title="Resumes"
      sub-title="Your resumes">
      <div>
        <div class="d-flex justify-content-start align-items-center flex-wrap">
          <div v-for="resumeItem in resumtListCards" :key="resumeItem.id" class="m-3">
            <div class="list--item d-flex align-items-center justify-content-center">
              <div class="list--item__action">
                <b-button @click="deleteResume(resumeItem.id)"
                  variant="primary"
                   class="delete">
                  <b-icon icon="x"></b-icon>
                </b-button>
              </div>

              <b-card
               :title="getItem(resumeItem.fullName, 'Full name')"
                 class="w-100 resume-card">
                 <div>
                  <b-img
                    :src="resumeItem.img"
                    blank-color="#ced4da"
                    :blank="!resumeItem.img"
                    style="height: 200px; width: 100%; object-fit: cover;"
                    rounded
                     alt="Profile photo"></b-img>
                 </div>
                <b-card-text class="w-100">
                  <b-badge class="text-primary border border-primary" variant="primary">
                    {{ getItem(resumeItem.position, 'Position') }}</b-badge>
                </b-card-text>

                <b-button variant="primary">
                    <router-link :to="`resume/${resumeItem.id}`" class="text-light">
                      Detail <b-icon icon="box-arrow-in-right" />
                    </router-link>
                  </b-button>
              </b-card>
            </div>
          </div>
          <div>
            <div class="list--item
              border border-dark d-flex align-items-center justify-content-center m-3">
              <b-button
              @click="addResumeHandle" size="lg" variant="outline-dark" style="border: none">
                <b-icon icon="plus-lg"></b-icon>
              </b-button>
            </div>
          </div>
          <!-- <b-col>1 of 3</b-col> -->
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

import types from '@/store/modules/resume/types';

export default {
  name: 'ResumesView',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState('resume', ['resumeList', 'createdResumeId']),
    ...mapGetters('resume', ['createdResumeId', 'resumtListCards']),
  },
  mounted() { },
  methods: {
    ...mapMutations('resume', {
      addResume: types.ADD_RESUME,
      deleteResume: types.DELETE_RESUME,
    }),
    addResumeHandle() {
      this.addResume();
      this.$router.push(`resume/${this.createdResumeId}`);
    },
    getItem(item, placeholder = '') {
      return item || placeholder;
    },
  },
};
</script>
<style lang="scss" scoped>
.list--item {
  min-width: 200px;
  height: 350px;
  position: relative;

  &:hover {
    .delete {
      opacity: 1;
      z-index: 3;
    }
  }

  .delete {
    z-index: -3;
    position: absolute;
    top: -20px;
    right: -20px;
    transition: all 0.3s;
  }

  // .resume-card {
  //   img {
  //     object-fit: cover;
  //   }
  // }
}
</style>
