<template>
      <div class="flex justify-center text-gray-700">
                 <form @submit.prevent="editTag" class="w-1/2 p-4 mt-8 bg-gray-200 shadow-md">
                       <h1 class="text-2xl text-center">Edit Tag</h1>
                       <div>
                             <label class="block py-1" for="name">Name</label>
                             <input type="text" v-model="tag.name" class="w-full p-1 rounded" placeholder="name">
                       </div>
                       <div class="flex justify-end py-4">
                             <router-link class="px-2 py-1 mr-2 transition border rounded shadow-md text-gray-50 bg-violet-400 border-violet-400 hover:bg-transparent hover:text-inherit" :to="{name : 'Categories'}">back</router-link>
                             <button class="px-2 py-1 transition border rounded shadow-md text-gray-50 bg-violet-400 border-violet-400 hover:bg-transparent hover:text-inherit">edit</button>
                       </div>
                 </form>
           </div>
     </template>
     
     <script>
     import axios from 'axios'
           export default {
                 data () {
                       return {
                             slug : this.$route.params.slug,
                             tag : {}
                       }
                 },
                 mounted () {
                       axios.get(`http://localhost:8000/api/admin/tags/${this.slug}`).then((response) => {
                             this.tag = response.data.data
                       }).catch((response) => {
                             console.log(response);
                       })
                 },
                 methods : {
                       editTag() {
                             axios.patch(`http://localhost:8000/api/admin/tags/${this.slug}` , this.tag).then((response) => {
                                  this.$router.push({name : 'Tags'}) 
                             }).catch((response) => {
                                   console.log(response);
                             })
                       }
                 }
           }
     </script>
     
     <style lang="scss" scoped>
     
     </style>