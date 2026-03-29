<template>
  <div id="app" :class="{ 'modal-open': activeModal }">
    <nav class="navbar" :class="{ scrolled: scrolled }">
      <div class="nav-container">
        <div class="nav-logo" @click="navigate('home')">
          <span class="logo-text">ZOOTOPIA</span>
        </div>
        <div class="nav-links" :class="{ open: mobileMenuOpen }">
          <a @click="navigate('home')" :class="{ active: currentView === 'home' }">Главная</a>
          <a @click="navigate('animals')" :class="{ active: currentView === 'animals' }">Животные</a>
          <a @click="navigate('events')" :class="{ active: currentView === 'events' }">Мероприятия</a>
          <a @click="navigate('tickets')" :class="{ active: currentView === 'tickets' }">Билеты</a>
          <a @click="navigate('about')" :class="{ active: currentView === 'about' }">О нас</a>
        </div>
        <div class="nav-actions">
          <button class="btn-cart" @click="navigate('cart')" title="Корзина">
            <span class="cart-icon">🛒</span>
            <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
          </button>
          <button v-if="isAdmin" class="btn-admin" @click="navigate('admin')" style="background: #e74c3c; color: white; border: none; padding: 8px 15px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
            ⚙️ Админка
          </button>
          <template v-if="currentUser">
            <button class="btn-profile" @click="navigate('profile')">
              <img :src="currentUser.photoURL || ''" @error="handleAvatarError" class="nav-avatar" />
              <span class="nav-username">{{ userName }}</span>
            </button>
          </template>
          <template v-else>
            <button class="btn-login" @click="openModal('auth')">Войти</button>
          </template>
          <button class="btn-burger" @click="mobileMenuOpen = !mobileMenuOpen">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <HomeView v-if="currentView === 'home'"
        :animals="animals" :events="events" :loading="loading"
        @open-animal="openAnimalModal" @open-event="openEventModal"
        @navigate="navigate" @buy-ticket="openModal('auth')"
      />
      <AnimalsView v-if="currentView === 'animals'"
        :animals="animals" :loading="loading" @open-animal="openAnimalModal"
      />
      <EventsView v-if="currentView === 'events'"
        :events="events" :loading="loading"
        @open-event="openEventModal" @add-to-cart="addToCart"
        :current-user="currentUser" @need-auth="openModal('auth')"
      />
      <TicketsView v-if="currentView === 'tickets'"
        @add-to-cart="addToCart" :current-user="currentUser" @need-auth="openModal('auth')"
      />
      <CartView v-if="currentView === 'cart'"
        :cart-items="cartItems" :current-user="currentUser"
        @remove-from-cart="removeFromCart" @checkout="checkout" @need-auth="openModal('auth')"
      />
      <ProfileView v-if="currentView === 'profile' && currentUser"
        :current-user="currentUser" :orders="orders" :reviews="reviews" :cart-items="cartItems"
        @logout="logout" @remove-from-cart="removeFromCart"
        @delete-review="deleteReview" @navigate="navigate"
      />
      <AboutView v-if="currentView === 'about'" />
      <AdminView v-if="currentView === 'admin' && isAdmin"
        :animals="animals" :events="events" :users="allUsers"
        @add-animal="addAnimal" @update-animal="updateAnimal" @delete-animal="deleteAnimal"
        @add-event="addEvent" @update-event="updateEvent" @delete-event="deleteEvent"
        @set-admin="setAdmin"
      />
    </main>

    <div v-if="activeModal === 'auth'" class="modal-overlay" @click.self="closeModal">
      <div class="modal modal-auth">
        <button class="modal-close" @click="closeModal">X</button>
        <div class="auth-tabs">
          <button :class="{ active: authTab === 'login' }" @click="authTab = 'login'">Войти</button>
          <button :class="{ active: authTab === 'register' }" @click="authTab = 'register'">Регистрация</button>
        </div>
        <form v-if="authTab === 'login'" @submit.prevent="login" class="auth-form">
          <h2>Добро пожаловать!</h2>
          <div class="form-group">
            <label>Email</label>
            <input v-model="authForm.email" type="email" placeholder="your@email.com" required />
          </div>
          <div class="form-group">
            <label>Пароль</label>
            <input v-model="authForm.password" type="password" placeholder="••••••••" required />
          </div>
          <p v-if="authError" class="auth-error">{{ authError }}</p>
          <button type="submit" class="btn-submit" :disabled="authLoading">
            {{ authLoading ? 'Входим...' : 'Войти' }}
          </button>
          <a class="forgot-link" @click="resetPassword">Забыли пароль?</a>
        </form>
        <form v-if="authTab === 'register'" @submit.prevent="register" class="auth-form">
          <h2>Создать аккаунт</h2>
          <div class="form-group">
            <label>Имя</label>
            <input v-model="authForm.name" type="text" placeholder="Ваше имя" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="authForm.email" type="email" placeholder="your@email.com" required />
          </div>
          <div class="form-group">
            <label>Пароль</label>
            <input v-model="authForm.password" type="password" placeholder="Минимум 6 символов" required minlength="6" />
          </div>
          <p v-if="authError" class="auth-error">{{ authError }}</p>
          <button type="submit" class="btn-submit" :disabled="authLoading">
            {{ authLoading ? 'Регистрируем...' : 'Зарегистрироваться' }}
          </button>
        </form>
      </div>
    </div>

    <div v-if="activeModal === 'animal' && selectedAnimal" class="modal-overlay" @click.self="closeModal">
      <div class="modal modal-animal">
        <button class="modal-close" @click="closeModal">X</button>
        <div class="animal-modal-content">
          <div class="animal-modal-img">
            <img :src="selectedAnimal.image || ''" :alt="selectedAnimal.name" @error="handleCardImgError" />
            <span class="animal-category-badge">{{ selectedAnimal.category }}</span>
          </div>
          <div class="animal-modal-info">
            <h2>{{ selectedAnimal.name }}</h2>
            <p class="animal-latin">{{ selectedAnimal.latinName }}</p>
            <div class="animal-stats">
              <div class="stat"><span class="stat-label">Вид</span><span>{{ selectedAnimal.species }}</span></div>
              <div class="stat"><span class="stat-label">Среда обитания</span><span>{{ selectedAnimal.habitat }}</span></div>
              <div class="stat"><span class="stat-label">Статус</span><span :class="'status-' + selectedAnimal.status">{{ selectedAnimal.statusText }}</span></div>
            </div>
            <p class="animal-desc">{{ selectedAnimal.description }}</p>
            <div class="animal-fun-facts" v-if="selectedAnimal.facts && selectedAnimal.facts.length">
              <h4>Интересные факты</h4>
              <ul>
                <li v-for="(fact, idx) in selectedAnimal.facts" :key="idx">{{ fact }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-reviews">
          <h3>Отзывы посетителей</h3>
          <div class="reviews-list" v-if="animalReviews.length">
            <div v-for="r in animalReviews" :key="r.id" class="review-item">
              <div class="review-header">
                <strong>{{ r.userName }}</strong>
                <div class="stars">{{ '*'.repeat(r.rating) }}</div>
                <span class="review-date">{{ formatDate(r.createdAt) }}</span>
              </div>
              <p>{{ r.text }}</p>
            </div>
          </div>
          <p v-else class="no-reviews">Ещё нет отзывов. Будьте первым!</p>
          <form v-if="currentUser" @submit.prevent="submitReview" class="review-form">
            <div class="rating-select">
              <span>Оценка:</span>
              <div class="stars-input">
                <button v-for="n in 5" :key="n" type="button"
                  :class="{ filled: reviewForm.rating >= n }"
                  @click="reviewForm.rating = n">*</button>
              </div>
            </div>
            <textarea v-model="reviewForm.text" placeholder="Напишите ваш отзыв..." rows="3" required></textarea>
            <button type="submit" class="btn-review-submit">Отправить отзыв</button>
          </form>
          <p v-else class="login-prompt">
            <a @click="openModal('auth')">Войдите</a>, чтобы оставить отзыв
          </p>
        </div>
      </div>
    </div>

    <div v-if="activeModal === 'event' && selectedEvent" class="modal-overlay" @click.self="closeModal">
      <div class="modal modal-event">
        <div class="event-modal-img">
          <img :src="selectedEvent.image || ''" :alt="selectedEvent.title" @error="handleCardImgError" />
        </div>
        <div class="event-modal-body">
          <div class="event-modal-main">
            <span class="event-type-badge">{{ selectedEvent.type }}</span>
            <h2>{{ selectedEvent.title }}</h2>
            <p class="event-desc">{{ selectedEvent.description }}</p>
            <div class="event-details-grid">
              <div class="event-detail-item">
                <span class="detail-icon"></span>
                <div><strong>Дата</strong><p>{{ formatDate(selectedEvent.date) }}</p></div>
              </div>
              <div class="event-detail-item">
                <span class="detail-icon"></span>
                <div><strong>Время</strong><p>{{ selectedEvent.time }}</p></div>
              </div>
              <div class="event-detail-item">
                <span class="detail-icon"></span>
                <div><strong>Место</strong><p>{{ selectedEvent.location }}</p></div>
              </div>
              <div class="event-detail-item">
                <span class="detail-icon"></span>
                <div><strong>Мест</strong><p>{{ selectedEvent.spotsLeft }} осталось</p></div>
              </div>
            </div>
          </div>
          <div class="event-modal-sidebar">
            <div class="event-price-card">
              <p class="price-label">Стоимость</p>
              <p class="price-value">{{ selectedEvent.price ? selectedEvent.price + ' ₸' : 'Бесплатно' }}</p>
              <button class="btn-book" @click="addEventToCart(selectedEvent)">
                {{ currentUser ? 'Забронировать' : 'Войти для записи' }}
              </button>
              <p class="spots-warning" v-if="selectedEvent.spotsLeft < 10">Внимание: Осталось мало мест!</p>
            </div>
            <div class="similar-events" v-if="similarEvents.length">
              <h4>Похожие мероприятия</h4>
              <div v-for="ev in similarEvents" :key="ev.id" class="similar-event-item" @click="openEventModal(ev)">
                <img :src="ev.image || ''" :alt="ev.title" @error="handleCardImgError" />
                <div>
                  <p>{{ ev.title }}</p>
                  <small>{{ formatDate(ev.date) }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="toast-container">
      <transition-group name="toast">
        <div v-for="toast in toasts" :key="toast.id" class="toast" :class="toast.type">
          {{ toast.message }}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { auth, db } from '../firebase';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import {
  collection, doc, getDocs, addDoc, updateDoc, deleteDoc,
  onSnapshot, query, orderBy, limit, where,
  getDoc, setDoc, serverTimestamp
} from 'firebase/firestore';

import HomeView from './components/HomeView.vue';
import AnimalsView from './components/AnimalsView.vue';
import EventsView from './components/EventsView.vue';
import TicketsView from './components/TicketsView.vue';
import CartView from './components/CartView.vue';
import ProfileView from './components/ProfileView.vue';
import AboutView from './components/AboutView.vue';
import AdminView from './components/AdminView.vue';

const FALLBACK_IMG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23f0ede6'/><text x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='20'>Img</text></svg>`;
const FALLBACK_AVATAR = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><circle cx='20' cy='20' r='20' fill='%23e8d5a3'/><text x='20' y='25' text-anchor='middle' font-size='12'>User</text></svg>`;

export default {
  name: 'App',
  components: { HomeView, AnimalsView, EventsView, TicketsView, CartView, ProfileView, AboutView, AdminView },

  data() {
    return {
      currentView: 'home',
      currentUser: null,
      isAdmin: false,
      scrolled: false,
      mobileMenuOpen: false,
      activeModal: null,
      authTab: 'login',
      authForm: { email: '', password: '', name: '' },
      authError: '',
      authLoading: false,
      animals: [],
      events: [],
      cartItems: [],
      orders: [],
      reviews: [],
      allUsers: [],
      loading: true,
      selectedAnimal: null,
      selectedEvent: null,
      animalReviews: [],
      reviewForm: { rating: 5, text: '' },
      toasts: [],
      unsubscribers: []
    };
  },

  computed: {
    userName() {
      return this.currentUser?.displayName || this.currentUser?.email?.split('@')[0] || 'Пользователь';
    },
    cartCount() {
      return this.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    },
    similarEvents() {
      if (!this.selectedEvent) return [];
      return this.events
        .filter(e => e.id !== this.selectedEvent.id && e.type === this.selectedEvent.type)
        .slice(0, 3);
    }
  },

  async mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.setupAuthListener();
    await this.loadAnimals();
    await this.loadEvents();
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.unsubscribers.forEach(unsub => unsub());
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },

    navigate(view) {
      if (view === 'profile' && !this.currentUser) { this.openModal('auth'); return; }
      if (view === 'admin' && !this.isAdmin) return;
      this.currentView = view;
      this.mobileMenuOpen = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    openModal(type) { this.activeModal = type; this.authError = ''; },
    closeModal() {
      this.activeModal = null;
      this.authForm = { email: '', password: '', name: '' };
      this.authError = '';
    },

    openAnimalModal(animal) {
      this.selectedAnimal = animal;
      this.activeModal = 'animal';
      this.loadAnimalReviews(animal.id);
    },
    openEventModal(event) {
      this.selectedEvent = event;
      this.activeModal = 'event';
    },

    setupAuthListener() {
      const unsub = onAuthStateChanged(auth, async (user) => {
        this.currentUser = user;
        if (user) {
          await this.loadUserData(user.uid);
        } else {
          this.cartItems = [];
          this.orders = [];
          this.reviews = [];
          this.isAdmin = false;
        }
      });
      this.unsubscribers.push(unsub);
    },

    async loadUserData(uid) {
      try {
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
          this.isAdmin = userDoc.data().role === 'admin';
        }
        this.loadCart(uid);
        this.loadOrders(uid);
        this.loadUserReviews(uid);
      } catch (e) {
        console.error('loadUserData:', e);
      }
    },

    async login() {
      this.authLoading = true;
      this.authError = '';
      try {
        await signInWithEmailAndPassword(auth, this.authForm.email, this.authForm.password);
        this.closeModal();
        this.showToast('Добро пожаловать!', 'success');
      } catch (e) {
        this.authError = this.getAuthError(e.code);
      } finally {
        this.authLoading = false;
      }
    },

    async register() {
      this.authLoading = true;
      this.authError = '';
      try {
        const { user } = await createUserWithEmailAndPassword(auth, this.authForm.email, this.authForm.password);
        await updateProfile(user, { displayName: this.authForm.name });
        await setDoc(doc(db, 'users', user.uid), {
          name: this.authForm.name,
          email: this.authForm.email,
          role: 'user',
          createdAt: serverTimestamp()
        });
        this.closeModal();
        this.showToast('Аккаунт создан!', 'success');
      } catch (e) {
        this.authError = this.getAuthError(e.code);
      } finally {
        this.authLoading = false;
      }
    },

    async logout() {
      await signOut(auth);
      this.currentView = 'home';
      this.showToast('До свидания!', 'info');
    },

    async resetPassword() {
      if (!this.authForm.email) { this.authError = 'Введите email для сброса пароля'; return; }
      try {
        await sendPasswordResetEmail(auth, this.authForm.email);
        this.showToast('Письмо для сброса пароля отправлено!', 'success');
      } catch (e) {
        this.authError = this.getAuthError(e.code);
      }
    },

    getAuthError(code) {
      const errors = {
        'auth/email-already-in-use': 'Email уже используется',
        'auth/invalid-email': 'Некорректный email',
        'auth/weak-password': 'Слабый пароль (минимум 6 символов)',
        'auth/user-not-found': 'Пользователь не найден',
        'auth/wrong-password': 'Неверный пароль',
        'auth/too-many-requests': 'Слишком много попыток. Попробуйте позже',
        'auth/invalid-credential': 'Неверный email или пароль'
      };
      return errors[code] || 'Произошла ошибка. Попробуйте снова.';
    },

    async loadAnimals() {
      this.loading = true;
      try {
        const q = query(collection(db, 'animals'), orderBy('name'), limit(50));
        const snap = await getDocs(q);
        if (snap.empty) {
          await this.seedAnimals();
          const snap2 = await getDocs(q);
          this.animals = snap2.docs.map(d => ({ id: d.id, ...d.data() }));
        } else {
          this.animals = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        }
        const unsub = onSnapshot(query(collection(db, 'animals'), orderBy('name')), snap => {
          this.animals = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        });
        this.unsubscribers.push(unsub);
      } catch (e) {
        console.error('loadAnimals:', e);
      } finally {
        this.loading = false;
      }
    },

    async loadEvents() {
      try {
        const q = query(collection(db, 'events'), orderBy('date'), limit(50));
        const snap = await getDocs(q);
        if (snap.empty) {
          await this.seedEvents();
          const snap2 = await getDocs(q);
          this.events = snap2.docs.map(d => ({ id: d.id, ...d.data() }));
        } else {
          this.events = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        }
        const unsub = onSnapshot(query(collection(db, 'events'), orderBy('date')), snap => {
          this.events = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        });
        this.unsubscribers.push(unsub);
      } catch (e) {
        console.error('loadEvents:', e);
      }
    },

    loadCart(uid) {
      const unsub = onSnapshot(collection(db, 'users', uid, 'cart'), snap => {
        this.cartItems = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      });
      this.unsubscribers.push(unsub);
    },

    loadOrders(uid) {
      const unsub = onSnapshot(
        query(collection(db, 'users', uid, 'orders'), orderBy('createdAt', 'desc')),
        snap => { this.orders = snap.docs.map(d => ({ id: d.id, ...d.data() })); }
      );
      this.unsubscribers.push(unsub);
    },

    loadUserReviews(uid) {
      const unsub = onSnapshot(
        query(collection(db, 'reviews'), where('userId', '==', uid), orderBy('createdAt', 'desc')),
        snap => { this.reviews = snap.docs.map(d => ({ id: d.id, ...d.data() })); }
      );
      this.unsubscribers.push(unsub);
    },

    loadAnimalReviews(animalId) {
      const unsub = onSnapshot(
        query(collection(db, 'reviews'), where('animalId', '==', animalId), orderBy('createdAt', 'desc')),
        (snap) => { 
          this.animalReviews = snap.docs.map(d => ({ id: d.id, ...d.data() })); 
        },
        (error) => {
          console.error('Ошибка загрузки отзывов (вероятно, нужен индекс):', error);
        }
      );
      this.unsubscribers.push(unsub);
    },


    async addToCart(item) {
      if (!this.currentUser) { this.openModal('auth'); return; }
      try {
        await addDoc(collection(db, 'users', this.currentUser.uid, 'cart'), {
          ...item,
          quantity: 1,
          addedAt: serverTimestamp()
        });
        this.showToast('Добавлено в корзину!', 'success');
      } catch (e) {
        this.showToast('Ошибка добавления в корзину', 'error');
      }
    },

    addEventToCart(event) {
      if (!this.currentUser) { this.closeModal(); this.openModal('auth'); return; }
      this.addToCart({
        type: 'event',
        itemId: event.id,
        title: event.title,
        price: event.price || 0,
        date: event.date,
        image: event.image || ''
      });
      this.closeModal();
    },

    async removeFromCart(itemId) {
      if (!this.currentUser) return;
      try {
        await deleteDoc(doc(db, 'users', this.currentUser.uid, 'cart', itemId));
        this.showToast('Удалено из корзины', 'info');
      } catch (e) {
        this.showToast('Ошибка удаления', 'error');
      }
    },

    async checkout() {
      if (!this.currentUser || !this.cartItems.length) return;
      try {
        const total = this.cartItems.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);
        await addDoc(collection(db, 'users', this.currentUser.uid, 'orders'), {
          items: this.cartItems,
          total,
          status: 'confirmed',
          createdAt: serverTimestamp()
        });
        for (const item of this.cartItems) {
          await deleteDoc(doc(db, 'users', this.currentUser.uid, 'cart', item.id));
        }
        this.showToast('Заказ оформлен!', 'success');
        this.navigate('profile');
      } catch (e) {
        this.showToast('Ошибка оформления заказа', 'error');
      }
    },

    async submitReview() {
      if (!this.currentUser || !this.selectedAnimal || !this.reviewForm.text.trim()) return;
      try {
        await addDoc(collection(db, 'reviews'), {
          animalId: this.selectedAnimal.id,
          userId: this.currentUser.uid,
          userName: this.currentUser.displayName || 'Посетитель',
          text: this.reviewForm.text,
          rating: this.reviewForm.rating,
          createdAt: serverTimestamp()
        });
        this.reviewForm = { rating: 5, text: '' };
        this.showToast('Отзыв отправлен!', 'success');
      } catch (e) {
        console.error('Ошибка сохранения отзыва в БД:', e);
        this.showToast('Ошибка отправки отзыва', 'error');
      }
    },

    async deleteReview(reviewId) {
      try {
        await deleteDoc(doc(db, 'reviews', reviewId));
        this.showToast('Отзыв удалён', 'info');
      } catch (e) {
        this.showToast('Ошибка удаления отзыва', 'error');
      }
    },

    async addAnimal(data) {
      await addDoc(collection(db, 'animals'), { ...data, createdAt: serverTimestamp() });
      this.showToast('Животное добавлено!', 'success');
    },
    async updateAnimal(id, data) {
      await updateDoc(doc(db, 'animals', id), data);
      this.showToast('Обновлено!', 'success');
    },
    async deleteAnimal(id) {
      await deleteDoc(doc(db, 'animals', id));
      this.showToast('Удалено', 'info');
    },
    async addEvent(data) {
      await addDoc(collection(db, 'events'), { ...data, createdAt: serverTimestamp() });
      this.showToast('Мероприятие добавлено!', 'success');
    },
    async updateEvent(id, data) {
      await updateDoc(doc(db, 'events', id), data);
      this.showToast('Обновлено!', 'success');
    },
    async deleteEvent(id) {
      await deleteDoc(doc(db, 'events', id));
      this.showToast('Удалено', 'info');
    },
    async setAdmin(uid, isAdmin) {
      await updateDoc(doc(db, 'users', uid), { role: isAdmin ? 'admin' : 'user' });
      this.showToast('Роль обновлена', 'success');
    },

    handleCardImgError(e) {
      e.target.onerror = null;
      e.target.src = FALLBACK_IMG;
    },

    handleAvatarError(e) {
      e.target.onerror = null;
      e.target.src = FALLBACK_AVATAR;
    },

    formatDate(ts) {
      if (!ts) return '';
      const date = ts.toDate ? ts.toDate() : new Date(ts);
      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    },

    showToast(message, type = 'info') {
      const id = Date.now();
      this.toasts.push({ id, message, type });
      setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 3000);
    },

     async seedAnimals() {
      const animals = [
        { name: 'Африканский лев', latinName: 'Panthera leo', category: 'Хищники', species: 'Млекопитающее', habitat: 'Африканская саванна', status: 'vulnerable', statusText: 'Уязвимый', description: 'Величественный хищник, известный как "царь зверей". Живёт в прайдах до 30 особей.', image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg', facts: ['Может развивать скорость до 80 км/ч', 'Спит до 20 часов в сутки', 'Рёв слышен на 8 км'] },
        { name: 'Жираф', latinName: 'Giraffa camelopardalis', category: 'Травоядные', species: 'Млекопитающее', habitat: 'Африканская саванна', status: 'vulnerable', statusText: 'Уязвимый', description: 'Самое высокое животное на Земле. Шея жирафа может достигать 2 метров.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Giraffa_camelopardalis_reticulata.jpg/800px-Giraffa_camelopardalis_reticulata.jpg', facts: ['Рост до 5.8 метров', 'Сон длится всего 30 минут в сутки', 'Язык длиной 45-50 см'] },
        { name: 'Снежный барс', latinName: 'Panthera uncia', category: 'Хищники', species: 'Млекопитающее', habitat: 'Горы Центральной Азии', status: 'vulnerable', statusText: 'Уязвимый', description: 'Редкая крупная кошка из горных районов Центральной Азии. Символ Алматы.', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Irbis4.JPG', facts: ['Прыгает на расстояние до 15 метров', 'Живёт на высоте до 5500 м', 'Никогда не рычит, только мяукает'] },
        { name: 'Пятнистая гиена', latinName: 'Crocuta crocuta', category: 'Хищники', species: 'Млекопитающее', habitat: 'Африканские саванны', status: 'least_concern', statusText: 'Наименьшая угроза', description: 'Несмотря на репутацию падальщика, гиена — один из самых эффективных охотников Африки.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Spotted_hyena_%28Crocuta_crocuta%29_adult.jpg/800px-Spotted_hyena_%28Crocuta_crocuta%29_adult.jpg', facts: ['Смех — сигнал возбуждения', 'Матриархальное общество', 'Переваривают даже кости'] },
        { name: 'Фламинго', latinName: 'Phoenicopterus roseus', category: 'Птицы', species: 'Птица', habitat: 'Тропические озёра', status: 'least_concern', statusText: 'Наименьшая угроза', description: 'Яркие розовые птицы, живущие большими колониями. Цвет оперения зависит от питания.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Greater_Flamingo_at_Walvis_Bay.jpg/800px-Greater_Flamingo_at_Walvis_Bay.jpg', facts: ['Рождаются белыми', 'Стоят на одной ноге для терморегуляции', 'Живут до 40 лет'] },
        { name: 'Горная горилла', latinName: 'Gorilla beringei beringei', category: 'Приматы', species: 'Млекопитающее', habitat: 'Горные леса Африки', status: 'endangered', statusText: 'Под угрозой исчезновения', description: 'Самый крупный примат на Земле. Находится под угрозой исчезновения.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Silverback_Mountain_Gorilla.JPG/800px-Silverback_Mountain_Gorilla.JPG', facts: ['ДНК совпадает с человеческим на 98.3%', 'Строят новое гнездо каждую ночь', 'Могут выучить язык жестов'] },
        { name: 'Амурский тигр', latinName: 'Panthera tigris altaica', category: 'Хищники', species: 'Млекопитающее', habitat: 'Дальний Восток России', status: 'endangered', statusText: 'Под угрозой исчезновения', description: 'Крупнейший представитель семейства кошачьих. В дикой природе осталось менее 500 особей.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Amurtiger_Zoo_Muenster.jpg/800px-Amurtiger_Zoo_Muenster.jpg', facts: ['Может прыгать на 10 метров', 'Рождаются слепыми', 'У каждого уникальный рисунок полос'] },
        { name: 'Белый медведь', latinName: 'Ursus maritimus', category: 'Хищники', species: 'Млекопитающее', habitat: 'Арктика', status: 'vulnerable', statusText: 'Уязвимый', description: 'Крупнейший наземный хищник планеты. Отличный пловец.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg', facts: ['Шерсть прозрачная, не белая', 'Плавает со скоростью 10 км/ч', 'Нюх улавливает запах за 30 км'] },
        { name: 'Слон африканский', latinName: 'Loxodonta africana', category: 'Травоядные', species: 'Млекопитающее', habitat: 'Африканская саванна', status: 'vulnerable', statusText: 'Уязвимый', description: 'Крупнейшее наземное животное Земли. Обладает высоким интеллектом и сложной социальной структурой.', image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg', facts: ['Масса до 7 тонн', 'Беременность длится почти 2 года', 'Узнаёт себя в зеркале'] },
        { name: 'Дельфин-афалина', latinName: 'Tursiops truncatus', category: 'Морские', species: 'Млекопитающее', habitat: 'Тёплые моря и океаны', status: 'least_concern', statusText: 'Наименьшая угроза', description: 'Один из самых умных животных. Живут в сложных социальных группах.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Tursiops_truncatus_01.jpg', facts: ['Спят с открытым одним глазом', 'Скорость до 55 км/ч', 'У каждого есть имя — уникальный свист'] },
        { name: 'Зебра', latinName: 'Equus quagga', category: 'Травоядные', species: 'Млекопитающее', habitat: 'Африканская саванна', status: 'near_threatened', statusText: 'Близкий к уязвимому', description: 'Полосатые лошади африканских равнин. Каждая особь имеет уникальный рисунок полос.', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Plains_Zebra_Equus_quagga.jpg', facts: ['Полосы уникальны как отпечатки пальцев', 'Спят стоя', 'Детёныш встаёт через 15 минут после рождения'] },
        { name: 'Павлин', latinName: 'Pavo cristatus', category: 'Птицы', species: 'Птица', habitat: 'Южная Азия', status: 'least_concern', statusText: 'Наименьшая угроза', description: 'Одна из красивейших птиц мира. Самцы распускают роскошный хвост в брачный период.', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Peacock_Plumage.jpg', facts: ['Хвост составляет 60% длины тела', 'Национальная птица Индии', 'Кричат перед дождём'] },
      ];
      for (const a of animals) {
        await addDoc(collection(db, 'animals'), { ...a, createdAt: serverTimestamp() });
      }
    },

    async seedEvents() {
      const now = new Date();
      const events = [
        { title: 'Ночной тур по зоопарку', type: 'Экскурсия', description: 'Уникальная возможность увидеть ночных животных в их активное время. Гид проведёт вас по специальному маршруту.', date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7), time: '20:00', location: 'Главный вход', price: 5000, spotsLeft: 20, image: 'https://images.pexels.com/photos/133356/pexels-photo-133356.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { title: 'Кормление жирафов', type: 'Интерактив', description: 'Покормите жирафов из рук! Специальные листья и морковь включены в стоимость.', date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2), time: '11:00', location: 'Вольер жирафов', price: 2500, spotsLeft: 15, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80' },
        { title: 'День рождения зоопарка', type: 'Праздник', description: 'Большой праздник с конкурсами, шоу животных, мастер-классами. Вход бесплатный!', date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14), time: '10:00', location: 'Центральная площадь', price: 0, spotsLeft: 500, image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80' },
        { title: 'Лекция: Снежный барс', type: 'Лекция', description: 'Учёные расскажут о программе сохранения снежного барса в Казахстане.', date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5), time: '14:00', location: 'Конференц-зал', price: 1500, spotsLeft: 50, image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80' },
        { title: 'Фотосессия с попугаями', type: 'Интерактив', description: 'Профессиональная фотосессия с экзотическими попугаями. Фотограф включён в стоимость.', date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3), time: '12:00', location: 'Тропический павильон', price: 3500, spotsLeft: 8, image: 'https://images.unsplash.com/photo-1591198936750-16d8e15b9938?w=800&q=80' },
        { title: 'Детский мастер-класс', type: 'Детское', description: 'Дети узнают о жизни животных и получат диплом "юного зоолога".', date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10), time: '10:00', location: 'Детский центр', price: 2000, spotsLeft: 25, image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80' },
      ];
      for (const e of events) {
        await addDoc(collection(db, 'events'), { ...e, createdAt: serverTimestamp() });
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
}

:root {
  --font-main: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}


</style>