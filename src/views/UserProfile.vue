<template>
  <div>
    <custom-header>
      <button type="button" v-on:click="logOut">
        Log out
      </button>
    </custom-header>
    <div class="user-paje">


      <div class="block">

        <div class="profile-img ">
          <img src="@/assets/foto.png" alt="">
        </div>

        <div class="profile-info">
          <h2>{{ userData.userLogin}}</h2>
          <p>Name: {{ userData.userName }}</p>
          <p>Login: {{ userData.userLogin}} </p>
        </div>
      </div>

      <div class="block">

        <div class="list">
          <ul>
            <h3>Some useful list</h3>
            <li v-for="todo in todos"> {{todo}}</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { extract } from '@/UserData.js'

export default {
  name: 'userProfile',
  components: {
    'custom-header': Header,
  },
  data(){
    return {
      userData: extract(this.$route.params.login),
      newTodoText: '',
       todos: [
          'Very useful information about site and anouther things.',
          'Some text, which very important, read it. Maybe somthing about Star wars? Or not! ',
          'That can be samething dynamic. Your frend list, for example...'
       ],
    }
  },
  methods: {
    logOut: function () {
      this.$router.push({ path: '/' });
    }
  },
}
</script>

<style lang='less'>

</style>
