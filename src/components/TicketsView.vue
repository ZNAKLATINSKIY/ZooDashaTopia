<template>
  <div class="tickets-view">
    <div class="page-hero tickets-hero">
      <h1>Билеты</h1>
      <p>Выберите тип билета и добавьте в корзину</p>
    </div>
    <div class="container">
      <div class="tickets-grid">
        <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card" :class="{ featured: ticket.featured }">
          <div class="ticket-header">
            <span class="ticket-emoji">{{ ticket.emoji }}</span>
            <h3>{{ ticket.name }}</h3>
            <p class="ticket-desc">{{ ticket.desc }}</p>
          </div>
          <div class="ticket-price">
            <span class="price-big">{{ ticket.price.toLocaleString() }}</span>
            <span class="price-currency">₸</span>
          </div>
          <ul class="ticket-features">
            <li v-for="f in ticket.features" :key="f">✓ {{ f }}</li>
          </ul>
          <div class="ticket-qty">
            <button @click="ticket.qty = Math.max(1, ticket.qty - 1)">−</button>
            <span>{{ ticket.qty }}</span>
            <button @click="ticket.qty++">+</button>
          </div>
          <button class="btn-add-ticket" @click="addToCart(ticket)">
            Добавить в корзину
          </button>
        </div>
      </div>
      <div class="ticket-info-banner">
        <h3>📋 Правила посещения</h3>
        <div class="ticket-rules">
          <p>🕘 Часы работы: 09:00–20:00 ежедневно</p>
          <p>🎫 Билет действителен в день покупки</p>
          <p>👶 Дети до 3 лет — бесплатно</p>
          <p>🦽 Льготные билеты для инвалидов — 50%</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TicketsView',
  props: ['currentUser'],
  emits: ['add-to-cart', 'need-auth'],
  data() {
    return {
      tickets: [
        { id: 't1', emoji: '👤', name: 'Взрослый', desc: 'Для посетителей от 18 лет', price: 2000, qty: 1, features: ['Весь зоопарк', 'Аудиогид', 'Карта зоопарка'] },
        { id: 't2', emoji: '👦', name: 'Детский', desc: 'Для детей 3–17 лет', price: 1000, qty: 1, features: ['Весь зоопарк', 'Детский аудиогид', 'Раскраска'] },
        { id: 't3', emoji: '👨‍👩‍👧‍👦', name: 'Семейный', desc: '2 взрослых + 2 ребёнка', price: 5500, qty: 1, featured: true, features: ['Весь зоопарк', 'Аудиогид ×4', 'Скидка 15%', 'Фото на память'] },
        { id: 't4', emoji: '👴', name: 'Льготный', desc: 'Для пенсионеров', price: 800, qty: 1, features: ['Весь зоопарк', 'Аудиогид', 'Карта зоопарка'] },
        { id: 't5', emoji: '⭐', name: 'VIP', desc: 'Максимальный опыт', price: 8000, qty: 1, features: ['Весь зоопарк', 'Личный гид', 'Кормление животных', 'Сувенир', 'Фотосессия'] },
      ]
    };
  },
  methods: {
    addToCart(ticket) {
      if (!this.currentUser) { this.$emit('need-auth'); return; }
      for (let i = 0; i < ticket.qty; i++) {
        this.$emit('add-to-cart', { type: 'ticket', itemId: ticket.id, title: ticket.name + ' билет', price: ticket.price, quantity: ticket.qty, image: null });
      }
    }
  }
};
</script>
