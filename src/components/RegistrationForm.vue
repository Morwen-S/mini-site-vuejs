<template>
  <div class="input-form">
    <h3 class="title">Sign Up</h3>
    <form>
      <label for="name">Name</label>
      <div>
        <input id="name" type="text" v-model="name">
      </div>
      <label for="login">Login</label>
      <div>
        <input id="login" type="text" v-model="login">
      </div>
      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password">
      </div>
      <label for="password-confirm">Confirm Password</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_confirmation">
      </div>

        <button type="button" v-on:click="validationForm">
          Sign up
        </button>
        <span v-if="error"> {{ error }} </span>
    </form>
  </div>
</template>

<script>
import {save, extract} from '@/UserData.js'
// save user's data in localStorage


export default {
  name: 'RegistrationForm',
  data () {
  return {
    error: "",
    name: "",
    login: "",
    password : "",
    password_confirmation: "",
    }
  },
  methods: {
    validationForm: function () {
      this.error = "";

      if (!this.name || !this.login || !this.password || !this.password_confirmation) {
        this.error = "Fill in all the fields!"
      }else if (extract(this.login) !== null) {
        this.error = 'Logn is used before!';
      } else if (this.password !== this.password_confirmation) {
        this.password = '';
        this.password_confirmation = '';
        this.error = 'Passwords do not match!';
      }

      if (!this.error){
        var obj = {
          userName: this.name,
          userLogin: this.login,
          userPassword: this.password,
        }
        save(obj);
        this.$emit('changeCmponent', 'login-form')
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
