<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Autenticación</h1>
    </v-card-title>
    <v-card-text>
      <v-text-field
        label="Usuario"
        prepend-icon="mdi-account-circle"
        v-model="username"
      />
      <v-text-field
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        label="Contraseña"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info" @click="login()">Ingresar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      username: "",
      password: "",
    };
  },
  methods: {
    login: () => {
      // Tomar email y contraseña para verificar si es válido
      sessionStorage.setItem("username", this.username);
      if (this.username == "cdiaz@example.com") {
        sessionStorage.setItem("role", "admin");
      } else {
        sessionStorage.setItem("role", "user");
      }
      this.$emit("login-success", this.username);
      window.location.reload();
    },
  },
};
</script>

<style>
</style>