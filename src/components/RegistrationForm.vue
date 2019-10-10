<template>
  <div class="input-form">
    <h3 class="title">Sign Up</h3>
    <form>
      <label for="email" >E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required autofocus>
      </div>
      <label for="name" >Name</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus>
      </div>
      <label for="nickname">Nickname</label>
      <div>
        <input id="nickname" type="text" v-model="nickname" required autofocus>
      </div>
      <label for="role" >Chose your role:</label>
        <select id="role" v-model="role" required>
          <option value=1>User</option>
          <option value=0>Admin</option>
        </select>
      <label for="password" >Password</label>
      <div>
        <input id="password" type="password" v-model="password" required>
      </div>
      <label for="password-confirm">Confirm Password</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>

        <button type="submit" v-on:click="vlidationForm">
          Sign up
        </button>
        <span v-if="error">Passwords do not match!</span>

    </form>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data () {
  return {
    error: false,
    email : "",
    name: "",
    nickname: "",
    password : "",
    password_confirmation: "",
    role: null,
  }
},
methods: {
  vlidationForm: function () {
    if (this.password !== this.password_confirmation) {
      this.password = '';
      this.password_confirmation = '';
      this.error = true;
    }
  }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
