<template>
  <div id="nav" v-if="account">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script>
import { ref } from "vue";
// import { accountService } from "./services/account.service";

export default {
  setup() {
    const account = ref(false);
    // accountService.account.subscribe((x) => (account.value = x));

    return {
      account,
      // logout: accountService.logout,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
