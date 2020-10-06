<template>
<div class="item">
    <v-card elevation="12" max-width="350" class="mx-auto"> 
      <v-system-bar lights-out></v-system-bar>
      <v-carousel delimiter-icon="mdi-minus" height="300">
        <v-carousel-item
          v-for="(item, i) in product.images"
          :key="i"
          :src="item.url"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
        </v-carousel-item>
      </v-carousel>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ product.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ product.price }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
          <router-link :to="{name:'buy',params:{title:product.title}}"><v-icon
      large
      color="blue darken-2"
     
    >
      mdi-cart-plus
    </v-icon></router-link>
        </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-card>
</div>
</template>

<script>
export default {
  name: "item",
  props: {
    product: Object,
  },
  
};
</script>

<style scoped>
.item {
  flex:1;
  direction: rtl;
}
</style>