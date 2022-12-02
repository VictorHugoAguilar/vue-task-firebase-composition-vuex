<script>
import useLogin from "../use-login";

export default {
  setup() {
    const state = useLogin();

    return {
      ...state,
    }
  }
};
</script>

<template>
  <div>
    <input type="text" placeholder="username" v-model="username.value" />
    <input type="password" placeholder="password" v-model="password.value" />
    <button @click="login" :disabled="!isValid">LOGIN</button>
    <div v-if="error.value" class="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>