<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="categories"
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
          :to="{ name: 'CreateCategory' }"
          >create</router-link
        >
      </template>

      <template #table-row="props">
        <span v-if="props.column.field == 'edit'">
            <router-link class="ml-4" :to="{name : 'EditCategory' , params : {slug : props.row.slug}}"><i class="fa-solid fa-pen"></i></router-link>
            <button @click="deleteCategory(props.row.slug)" class="ml-4" ><i class="fa-solid fa-trash"></i></button>
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
import axios from "axios";
export default {
  components: {
    VueGoodTable,
  },
  data() {
    return {
      categories: [],
      columns: [
        {
          label: "Id",
          field: "id",
        },
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Slug",
          field: "slug",
        },
        {
          label: "Edit",
          field: "edit",
        },
      ],
    };
  },

  mounted() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      axios
        .get("http://localhost:8000/api/admin/categories")
        .then((response) => {
          this.categories = response.data.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
    deleteCategory(slug) {
        axios.delete(`http://localhost:8000/api/admin/categories/${slug}`).then((response) => {
            window.location.reload();
        }).catch((response) => {
            console.log(response);
        })
    }
  },
};
</script>

<style scoped>
</style>