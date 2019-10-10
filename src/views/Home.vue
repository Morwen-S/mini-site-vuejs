<template>
  <div class="home">
    <button v-on:click="component='registration-form'">Sign up</button>
    <button v-on:click="component='login-form'">Login</button>
    <component v-bind:is="component" v-on:changeCmponent="updateComponent($event)"></component>

    <router-link to="/user-profile">UserProfile test link</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LoginForm from '@/components/LoginForm.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'

export default {
  name: 'home',
  components: {
    'login-form': LoginForm,
    'registration-form': RegistrationForm,
  },
  data () {
  return {
    component: 'registration-form',
    };
  },
  methods: {
    updateComponent: function(updatedComponent) {
      this.component = updatedComponent;
    }
  }
}
</script>
