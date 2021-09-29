<template>
  <v-card>
    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-subtitle><b>Price:</b> {{ item.price }}</v-card-subtitle>
    <div class="categories">
      <v-chip v-for="category in item.categories" :key="category">{{
        category
      }}</v-chip>
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="editar()"> Editar </v-btn>
      <v-btn color="error" @click="eliminar()"> Eliminar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["item"],
  methods: {
      editar(){
          console.log(`Editar ${this.item.code}`);
      },
      eliminar(){
          console.log(`Eliminar ${this.item.code}`);
      }
  }
};
</script>

<style scope>
.categories {
  display: flex;
  padding: 10px;
  justify-content: center !important;
  gap: 10px;
}
</style>