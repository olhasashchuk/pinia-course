<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
const cartStore = useCartStore();

cartStore.$onAction(({name, args, after, onError}) => {
  if(name === 'addItems'){
    after(() => {
      console.log(args[0])
    });
    onError((error) => {
      console.error(error)
    });
  }
});
const productStore = useProductStore();
productStore.fill()

</script>

<template>
  <div class="container">
    <TheHeader />
    <AppButton class="mb-5" @click="cartStore.undo">Undo
    </AppButton>
    <AppButton class="mb-5" @click="cartStore.redo">Redo
    </AppButton>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
