<template>
  <div>
    <b-card text-variant="dark" title="Resumes" sub-title="Your resumes">
      <div>
        <div class="d-flex justify-content-start align-items-center flex-wrap">
          <div v-for="resumeItem in resumeList" :key="resumeItem.key" class="m-3">
            <div
              class="list--item border border-dark d-flex align-items-center justify-content-center"
            >
              <div class="list--item__action">
                <b-button @click="deleteResume(resumeItem.id)" variant="dark" class="delete">
                  <b-icon icon="x"></b-icon>
                </b-button>
              </div>
              <b-button variant="danger">
                <router-link
                :to="`resume/${resumeItem.id}`"
                class="text-dark"
                >{{ resumeItem.id }}</router-link>
              </b-button>
            </div>
          </div>
          <div>
            <div
              class="list--item
              border border-dark d-flex align-items-center justify-content-center m-3"
            >
              <b-button
                @click="addResumeHandle"
                size="lg"
                variant="outline-dark"
                style="border: none"
              >
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
    ...mapGetters('resume', ['createdResumeId']),
  },
  mounted() {},
  methods: {
    ...mapMutations('resume', {
      addResume: types.ADD_RESUME,
      deleteResume: types.DELETE_RESUME,
    }),
    addResumeHandle() {
      this.addResume();
      this.$router.push(`resume/${this.createdResumeId}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.list--item {
  width: 200px;
  height: 250px;
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
}
</style>
