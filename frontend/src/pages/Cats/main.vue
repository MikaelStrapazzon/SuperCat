<script seup lang="ts">
import List from "./List/index.vue";
import Create from "./Create/index.vue";
import Edit from "./Edit/index.vue";

export default {
  data() {
    return {
      viewRender: "List" as "List" | "Create" | "Edit",
      selectedId: 0,
    };
  },
  components: {
    Create,
    List,
    Edit,
  },
  methods: {
    changeView(viewName: "List" | "Create" | "Edit") {
      this.viewRender = viewName;
    },
    changeSelectedId(id: number) {
      this.selectedId = id;
    },
  },
};
</script>

<template>
  <main>
    <List v-if="viewRender === 'List'" @change-view="changeView" @change-selected-id="changeSelectedId" />
    <Create v-else-if="viewRender === 'Create'" @change-view="changeView" />
    <Edit v-else-if="viewRender === 'Edit'" @change-view="changeView" :selectedId="selectedId" />
  </main>
</template>

<style scoped>
main {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: var(--primary-color);
}
</style>
