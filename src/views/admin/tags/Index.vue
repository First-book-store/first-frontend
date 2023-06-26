<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="tags"
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
          :to="{ name: 'CreateTag' }" >create</router-link>
      </template>

      <template #table-row="props">
        <span v-if="props.column.field == 'edit'">
          <router-link
            class="ml-4"
            :to="{ name: 'EditTag', params: { slug: props.row.slug } }"
            ><i class="fa-solid fa-pen"></i
          ></router-link>
          <button @click="deleteTag(props.row.slug)" class="ml-4">
            <i class="fa-solid fa-trash"></i>
          </button>
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
import ApiService from "../../../ApiService";
export default {
  components: {
    VueGoodTable,
  },
  data() {
    return {
      tags: [],
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
  mounted () {
    this.getTags();
  },
  methods: {
    getTags() {
      ApiService
        .get("http://localhost:8000/api/admin/tags")
        .then((response) => {
          this.tags = response.data.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
    deleteTag(slug) {
        axios.delete(`http://localhost:8000/api/admin/tags/${slug}`).then((response) => {
            window.location.reload();
        }).catch((response) => {
            console.log(response);
        })
    }
  },
};
</script>

<style  scoped>
</style>