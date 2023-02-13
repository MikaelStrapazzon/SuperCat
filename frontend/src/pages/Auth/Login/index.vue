<script seup lang="ts">
export default {
  name: "Login",
  emits: ["changeView"],
};
</script>

<template>
  <div id="loginMain">
    <div id="logoDiv">
      <img src="@/assets/icons/black_cat.png" alt="Logo" />
      <span>Super<span class="highlightedLetter">Cat</span></span>
    </div>

    <div id="inputsDiv">
      <form action="">
        <label for="emailLogin">Email</label>
        <input id="emailLogin" name="email" type="text" />

        <label for="passwordLogin">Password</label>
        <input id="passwordLogin" name="password" type="text" />

        <input type="submit" value="Submit" />

        <a href="#" @click="$emit('changeView', 'Register')"
          >Don't have an account? register</a
        >
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
