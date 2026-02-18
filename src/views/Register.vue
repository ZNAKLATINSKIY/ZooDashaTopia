<script setup>
    import { ref } from "vue";
    import { registerUser } from "../services/authService";

    const email = ref("");
    const password = ref("");
    const name = ref("");

    async function register() {
    await registerUser(email.value, password.value, name.value);
    alert("Успешно зарегистрирован");
    }
</script>

<template>
  <div>
    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="register">Register</button>
  </div>
</template>