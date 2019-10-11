<template>
  <div>
    <h3 class="title">Log in</h3>
    <div class="input-form">
      <form>
        <label for="login">Nickname</label>
        <div>
          <input id="login" type="text" v-model="login" required autofocus>
        </div>
        <label for="password" >Password</label>
        <div>
          <input id="password" type="password" v-model="password" required>
        </div>
        <div v-if="error" class="error-block">
          <p> {{ error }} </p>
        </div>
            <button type="button" v-on:click="validationForm">
              Log in
            </button>
      </form>
    </div>
    </div>
</template>

<script>
import { extract } from '@/UserData.js'

export default {
  name: 'LoginForm',
  data(){
    return {
      error: "",
      login: "",
      password : "",
    }
  },
  methods :{
    validationForm: function () {
      if (extract(this.login) !== null) {
        if (this.password === extract(this.login).userPassword) {
          this.$router.push({ path: `/user-profile/${this.login}` });
        } else {
          this.error = "Wrong password!";
        }
      } else {
        this.error = "Wrong login!";
      }
    }
  },
}
</script>
<style>
</style>
