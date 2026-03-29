<template>
  <div class="cart-view">
    <div class="page-hero">
      <h1>Корзина</h1>
    </div>
    <div class="container">
      <template v-if="!currentUser">
        <div class="empty-state">
          <span class="empty-icon">Доступ закрыт</span>
          <p>Войдите, чтобы увидеть корзину</p>
          <button class="btn-primary" @click="$emit('need-auth')">Войти</button>
        </div>
      </template>
      <template v-else-if="cartItems.length === 0">
        <div class="empty-state">
          <span class="empty-icon">Пусто</span>
          <p>Корзина пуста</p>
        </div>
      </template>
      <template v-else>
        <div class="cart-layout">
          <div class="cart-items-list">
            <div v-for="item in cartItems" :key="item.id" class="cart-item-card">
              <div class="cart-item-img" v-if="item.image">
                <img :src="item.image" :alt="item.title" @error="e=>e.target.style.display='none'" />
              </div>
              <div v-else class="cart-item-placeholder">Билет</div>
              <div class="cart-item-info">
                <h4>{{ item.title }}</h4>
                <p v-if="item.date" class="cart-item-date">Дата: {{ formatDate(item.date) }}</p>
              </div>
              <span class="cart-item-price">{{ ((item.price || 0) * (item.quantity || 1)).toLocaleString() }} ₸</span>
              <button class="cart-item-remove" @click="$emit('remove-from-cart', item.id)">X</button>
            </div>
          </div>
          <div class="cart-summary-box">
            <h3>Итого</h3>
            <div class="summary-row" v-for="item in cartItems" :key="item.id">
              <span>{{ item.title }}</span>
              <span>{{ ((item.price || 0) * (item.quantity || 1)).toLocaleString() }} ₸</span>
            </div>
            <div class="summary-total">
              <strong>Всего:</strong>
              <strong>{{ total.toLocaleString() }} ₸</strong>
            </div>
            <button class="btn-checkout" @click="$emit('checkout')">Оформить заказ</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartView',
  props: ['cartItems', 'currentUser'],
  emits: ['remove-from-cart', 'checkout', 'need-auth'],
  computed: {
    total() {
      return this.cartItems.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);
    }
  },
  methods: {
    formatDate(ts) {
      if (!ts) return '';
      const d = ts.toDate ? ts.toDate() : new Date(ts);
      return d.toLocaleDateString('ru-RU');
    }
  }
};
</script>