<template>
  <div class="animals-view">
    <div class="page-hero">
      <h1>Наши животные</h1>
      <p>Познакомьтесь с 200+ обитателями зоопарка</p>
    </div>
    <div class="container">
      <div class="catalog-controls">
        <div class="search-wrap">
          <span class="search-icon">🔍</span>
          <input v-model="searchQuery" type="text" placeholder="Поиск..." class="search-input" />
        </div>
        <div class="filter-tags">
          <button v-for="cat in categories" :key="cat"
            :class="['filter-tag', { active: selectedCategory === cat }]"
            @click="selectedCategory = cat">{{ cat }}</button>
        </div>
        <select v-model="sortBy" class="sort-select">
          <option value="name">По имени</option>
          <option value="category">По категории</option>
          <option value="status">По статусу</option>
        </select>
      </div>
      <div v-if="loading" class="loading-grid">
        <div v-for="n in 12" :key="n" class="skeleton-card"></div>
      </div>
      <div v-else class="animals-grid">
        <div v-for="animal in paginatedAnimals" :key="animal.id" class="animal-card" @click="$emit('open-animal', animal)">
          <div class="animal-card-img">
            <img :src="animal.image" :alt="animal.name" loading="lazy" @error="handleErr" />
            <span class="animal-status-dot" :class="'dot-' + animal.status"></span>
            <div class="animal-card-overlay"><span>Подробнее</span></div>
          </div>
          <div class="animal-card-body">
            <span class="animal-category">{{ animal.category }}</span>
            <h3>{{ animal.name }}</h3>
            <p class="animal-latin-small">{{ animal.latinName }}</p>
            <span class="status-badge" :class="'status-' + animal.status">{{ animal.statusText }}</span>
          </div>
        </div>
      </div>
      <div class="pagination" v-if="totalPages > 1">
        <button :disabled="currentPage === 1" @click="currentPage--" class="page-btn">‹</button>
        <button v-for="p in totalPages" :key="p" :class="['page-btn', { active: p === currentPage }]" @click="currentPage = p">{{ p }}</button>
        <button :disabled="currentPage === totalPages" @click="currentPage++" class="page-btn">›</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AnimalsView',
  props: ['animals', 'loading'],
  emits: ['open-animal'],
  data() { return { searchQuery: '', selectedCategory: 'Все', sortBy: 'name', currentPage: 1, perPage: 12 }; },
  computed: {
    categories() { return ['Все', ...new Set(this.animals.map(a => a.category))]; },
    filteredAnimals() {
      let list = [...this.animals];
      if (this.selectedCategory !== 'Все') list = list.filter(a => a.category === this.selectedCategory);
      if (this.searchQuery) { const q = this.searchQuery.toLowerCase(); list = list.filter(a => a.name.toLowerCase().includes(q)); }
      list.sort((a, b) => a[this.sortBy]?.localeCompare(b[this.sortBy]) || 0);
      return list;
    },
    totalPages() { return Math.ceil(this.filteredAnimals.length / this.perPage); },
    paginatedAnimals() { const s = (this.currentPage - 1) * this.perPage; return this.filteredAnimals.slice(s, s + this.perPage); }
  },
  watch: { searchQuery() { this.currentPage = 1; }, selectedCategory() { this.currentPage = 1; } },
  methods: { handleErr(e) { e.target.src = 'https://via.placeholder.com/300x200?text=🦁'; } }
};
</script>
