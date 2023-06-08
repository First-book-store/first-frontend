<template>
    <div class="flex justify-center text-gray-700">
            <form @submit.prevent="createTag" class="w-1/2 p-8 mt-8 bg-gray-200 shadow-md">
                  <h1 class="text-2xl text-center">Create Tag</h1>
                  <div>
                        <label class="block py-1" for="name">Name</label>
                        <input type="text" class="w-full p-1 rounded" v-model="formData.name" placeholder="name">
                  </div>
                  <div class="flex justify-end py-4">
                        <router-link class="px-2 py-1 mr-2 transition border rounded shadow-md text-gray-50 bg-violet-400 border-violet-400 hover:bg-transparent hover:text-inherit" :to="{name : 'Tags'}">back</router-link>
                        <button class="px-2 py-1 transition border rounded shadow-md text-gray-50 bg-violet-400 border-violet-400 hover:bg-transparent hover:text-inherit">create</button>
                  </div>
            </form>
      </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                formData : {
                    name : ''
                }
            }
        },
        methods:{
            createTag(){
                axios.post('http://localhost:8000/api/admin/tags/',this.formData).then(()=>{
                    this.$router.push({name : 'Tags'});
                }).catch((response)=>{
                    console.log(response);
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
