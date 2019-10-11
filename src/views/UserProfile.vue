<template>
  <div class="">
    <header>
      <button type="button" v-on:click="logOut">
        Log out
      </button>
    </header>
    <div>
      <img src="@/assets/foto.png" alt="">
    </div>
    <div>
      <p>User Profile</p>
      <div>Name: {{ userData.userName }}</div>
      <div>Login: {{ userData.userLogin}} </div>

      <div>
        <ol>
          <li v-for="todo in todos"> {{todo}}</li>
        </ol>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
import { extract } from '@/UserData.js'

export default {
  name: 'userProfile',
  data(){
    return {
      userData: extract(this.$route.params.login),
      newTodoText: '',
       todos: [
          'Помыть посуду',
          'Вынести мусор',
          'Подстричь газон'
       ],
    }
  },
  components: {

  },
  methods: {
    logOut: function () {
      this.$router.push({ path: '/' });
    }
  },
}
</script>
