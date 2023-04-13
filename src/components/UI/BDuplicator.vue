import { computed } from "vue";

<script setup lang="ts">
import { watch, computed, Ref, ref } from "vue";

type Properties = Array<unknown>;

interface Props {
  properties: Properties;
  allowEditable?: boolean;
}

const emit = defineEmits<{
  (event: "add"): void;
  (event: "remove", payload: number): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  allowEditable: false,
});

const editabelProperty: Ref<Properties> = ref(props.properties);

const handleAdd = (): void => {
  emit("add");
};

const canRemove = computed(() => editabelProperty.value?.length > 1);
const properties = computed(() => editabelProperty);

const handleRemove = (index: number): void => {
  emit("remove", index);
};

</script>

<template>
  <div class="relative">
    <div class="absolute duplicator-action-position" v-show="allowEditable">
      <button class="btn btn-primary btn-xs" @click="handleAdd()">Add</button>
    </div>
    <div
      v-for="(_, index) in props.properties"
      :key="`property-key-${index}`"
      class="relative"
    >
      <div class="absolute right-0" v-show="allowEditable && canRemove">
        <button class="btn btn-warning btn-xs" @click="handleRemove(index)">
          <span class="text-black">Remove</span>
        </button>
      </div>
      <slot :index="index"></slot>
    </div>
  </div>
</template>

<style scoped></style>