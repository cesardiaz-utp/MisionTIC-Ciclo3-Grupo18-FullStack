<template>
  <div class="new-product">
    <h1>{{ isNew ? "New" : "Edit" }} Product</h1>
    <v-text-field label="Code" v-model="code"></v-text-field>
    <v-text-field label="Name" v-model="name"></v-text-field>
    <v-text-field label="Price" v-model="price"></v-text-field>
    <v-combobox
      v-model="categories"
      chips
      clearable
      label="Categories"
      multiple
      solo
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click="select"
          @click:close="removeChip(item)"
        >
          {{ item }}
        </v-chip>
      </template>
    </v-combobox>

    <div id="botones">
      <v-btn color="primary" @click="guardarProducto()" v-if="isNew"
        >Guardar</v-btn
      >
      <v-btn color="success" @click="actualizarProducto()" v-if="!isNew">Actualizar</v-btn>
    </div>

    <v-snackbar v-model="snackbar">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="closeConfirmation()">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import {
  createProduct,
  getProduct,
  updateProduct,
} from "../../controllers/Product.controller";

export default {
  data() {
    return {
      code: 0,
      name: "",
      price: 0,
      categories: [],
      snackbar: false,
      snackbarText: "",
      isNew: true,
    };
  },
  created() {
    const code = this.$route.params.code;
    if (code != undefined) {
      getProduct(code)
        .then((response) => {
          const product = response.data;
          this.code = product.code;
          this.name = product.name;
          this.price = product.price;
          this.categories = product.categories;

          this.isNew = false;
        })
        .catch((err) => console.error(err));
    }
  },
  methods: {
    guardarProducto() {
      const product = {
        code: this.code,
        name: this.name,
        price: this.price,
        categories: this.categories,
      };
      createProduct(product)
        .then(() => {
          this.openSuccessDialog("Guardado correctamente");
        })
        .catch((err) => console.error(err));
    },
    actualizarProducto() {
      if (
        this.code == undefined ||
        this.code == "" ||
        this.name == undefined ||
        this.name == "" ||
        this.price == undefined ||
        this.price == ""
      ) {
        this.openErrorDialog("Ingrese los campos obligatorios");
        return;
      }

      const product = {
        code: this.code,
        name: this.name,
        price: this.price,
        categories: this.categories,
      };
      updateProduct(this.code, product)
        .then(() =>
          this.openSuccessDialog("Se ha actualizado el producto: " + this.code)
        )
        .catch(() => this.openErrorDialog("Error al actualizar el producto"));
    },
    removeChip(item) {
      this.categories.splice(this.categories.indexOf(item), 1);
      this.categories = [...this.categories];
    },
    openSuccessDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbar = true;
    },
    openErrorDialog(mensaje) {
      this.snackbarText = mensaje;
      this.snackbar = true;
    },
    closeConfirmation() {
      this.snackbar = false;
      this.$router.push("/products");
    },
  },
};
</script>

<style scope>
#botones {
  display: flex;
  justify-content: right;
}
</style>