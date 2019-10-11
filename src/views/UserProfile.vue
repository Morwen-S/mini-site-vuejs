<template>
  <div class="">

    <custom-header>
      <button type="button" v-on:click="logOut">
        Log out
      </button>
    </custom-header>

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
          'Помыть посуду',
          'Вынести мусор',
          'Подстричь газон'
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
