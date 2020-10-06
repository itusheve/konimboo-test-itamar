<template>
  <div class="catalog">
    <div class="search">
      <v-text-field
        label="Filter"
        prepend-icon="mdi-magnify"
        v-model="searchCriteria"
      ></v-text-field>
    </div>
    <div class="my-container">
      <item
        v-for="(item, index) in filteredProducts"
        :key="index"
        :product="item"
      >
      </item>
    </div>
    
  </div>
</template>

<script>
import { GetDataFromAPI } from "../dataAdapter";
import item from "./Item";
let allProducts = [];
export default {
  name: "Catalog",
  components: {
    item,
  },
  data() {
    return {
        allProducts:[],
      searchCriteria: "",
      
    };
  },
  computed: {
    filteredProducts() {
      if (this.searchCriteria != "") {
        return allProducts.filter((item) => {
            return item.title.toLowerCase().includes(this.searchCriteria.toLowerCase()) ||
            item.price === this.searchCriteria;
        });
      }
      return this.allProducts;
    },
  },
  async created() {
    allProducts = await GetDataFromAPI();
    this.allProducts = allProducts
  },
};
</script>

<style scoped>
.search{
    background: white;;
    position: sticky;
    top:0;
    z-index: 2;
}
.my-container{
  display: flex;
}
</style>