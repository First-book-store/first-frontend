<template>
      <div class="w-full flex mt-10 justify-center ">
        <form @submit.prevent="createData" class="h-fit grid gap-6 mb-6 md:grid-cols-1 w-2/6 rounded-lg">
            <div class="text-center text-3xl text-orange-600 font-semibold">Category</div>
            <div>
            <label for="name" class="block text mb-2 text-sm font-medium text-orange-900 ">Name</label>
            <input type="text" v-model="formData.name" class="bg-gray-200 border border-gray-500 text-gray-900 text-sm rounded-lg w-full p-2.5">
            </div>
                <button type="submit" class="text-dark bg-orange-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Create</button>
                <p class="w-full py-2  text-sm font-medium text-center bg-teal-500 rounded-lg text-dark ">
                <router-link class="w-full" :to="{name : 'Categories'}">Back</router-link>
                </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                formData : {
                    name : ''
                }
            }
        },
        methods: {
            createData(){
                axios.post('http://localhost:8000/api/admin/categories',this.formData)
                 .then((response) => {
                        console.log(response);
                        this.$router.push('/admin/categories')
                    })
                .catch((response) => {
                    console.log(response);
                })
        },
    }
    }
</script>

<style>

</style>