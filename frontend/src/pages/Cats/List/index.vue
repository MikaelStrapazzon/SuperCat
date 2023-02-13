<script seup lang="ts">
import axios from "axios";

export default {
  name: "ListCats",
  emits: ["changeView", "changeSelectedId"],
  data() {
    return {
      cats: [],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/cats")
      .then((response) => (this.cats = response.data));
  },
  methods: {
    removeCat(id: number) {
      axios.delete("http://127.0.0.1:3000/cats/" + id).then(() => {
        location.reload();
      });
    },
    editCat(id: number) {
      this.$emit("changeSelectedId", id);
      this.$emit("changeView", "Edit");
    },
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
          <th>
            <span>Ações</span>
            <div
              class="buttonAction buttonAdd"
              @click="$emit('changeView', 'Create')"
            >
              +
            </div>
          </th>
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

          <td>
            <div>
              <div class="buttonAction buttonRemove" @click="removeCat(cat.id)">X</div>
              <div class="buttonAction buttonEdit" @click="editCat(cat.id)">🖋️</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
