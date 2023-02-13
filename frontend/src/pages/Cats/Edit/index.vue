<script seup lang="ts">
import axios from "axios";

export default {
  name: "EditCat",
  emits: ["changeView"],
  props: {
    selectedId: Number,
  },
  data() {
    return {
      cat: {
        id: "",
        name: "",
        color: "",
        gender: "",
      },
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:3000/cats/" + this.selectedId)
      .then((response) => (this.cat = response.data));
  },
  methods: {
    editCat() {
      axios
        .patch("http://127.0.0.1:3000/cats/" + this.cat.id, this.cat)
        .then(() => {
          this.$emit("changeView", "List");
        });
    },
  },
};
</script>

<template>
  <div id="divMainCreate">
    <h1>Editar Gato {{ cat.name }} ({{cat.id}})</h1>

    <form id="formAddCat" method="post" v-on:submit.prevent="editCat">
      <table>
        <tr>
          <td>
            <label>Nome</label>
          </td>
          <td>
            <input type="text" name="name" v-model="cat.name" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Cor</label>
          </td>
          <td>
            <input type="text" name="color" v-model="cat.color" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Gênero</label>
          </td>
          <td>
            <input type="text" name="gender" v-model="cat.gender" />
          </td>
        </tr>
      </table>

      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
