<template>
  <div class="input-form">
    <h3 class="title">Sign Up</h3>
    <form>
      <label for="email" >E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required autofocus>
      </div>
      <label for="name">Name</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus>
      </div>
      <label for="login">Login</label>
      <div>
        <input id="login" type="text" v-model="login" required autofocus>
      </div>
      <p v-if="errorLogin">Login is already exist!</p>
      <label for="password" >Password</label>
      <div>
        <input id="password" type="password" v-model="password" required>
      </div>
      <label for="password-confirm">Confirm Password</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>
      <p v-if="errorPassword">Passwords do not match!</p>

        <button type="submit" v-on:click="validationForm">
          Sign up
        </button>
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
    errorLogin: false,
    errorPassword: false,
    email : "",
    name: "",
    login: "",
    password : "",
    password_confirmation: "",
    }
  },
  methods: {
    validationForm: function () {
      if (extract(this.login) !== null) {
        this.errorLogin = true;
      } else if (this.password !== this.password_confirmation) {
        this.password = '';
        this.password_confirmation = '';
        this.errorPassword = true;
      } else  {
        var obj = {
          userEmail: this.email,
          userName: this.name,
          userLogin: this.login,
          userPassword: this.password,
        }
        save(obj);
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
