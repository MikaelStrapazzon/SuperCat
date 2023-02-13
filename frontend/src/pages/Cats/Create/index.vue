<script seup lang="ts">
import axios from "axios";

export default {
  name: "CreateCat",
  emits: ["changeView"],
  data() {
    return {
      form: {
        name: "",
        color: "",
        gender: "",
      },
    };
  },
  methods: {
    addCat() {
      axios.post("http://127.0.0.1:3000/cats", this.form).then(() => {
        this.$emit("changeView", "List");
      });
    },
  },
};
</script>

<template>
  <div id="divMainCreate">
    <h1>Inserir Gato</h1>

    <form id="formAddCat" method="post" v-on:submit.prevent="addCat">
      <table>
        <tr>
          <td>
            <label>Nome</label>
          </td>
          <td>
            <input type="text" name="name" v-model="form.name" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Cor</label>
          </td>
          <td>
            <input type="text" name="color" v-model="form.color" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Gênero</label>
          </td>
          <td>
            <input type="text" name="gender" v-model="form.gender" />
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
