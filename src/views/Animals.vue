<script setup>
    import { ref, onMounted } from "vue";
    import { createAnimal, getMyAnimals } from "../services/animalService";

    const animals = ref([]);
    const name = ref("");
    const type = ref("carnivore");

    async function loadAnimals() {
    animals.value = await getMyAnimals();
    }

    async function addAnimal() {
    await createAnimal(name.value, type.value, "tundra01");
    await loadAnimals();
    }

    onMounted(loadAnimals);
</script>

<template>
  <div>
    <h2>Добавить животное</h2>

    <input v-model="name" placeholder="Название" />

    <select v-model="type">
      <option value="carnivore">Хищник</option>
      <option value="herbivore">Травоядное</option>
      <option value="bird">Птица</option>
      <option value="reptile">Рептилия</option>
    </select>

    <button @click="addAnimal">Добавить</button>

    <h2>Мои животные</h2>
    <ul>
      <li v-for="a in animals" :key="a.id">
        {{ a.name }} - {{ a.type }}
      </li>
    </ul>
  </div>
</template>