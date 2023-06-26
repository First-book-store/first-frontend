<template>
  <div class="flex justify-center text-gray-700">
    <div class="w-3/4 p-6 mt-8 shadow-md md:w-1/3">
      <h1 class="p-4 text-3xl italic text-center text-violet-600">FIRST</h1>
      <form @submit.prevent="register">
        <div class="py-4">
          <label class="text-violet-600" for="name">Name</label>
          <input
            v-model="formData.name"
            type="text"
            class="w-full px-2 bg-transparent border-b border-gray-700 outline-none"
          />
        </div>
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
        <div class="py-4">
          <label class="text-violet-600" for="name"
            >Confirm Your Password</label
          >
          <input
            v-model="formData.password_confirmation"
            type="password"
            class="w-full px-2 bg-transparent border-b border-gray-700 outline-none"
          />
        </div>
        <div class="flex justify-between my-4">
          <p class="my-auto">
            Already have an account?
            <router-link class="text-violet-600" :to="{name : 'Login'}">Sign In</router-link>
          </p>
          <button
            class="px-2 py-1 transition border rounded shadow-md text-gray-50 bg-violet-400 border-violet-400 hover:bg-transparent hover:text-inherit"
          >
            Sign Up
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
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },

  methods: {
    register() {
        axios.post('http://localhost:8000/api/register' , this.formData).then((res) => {
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