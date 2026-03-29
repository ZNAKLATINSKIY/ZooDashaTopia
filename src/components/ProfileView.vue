<template>
  <div class="profile-view">
    <div class="profile-layout">
      <!-- Sidebar -->
      <aside class="profile-sidebar">
        <div class="profile-avatar-wrap">
          <div class="profile-avatar">
            <img :src="currentUser.photoURL || ''" @error="handleAvatar" class="avatar-img" />
          </div>
          <h3>{{ currentUser.displayName || 'Пользователь' }}</h3>
          <p class="profile-email">{{ currentUser.email }}</p>
          <span class="profile-role-badge">{{ userRole }}</span>
        </div>
        <nav class="profile-nav">
          <button v-for="tab in tabs" :key="tab.id"
            :class="['profile-nav-item', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id">
            <span class="nav-tab-icon">{{ tab.icon }}</span>
            <span>{{ tab.label }}</span>
            <span v-if="tab.count > 0" class="nav-badge">{{ tab.count }}</span>
          </button>
        </nav>
        <div class="profile-sidebar-actions">
          <button class="btn-logout" @click="$emit('logout')">
            <span>🚪</span> Выйти
          </button>
        </div>
      </aside>

      <!-- Main content -->
      <div class="profile-main">
        <!-- OVERVIEW -->
        <div v-if="activeTab === 'overview'" class="profile-tab">
          <h2>Личный кабинет</h2>
          <div class="overview-stats">
            <div class="ov-stat">
              <span class="ov-icon">🛒</span>
              <span class="ov-num">{{ cartItems.length }}</span>
              <span class="ov-label">В корзине</span>
            </div>
            <div class="ov-stat">
              <span class="ov-icon">📦</span>
              <span class="ov-num">{{ orders.length }}</span>
              <span class="ov-label">Заказов</span>
            </div>
            <div class="ov-stat">
              <span class="ov-icon">⭐</span>
              <span class="ov-num">{{ reviews.length }}</span>
              <span class="ov-label">Отзывов</span>
            </div>
          </div>

          <div v-if="orders.length > 0" class="recent-orders">
            <h3>Последние заказы</h3>
            <div v-for="order in orders.slice(0, 3)" :key="order.id" class="order-item-mini">
              <div class="order-info">
                <span class="order-date">{{ formatDate(order.createdAt) }}</span>
                <span class="order-items-count">{{ order.items?.length || 0 }} позиций</span>
              </div>
              <div class="order-right">
                <span class="order-total">{{ order.total?.toLocaleString() }} ₸</span>
                <span class="order-status" :class="'os-' + order.status">{{ statusLabel(order.status) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CART TAB -->
        <div v-if="activeTab === 'cart'" class="profile-tab">
          <h2>Корзина</h2>
          <div v-if="cartItems.length === 0" class="empty-state">
            <span class="empty-icon">🛒</span>
            <p>Корзина пуста</p>
            <button class="btn-primary" @click="$emit('navigate', 'tickets')">Купить билеты</button>
          </div>
          <div v-else>
            <div class="cart-list">
              <div v-for="item in cartItems" :key="item.id" class="cart-item-card">
                <div class="cart-item-img" v-if="item.image">
                  <img :src="item.image" :alt="item.title" @error="handleImgError" />
                </div>
                <div class="cart-item-emoji" v-else>🎫</div>
                <div class="cart-item-info">
                  <h4>{{ item.title }}</h4>
                  <p v-if="item.date" class="cart-item-date">📅 {{ formatDate(item.date) }}</p>
                  <p class="cart-item-type">{{ item.type }}</p>
                </div>
                <div class="cart-item-price-wrap">
                  <div class="qty-control">
                    <button @click="decreaseQty(item)">−</button>
                    <span>{{ item.quantity || 1 }}</span>
                    <button @click="increaseQty(item)">+</button>
                  </div>
                  <span class="cart-item-price">{{ ((item.price || 0) * (item.quantity || 1)).toLocaleString() }} ₸</span>
                </div>
                <button class="cart-item-remove" @click="$emit('remove-from-cart', item.id)">✕</button>
              </div>
            </div>
            <div class="cart-summary">
              <div class="cart-total">
                <span>Итого:</span>
                <strong>{{ cartTotal.toLocaleString() }} ₸</strong>
              </div>
              <button class="btn-checkout" @click="$emit('checkout')">Оформить заказ</button>
            </div>
          </div>
        </div>

        <!-- ORDERS TAB -->
        <div v-if="activeTab === 'orders'" class="profile-tab">
          <h2>История заказов</h2>
          <div v-if="orders.length === 0" class="empty-state">
            <span class="empty-icon">📦</span>
            <p>Заказов пока нет</p>
          </div>
          <div v-else>
            <div v-for="order in orders" :key="order.id" class="order-card">
              <div class="order-card-header">
                <div>
                  <span class="order-id">Заказ #{{ order.id.slice(-6).toUpperCase() }}</span>
                  <span class="order-date">{{ formatDate(order.createdAt) }}</span>
                </div>
                <div class="order-right">
                  <strong class="order-total">{{ order.total?.toLocaleString() }} ₸</strong>
                  <span class="order-status" :class="'os-' + order.status">{{ statusLabel(order.status) }}</span>
                </div>
              </div>
              <div class="order-items">
                <div v-for="(item, i) in order.items" :key="i" class="order-item-row">
                  <span>{{ item.title }}</span>
                  <span>×{{ item.quantity || 1 }}</span>
                  <span>{{ ((item.price || 0) * (item.quantity || 1)).toLocaleString() }} ₸</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- REVIEWS TAB -->
        <div v-if="activeTab === 'reviews'" class="profile-tab">
          <h2>Мои отзывы</h2>
          <div v-if="reviews.length === 0" class="empty-state">
            <span class="empty-icon">⭐</span>
            <p>Вы ещё не оставляли отзывов</p>
            <button class="btn-primary" @click="$emit('navigate', 'animals')">Посмотреть животных</button>
          </div>
          <div class="reviews-list" v-else>
            <div v-for="review in reviews" :key="review.id" class="review-card">
              <div class="review-card-header">
                <div class="review-animal">
                  <span class="review-animal-name">Животное ID: {{ review.animalId }}</span>
                  <div class="review-stars">{{ '⭐'.repeat(review.rating) }}</div>
                </div>
                <div class="review-card-actions">
                  <span class="review-card-date">{{ formatDate(review.createdAt) }}</span>
                  <button class="btn-delete-review" @click="$emit('delete-review', review.id)">🗑️</button>
                </div>
              </div>
              <p class="review-text">{{ review.text }}</p>
            </div>
          </div>
        </div>

        <!-- PROFILE SETTINGS TAB -->
        <div v-if="activeTab === 'settings'" class="profile-tab">
          <h2>Настройки профиля</h2>
          <form @submit.prevent="saveProfile" class="settings-form">
            <div class="form-group">
              <label>Имя</label>
              <input v-model="editForm.name" type="text" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input :value="currentUser.email" type="email" disabled class="disabled-input" />
            </div>
            <button type="submit" class="btn-primary">Сохранить изменения</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateProfile } from 'firebase/auth';

export default {
  name: 'ProfileView',
  props: ['currentUser', 'orders', 'reviews', 'cartItems'],
  emits: ['logout', 'remove-from-cart', 'checkout', 'delete-review', 'navigate'],
  data() {
    return {
      activeTab: 'overview',
      userRole: 'user',
      editForm: { name: this.currentUser?.displayName || '' }
    };
  },
  computed: {
    tabs() {
      return [
        { id: 'overview', icon: '🏠', label: 'Обзор', count: 0 },
        { id: 'cart', icon: '🛒', label: 'Корзина', count: this.cartItems.length },
        { id: 'orders', icon: '📦', label: 'Заказы', count: 0 },
        { id: 'reviews', icon: '⭐', label: 'Отзывы', count: 0 },
        { id: 'settings', icon: '⚙️', label: 'Настройки', count: 0 },
      ];
    },
    cartTotal() {
      return this.cartItems.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);
    }
  },
  methods: {
    formatDate(ts) {
      if (!ts) return '';
      const date = ts.toDate ? ts.toDate() : new Date(ts);
      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    },
    handleAvatar(e) {
      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="%23e8d5a3"/><text x="40" y="50" text-anchor="middle" font-size="40">👤</text></svg>';
    },
    handleImgError(e) {
      e.target.style.display = 'none';
    },
    statusLabel(s) {
      return { confirmed: '✅ Подтверждён', pending: '⏳ В обработке', cancelled: '❌ Отменён' }[s] || s;
    },
    async decreaseQty(item) {
      if ((item.quantity || 1) <= 1) {
        this.$emit('remove-from-cart', item.id);
        return;
      }
      // Update qty - handled via Firestore in parent if needed
    },
    async increaseQty(item) {
      // Update qty
    },
    async saveProfile() {
      try {
        await updateProfile(this.currentUser, { displayName: this.editForm.name });
        alert('Профиль обновлён!');
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>
