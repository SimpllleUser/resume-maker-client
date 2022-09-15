<template>
  <div>
    <div>
      <b-button v-b-toggle.sidebar variant="success">
        <b-icon icon="plus-square" />
      </b-button>
      <b-sidebar id="sidebar" title="Selector conatiner" backdrop shadow>
        <div class="px-3 py-2">
          <div v-for="input in inputsList" :key="input.name" class="w-100 py-1">
            <b-button variant="outline-dark" @click="addInput(input)" class="d-block w-100 shadow">
              {{ input.name }}
            </b-button>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import types from '@/store/modules/form/types';

export default {
  name: 'SideBar',
  computed: {
    ...mapGetters('form', ['inputsList']),
  },
  methods: {
    ...mapMutations('form', { addInput: types.ADD_INPUT }),
  },
};
</script>

<style lang="scss" scoped></style>
