<script seup lang="ts">
import List from "./List/index.vue";

export default {
  data() {
    return {
      viewRender: "List" as "List",
    };
  },
  components: {
    List,
  },
  methods: {
    changeView(viewName: "List") {
      this.viewRender = viewName;
    },
  },
};
</script>

<template>
  <main>
    <List v-if="viewRender === 'List'" @change-view="changeView" />
    <h1 v-else-if="viewRender === 'Register'">TESTE 2</h1>
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
