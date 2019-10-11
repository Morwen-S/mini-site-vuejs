<template>
  <div class="home">
    <custom-header>
      <button v-on:click="component='registration-form'">Sign up</button>
      <button v-on:click="component='login-form'">Log in</button>
    </custom-header>
    <component v-bind:is="component" v-on:changeCmponent="updateComponent($event)"></component>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import LoginForm from '@/components/LoginForm.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'


export default {
  name: 'home',
  components: {
    'login-form': LoginForm,
    'registration-form': RegistrationForm,
    'custom-header': Header,
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
