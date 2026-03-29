<template>
  <div class="events-view">
    <div class="page-hero events-hero">
      <h1>Мероприятия</h1>
      <p>Экскурсии, шоу, мастер-классы и специальные события</p>
    </div>
    <div class="container">
      <div class="events-filter-bar">
        <div class="filter-tags">
          <button v-for="type in eventTypes" :key="type"
            :class="['filter-tag', { active: selectedType === type }]"
            @click="selectedType = type">{{ type }}</button>
        </div>
      </div>
      <div v-if="loading" class="loading-grid">
        <div v-for="n in 6" :key="n" class="skeleton-card"></div>
      </div>
      <div v-else class="events-full-grid">
        <div v-for="event in filteredEvents" :key="event.id" class="event-full-card" @click="$emit('open-event', event)">
          <div class="efc-img">
            <img :src="event.image || 'https://via.placeholder.com/400x250'" :alt="event.title" @error="handleErr" />
            <span class="efc-type">{{ event.type }}</span>
            <div v-if="event.spotsLeft < 10" class="efc-warning">Мало мест!</div>
          </div>
          <div class="efc-body">
            <h3>{{ event.title }}</h3>
            <p>{{ event.description?.substring(0, 120) }}...</p>
            <div class="efc-meta">
              <span>Дата: {{ formatDate(event.date) }}</span>
              <span>Время: {{ event.time }}</span>
              <span>Мест: {{ event.spotsLeft }}</span>
            </div>
            <div class="efc-footer">
              <strong class="efc-price">{{ event.price ? event.price.toLocaleString() + ' ₸' : 'Бесплатно' }}</strong>
              <button class="btn-book-sm" @click.stop="$emit('add-to-cart', { type: 'event', itemId: event.id, title: event.title, price: event.price || 0, date: event.date || null, image: event.image || '' })">
                Записаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsView',
  props: ['events', 'loading', 'currentUser'],
  emits: ['open-event', 'add-to-cart', 'need-auth'],
  data() {
    return { selectedType: 'Все' };
  },
  computed: {
    eventTypes() {
      return ['Все', ...new Set(this.events.map(e => e.type))];
    },
    filteredEvents() {
      if (this.selectedType === 'Все') return this.events;
      return this.events.filter(e => e.type === this.selectedType);
    }
  },
  methods: {
    formatDate(ts) {
      if (!ts) return '';
      const d = ts.toDate ? ts.toDate() : new Date(ts);
      return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
    },
    handleErr(e) { 
      e.target.onerror = null; 
      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0ede6'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23333'%3EФото недоступно%3C/text%3E%3C/svg%3E";
    }
  }
};
</script>