<script seup lang="ts">
import axios from "axios";

export default {
  name: "Login",
  emits: ["changeView"],
  data() {
    return {
      cats: "NÃO",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/cats")
      .then((response) => (this.cats = response.data));
  },
};
</script>

<template>
  <div id="listMain">
    <table id="listCats">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Cor</th>
          <th>Gênero</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cat in cats" :key="cat.id">
          <td>
            <span>{{ cat.id }}</span>
          </td>
          <td>
            <span>{{ cat.name }}</span>
          </td>
          <td>
            <span>{{ cat.color }}</span>
          </td>
          <td>
            <span>{{ cat.gender }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
