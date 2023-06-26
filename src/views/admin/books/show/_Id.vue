<template>
    <div class="flex justify-center">
        <div v-if="book.image" class="w-1/2 p-6 shadow-lg">
                <img class="w-full" :src="book.image.image" alt="image of the book">
            <div class="my-6">
                <h1 class="my-1">Name - {{ book.name }}</h1>
                <h1 class="my-1">Author - {{ book.author }}</h1>
                <h2 class="my-1">Category - {{ book.category.name }}</h2>
                <div class="my-1">
                    tags - <span class="px-2 py-1 mx-2 text-white rounded-sm bg-violet-500" v-for="tag in book.tags" :key="tag">{{ tag }}</span>
                </div>
                <p>Description - {{ book.description }}</p>
            </div>
            <div class="flex justify-end">
                <router-link :to="{name : 'EditBook' , params : {slug : book.slug}}" class="px-4 py-1 mr-2 transition bg-yellow-400 border border-yellow-400 rounded shadow-md text-gray-50 hover:bg-transparent hover:text-inherit">
                    edit
                </router-link>
                <button class="px-2 py-1 transition bg-red-400 border border-red-400 rounded shadow-md text-gray-50 hover:bg-transparent hover:text-inherit" @click="deleteBook(book.slug)">
                    delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '../../../../ApiService'
import imagePath from '../../../../ImagePath'
    export default {
        data () {
            return {
                slug : this.$route.params.slug,
                book : {}
            }
        },
        mounted () {
            ApiService.get(`admin/books/${this.slug}`).then((res) => {
                this.book = res.data.data;
                this.book.image.image = imagePath(this.book.image.image);
                console.log(this.book);
            })
        },
        methods : {
            deleteBook(slug) {
                ApiService.delete(`admin/books/${slug}`).then((res) => {
                    this.$router.push({name : 'Books'})
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>