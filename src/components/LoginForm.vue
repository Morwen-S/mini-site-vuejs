<template>
  <div class="input-form">
    <h3 class="title">Log in</h3>
    <form>
      <label for="email" >E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required autofocus>
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
        <router-link to="/user-profile">
          <button type="submit">
            Login
          </button>
        </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data(){
    return {
      email : "",
      nickname: "",
      password : "",
      role: null,
    }
  },
  methods :{
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
