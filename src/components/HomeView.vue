<template>
  <div class="home-view">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
        <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1600&q=80" alt="Zoo" class="hero-img" />
      </div>
      <div class="hero-content">
        <div class="hero-badge">🌿 Зоопарк Алматы</div>
        <h1 class="hero-title">Откройте мир<br /><span class="hero-accent">дикой природы</span></h1>
        <p class="hero-subtitle">Более 200 видов животных со всего мира ждут вас каждый день</p>
        <div class="hero-actions">
          <button class="btn-primary" @click="$emit('navigate', 'tickets')">Купить билет</button>
          <button class="btn-secondary" @click="$emit('navigate', 'animals')">Смотреть животных</button>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><span class="stat-num">200+</span><span class="stat-label">Видов</span></div>
          <div class="hero-stat"><span class="stat-num">50K+</span><span class="stat-label">Посетителей</span></div>
          <div class="hero-stat"><span class="stat-num">1972</span><span class="stat-label">Основан</span></div>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="scroll-indicator"></div>
      </div>
    </section>

    <!-- ANIMALS CATALOG -->
    <section class="section catalog-section">
      <div class="container">
        <div class="section-header">
          <div>
            <h2 class="section-title">Наши животные</h2>
            <p class="section-sub">Познакомьтесь с обитателями нашего зоопарка</p>
          </div>
          <button class="btn-outline" @click="$emit('navigate', 'animals')">Все животные →</button>
        </div>

        <!-- Search & Filter -->
        <div class="catalog-controls">
          <div class="search-wrap">
            <span class="search-icon">🔍</span>
            <input v-model="searchQuery" type="text" placeholder="Поиск животных..." class="search-input" />
          </div>
          <div class="filter-tags">
            <button v-for="cat in categories" :key="cat"
              :class="['filter-tag', { active: selectedCategory === cat }]"
              @click="selectedCategory = cat">
              {{ cat }}
            </button>
          </div>
          <div class="sort-wrap">
            <select v-model="sortBy" class="sort-select">
              <option value="name">По имени</option>
              <option value="category">По категории</option>
              <option value="status">По статусу</option>
            </select>
          </div>
        </div>

        <!-- Skeleton loading -->
        <div v-if="loading" class="loading-grid">
          <div v-for="n in 8" :key="n" class="skeleton-card"></div>
        </div>

        <!-- ✅ ИСПРАВЛЕНО: animals-grid с правильным @error -->
        <div v-else class="animals-grid">
          <div v-for="animal in paginatedAnimals" :key="animal.id"
            class="animal-card"
            @click="$emit('open-animal', animal)">
            <div class="animal-card-img">
              <img
                :src="animal.image || ''"
                :alt="animal.name"
                loading="lazy"
                @error="handleImgError"
              />
              <span class="animal-status-dot" :class="'dot-' + animal.status"></span>
              <div class="animal-card-overlay">
                <span>Подробнее</span>
              </div>
            </div>
            <div class="animal-card-body">
              <span class="animal-category">{{ animal.category }}</span>
              <h3>{{ animal.name }}</h3>
              <p class="animal-latin-small">{{ animal.latinName }}</p>
              <span class="status-badge" :class="'status-' + animal.status">{{ animal.statusText }}</span>
            </div>
          </div>
        </div>

        <!-- ✅ ИСПРАВЛЕНО: нет пустых животных — показываем сообщение -->
        <div v-if="!loading && filteredAnimals.length === 0" class="no-results">
          <p>🔍 Животные не найдены. Попробуйте изменить фильтры.</p>
        </div>

        <div class="pagination" v-if="totalPages > 1">
          <button :disabled="currentPage === 1" @click="currentPage--" class="page-btn">‹</button>
          <button v-for="p in totalPages" :key="p"
            :class="['page-btn', { active: p === currentPage }]"
            @click="currentPage = p">{{ p }}</button>
          <button :disabled="currentPage === totalPages" @click="currentPage++" class="page-btn">›</button>
        </div>
      </div>
    </section>

    <!-- EVENTS -->
    <section class="section events-section">
      <div class="container">
        <div class="section-header">
          <div>
            <h2 class="section-title">Мероприятия</h2>
            <p class="section-sub">Специальные события и экскурсии</p>
          </div>
          <button class="btn-outline" @click="$emit('navigate', 'events')">Все мероприятия →</button>
        </div>
        <div class="events-layout">
          <div class="events-featured" v-if="events.length">
            <div class="event-big-card" @click="$emit('open-event', events[0])">
              <img
                :src="events[0].image || ''"
                :alt="events[0].title"
                @error="handleImgError"
              />
              <div class="event-big-overlay">
                <span class="event-type-pill">{{ events[0].type }}</span>
                <h3>{{ events[0].title }}</h3>
                <p>{{ (events[0].description || '').substring(0, 100) }}...</p>
                <div class="event-meta">
                  <span>📅 {{ formatDate(events[0].date) }}</span>
                  <span>👥 {{ events[0].spotsLeft }} мест</span>
                </div>
                <button class="btn-event-book" @click.stop="$emit('open-event', events[0])">Подробнее</button>
              </div>
            </div>
          </div>
          <div class="events-side">
            <div v-for="event in events.slice(1, 4)" :key="event.id"
              class="event-side-card" @click="$emit('open-event', event)">
              <div class="event-side-img">
                <img
                  :src="event.image || ''"
                  :alt="event.title"
                  loading="lazy"
                  @error="handleImgError"
                />
              </div>
              <div class="event-side-info">
                <span class="event-type-small">{{ event.type }}</span>
                <h4>{{ event.title }}</h4>
                <div class="event-side-meta">
                  <span>📅 {{ formatDate(event.date) }}</span>
                  <span class="event-price">{{ event.price ? event.price + ' ₸' : 'Бесплатно' }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT SIDEBAR -->
          <div class="events-right-sidebar">
            <!-- Weather Widget -->
            <div class="sidebar-widget weather-widget">
              <h4>🌤️ Погода сегодня</h4>
              <div class="weather-main">
                <span class="weather-temp">+{{ weatherTemp }}°C</span>
                <span class="weather-desc">Ясно, отличный день для прогулки!</span>
              </div>
              <div class="weather-tips">
                <span>🕘 Открыт 09:00–20:00</span>
              </div>
            </div>

            <!-- Quick Tickets Widget -->
            <div class="sidebar-widget ticket-widget">
              <h4>🎫 Быстрая покупка</h4>
              <div class="ticket-options">
                <div class="ticket-option" @click="$emit('navigate', 'tickets')">
                  <span>👨 Взрослый</span>
                  <strong>2 000 ₸</strong>
                </div>
                <div class="ticket-option" @click="$emit('navigate', 'tickets')">
                  <span>👶 Детский</span>
                  <strong>1 000 ₸</strong>
                </div>
                <div class="ticket-option" @click="$emit('navigate', 'tickets')">
                  <span>👨‍👩‍👧‍👦 Семейный</span>
                  <strong>5 500 ₸</strong>
                </div>
              </div>
              <button class="btn-buy-ticket" @click="$emit('navigate', 'tickets')">Купить билеты</button>
            </div>

            <!-- Newsletter Widget -->
            <div class="sidebar-widget newsletter-widget">
              <h4>📬 Новости зоопарка</h4>
              <p>Получайте уведомления о новых мероприятиях</p>
              <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
                <input v-model="newsletterEmail" type="email" placeholder="Ваш email" />
                <button type="submit">Подписаться</button>
              </form>
            </div>

            <!-- Live Stats Widget -->
            <div class="sidebar-widget stats-widget">
              <h4>📊 Зоопарк сейчас</h4>
              <div class="live-stat">
                <span class="live-dot"></span>
                <span>Посетителей сегодня: <strong>{{ liveVisitors }}</strong></span>
              </div>
              <div class="live-stat">
                <span>🦁 Животных: <strong>{{ animals.length }}</strong></span>
              </div>
              <div class="live-stat">
                <span>📅 Событий: <strong>{{ events.length }}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INFO BANNERS -->
    <section class="section info-section">
      <div class="container">
        <div class="info-grid">
          <div class="info-card" v-for="info in infoBanners" :key="info.title">
            <span class="info-icon">{{ info.icon }}</span>
            <h3>{{ info.title }}</h3>
            <p>{{ info.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const FALLBACK_IMG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23f0ede6'/><text x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='52'>🦁</text></svg>`;

export default {
  name: 'HomeView',
  props: ['animals', 'events', 'loading'],
  emits: ['open-animal', 'open-event', 'navigate', 'buy-ticket'],
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'Все',
      sortBy: 'name',
      currentPage: 1,
      perPage: 8,
      newsletterEmail: '',
      liveVisitors: Math.floor(Math.random() * 200) + 100,
      weatherTemp: Math.floor(Math.random() * 10) + 15,
      infoBanners: [
        { icon: '🕘', title: 'Часы работы', text: 'Ежедневно с 09:00 до 20:00. Касса работает до 19:00.' },
        { icon: '📍', title: 'Как добраться', text: 'ул. Байтурсынова 161, Алматы. Автобусы 2, 28, 65.' },
        { icon: '🅿️', title: 'Парковка', text: 'Бесплатная парковка для посетителей на 200 мест.' },
        { icon: '♿', title: 'Доступность', text: 'Зоопарк полностью доступен для людей с ограниченными возможностями.' }
      ]
    };
  },
  computed: {
    categories() {
      return ['Все', ...new Set(this.animals.map(a => a.category).filter(Boolean))];
    },
    filteredAnimals() {
      let list = [...this.animals];
      if (this.selectedCategory !== 'Все') {
        list = list.filter(a => a.category === this.selectedCategory);
      }
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(a =>
          (a.name || '').toLowerCase().includes(q) ||
          (a.description || '').toLowerCase().includes(q)
        );
      }
      list.sort((a, b) => {
        if (this.sortBy === 'name') return (a.name || '').localeCompare(b.name || '');
        if (this.sortBy === 'category') return (a.category || '').localeCompare(b.category || '');
        if (this.sortBy === 'status') return (a.status || '').localeCompare(b.status || '');
        return 0;
      });
      return list;
    },
    totalPages() {
      return Math.ceil(this.filteredAnimals.length / this.perPage);
    },
    paginatedAnimals() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.filteredAnimals.slice(start, start + this.perPage);
    }
  },
  watch: {
    searchQuery() { this.currentPage = 1; },
    selectedCategory() { this.currentPage = 1; }
  },
  methods: {
    formatDate(ts) {
      if (!ts) return '';
      const date = ts.toDate ? ts.toDate() : new Date(ts);
      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
    },
    handleImgError(e) {
      e.target.onerror = null;
      e.target.src = FALLBACK_IMG;
    },
    subscribeNewsletter() {
      if (this.newsletterEmail) {
        alert('Спасибо! Вы подписались на новости.');
        this.newsletterEmail = '';
      }
    }
  }
};
</script>
