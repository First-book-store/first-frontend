<template>
    <div class="flex justify-center text-gray-700">
      <div class="w-3/4 p-6 mt-16 shadow-md md:w-1/3">
        <h1 class="p-4 text-3xl italic text-center text-violet-600">FIRST</h1>
        <form @submit.prevent="login">
          <div class="py-4">
            <label class="text-violet-600" for="name">Email</label>
            <input
              v-model="formData.email"
              type="email"
              class="w-full px-2 bg-transparent border-b border-gray-700 outline-none"
            />
          </div>
          <div class="py-4">
            <label class="text-violet-600" for="name">Password</label>
            <input
              v-model="formData.password"
              type="password"
              class="w-full px-2 bg-transparent border-b border-gray-700 outline-none"
            />
          </div>

          <div class="flex justify-between my-4">
            <p class="my-auto">
              Doesn't have an account?
              <router-link class="text-violet-600" :to="{name : 'Register'}">Sign Up</router-link>
            </p>
            <button
              class="px-2 py-1 transition border rounded shadow-md text-gray-50 bg-violet-400 border-violet-400 hover:bg-transparent hover:text-inherit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import TokenService from '../../TokenService';
  export default {
    data() {
      return {
        formData: {
          email: "",
          password: "",
        },
      };
    },
  
    methods: {
      login() {
          axios.post('http://localhost:8000/api/login' , this.formData).then((res) => {
              TokenService.setToken(res.data.data.token)
              this.$router.push('/admin');
          }).catch((res) => {
              console.log(res);
          })
      }
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>