<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="books"
      v-on:row-click="onRowClick"
      :search-options="{
        enabled: true,
      }"
      :pagination-options="{
        enabled: true,
      }"
    >
      <template #table-actions>
        <router-link
          class="px-2 py-1 transition border rounded shadow-md text-gray-50 bg-violet-400 border-violet-400 hover:bg-transparent hover:text-inherit"
          :to="{name : 'CreateBook'}"
          >create</router-link
        >
      </template>

      <template #table-row="props">
        <span v-if="props.column.field == 'show'">
          <router-link class="px-2 py-1 text-white bg-violet-500" :to="{name : 'ShowBook' , params : {slug : props.row.slug}}">
            show
          </router-link>
        </span>
        <span v-else-if="props.column.field == 'image'">
          <img class="w-24" :src="props.row.image.image" alt="">
        </span>
        <span v-else-if="props.column.field == 'category'">
          {{ props.row.category.name }}
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import "vue-good-table-next/dist/vue-good-table-next.css";
import { VueGoodTable } from "vue-good-table-next";
import ApiService from '../../../ApiService';
import imagePath from '../../../ImagePath'
export default {
  components: {
    VueGoodTable,
  },
  data() {
    return {
      books: [],
      columns: [
        {
          label: "Id",
          field: "id",
        },
        {
          label : 'Image',
          field : 'image'
        },
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Category",
          field: "category",
        },
        {
          label: "show",
          field: "show",
        },
      ],
    };
  },

  mounted () {
    ApiService.get('admin/books').then((res) => {
      this.books = res.data.data
      this.books.map((book) => {
        book.image.image = imagePath(book.image.image)
      })
    }).catch((res) => {
      console.log(res);
    })
  },

  methods : {
    onRowClick (row) {

    }
  }
};
</script>

<style  scoped>
</style>