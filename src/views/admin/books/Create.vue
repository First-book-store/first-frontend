<template>
  <div class="flex justify-center">
    <form class="flex flex-wrap justify-between w-3/4 p-6 mt-8 shadow-md" @submit.prevent="createBook">
      <h1 class="w-[45%] p-4 text-3xl italic text-center text-violet-600">FIRST</h1>
      <div class="w-[45%] py-4">
        <label class="text-violet-600" for="name">Name</label>
        <input
        v-model="formData.name"
          type="text"
          class="w-full px-2 bg-transparent border-b border-gray-700 outline-none"
        />
      </div>

      <div class="w-[45%] py-4">
        <label class="text-violet-600" for="name">Category</label>
        <select         v-model="formData.category_id"  class="w-full px-2 bg-transparent border-b border-gray-700 outline-none">
          <option disabled selected></option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>

      <div class="w-[45%] py-4">
        <label class="text-violet-600" for="name">Author</label>
        <input
        v-model="formData.author"
          type="text"
          class="w-full px-2 bg-transparent border-b border-gray-700 outline-none"
        />
      </div>

      <div class="w-[45%] py-4">
        <label class="text-violet-600" for="name">File</label>
        <input
        @change="uploadFile"
          type="file"
          class="w-full px-2 bg-transparent border-b border-gray-700 outline-none"
        />
      </div>

      <div class="w-[45%] py-4">
        <label class="text-violet-600" for="name">Image</label>
        <input
          @change="uploadImage"
          type="file"
          class="w-full px-2 bg-transparent border-b border-gray-700 outline-none"
        />
      </div>

      <div class="w-full py-4">
        <label class=" text-violet-600" for="name">Description</label>
        <textarea v-model="formData.description" class="w-full mt-1 bg-transparent border border-gray-700" cols="30" rows="3"></textarea>
      </div>

      <div class="flex flex-wrap w-full py-4">
        <div class="mx-2" v-for="tag in tags" :key="tag.id">
          <input type="checkbox" v-model="formData.tags" :value="tag.name">
          <label for="tags">{{ tag.name }}</label>
        </div>
      </div>

      <div class="flex justify-end w-full">
        <button class="px-2 py-1 transition border rounded shadow-md text-gray-50 bg-violet-400 border-violet-400 hover:bg-transparent hover:text-inherit">
            create
          </button>
      </div>

    </form>
  </div>
</template>

<script>
import ApiService from '../../../ApiService';
export default {
    data () {
      return {
        categories : [],
        tags : [],
        formData : {
          name : '',
          author : '',
          category_id : null,
          tags : [],
          file_id : null,
          image_id : null,
          description : ''
        }
      }
    },
    mounted () {
      ApiService.get('http://localhost:8000/api/admin/categories').then((res) => {
        this.categories = res.data.data
      })
      ApiService.get('http://localhost:8000/api/admin/tags').then((res) => {
        this.tags = res.data.data
      })
    },

    methods : {
      createBook () {
        this.formData.tags = this.formData.tags.toString();
        ApiService.post('http://localhost:8000/api/admin/books' , this.formData).then((res) => {
          console.log(res);
        }).catch((res) => {
          console.log(res);
        })
      },

      uploadImage(event) {
        let file = event.target.files[0];
        let form = new FormData();
        form.set('image' , file);
        ApiService.post('http://localhost:8000/api/admin/images' , form).then((res) => {
          this.formData.image_id = res.data.data.id
        }).catch((res) => {
          console.log(res);
        })
      },

      uploadFile(event) {
        let file = event.target.files[0];
        let form = new FormData();
        form.set('file' , file);
        ApiService.post('http://localhost:8000/api/admin/files' , form).then((res) => {
          this.formData.file_id = res.data.data.id
          console.log(this.formData.file_id);
        }).catch((res) => {
          console.log(res);
        })
      }
    }
};
</script>

<style scoped>
</style>