<template>
  <div class="admin-view">
    <div class="page-hero admin-hero">
      <h1>⚙️ Администрирование</h1>
    </div>
    <div class="container">
      <div class="admin-tabs">
        <button v-for="tab in adminTabs" :key="tab.id" :class="['admin-tab', { active: activeTab === tab.id }]" @click="activeTab = tab.id">
          {{ tab.label }}
        </button>
      </div>

      <div v-if="activeTab === 'animals'" class="admin-section">
        <div class="admin-section-header">
          <h2>Животные ({{ animals.length }})</h2>
          <button class="btn-add" @click="showAddAnimalForm = !showAddAnimalForm">+ Добавить</button>
        </div>
        <form v-if="showAddAnimalForm" @submit.prevent="submitAnimal" class="admin-form">
          <input v-model="animalForm.name" placeholder="Название" required />
          <input v-model="animalForm.latinName" placeholder="Латинское название" />
          <input v-model="animalForm.category" placeholder="Категория" />
          <input v-model="animalForm.image" placeholder="URL изображения" />
          <input v-model="animalForm.status" placeholder="Статус (vulnerable, endangered...)" />
          <input v-model="animalForm.statusText" placeholder="Текст статуса" />
          <textarea v-model="animalForm.description" placeholder="Описание" rows="3"></textarea>
          <div class="form-actions">
            <button type="submit" class="btn-primary">Сохранить</button>
            <button type="button" @click="showAddAnimalForm = false">Отмена</button>
          </div>
        </form>
        <div class="admin-table">
          <div class="admin-row header-row">
            <span>Название</span><span>Категория</span><span>Статус</span><span>Действия</span>
          </div>
          <div v-for="animal in animals" :key="animal.id" class="admin-row">
            <span>{{ animal.name }}</span>
            <span>{{ animal.category }}</span>
            <span :class="'status-' + animal.status">{{ animal.statusText }}</span>
            <span class="admin-actions">
              <button @click="$emit('delete-animal', animal.id)" class="btn-delete">Удалить</button>
            </span>
          </div>
        </div>
      </div>

      <!-- Events CRUD -->
      <div v-if="activeTab === 'events'" class="admin-section">
        <div class="admin-section-header">
          <h2>Мероприятия ({{ events.length }})</h2>
          <button class="btn-add" @click="showAddEventForm = !showAddEventForm">+ Добавить</button>
        </div>
        <form v-if="showAddEventForm" @submit.prevent="submitEvent" class="admin-form">
          <input v-model="eventForm.title" placeholder="Название" required />
          <input v-model="eventForm.type" placeholder="Тип (Экскурсия, Лекция...)" />
          <input v-model="eventForm.price" type="number" placeholder="Цена (0 = бесплатно)" />
          <input v-model="eventForm.spotsLeft" type="number" placeholder="Количество мест" />
          <input v-model="eventForm.location" placeholder="Место проведения" />
          <input v-model="eventForm.image" placeholder="URL изображения" />
          <textarea v-model="eventForm.description" placeholder="Описание" rows="3"></textarea>
          <div class="form-actions">
            <button type="submit" class="btn-primary">Сохранить</button>
            <button type="button" @click="showAddEventForm = false">Отмена</button>
          </div>
        </form>
        <div class="admin-table">
          <div class="admin-row header-row">
            <span>Название</span><span>Тип</span><span>Цена</span><span>Мест</span><span>Действия</span>
          </div>
          <div v-for="event in events" :key="event.id" class="admin-row">
            <span>{{ event.title }}</span>
            <span>{{ event.type }}</span>
            <span>{{ event.price ? event.price + ' ₸' : 'Бесплатно' }}</span>
            <span>{{ event.spotsLeft }}</span>
            <span class="admin-actions">
              <button @click="$emit('delete-event', event.id)" class="btn-delete">Удалить</button>
            </span>
          </div>
        </div>
      </div>

      <!-- Users management -->
      <div v-if="activeTab === 'users'" class="admin-section">
        <h2>Пользователи</h2>
        <p class="admin-note">Управление пользователями через Firebase.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminView',
  props: ['animals', 'events', 'users'],
  emits: ['add-animal', 'update-animal', 'delete-animal', 'add-event', 'update-event', 'delete-event', 'set-admin'],
  data() {
    return {
      activeTab: 'animals',
      adminTabs: [{ id: 'animals', label: '🦁 Животные' }, { id: 'events', label: '📅 Мероприятия' }, { id: 'users', label: '👥 Пользователи' }],
      showAddAnimalForm: false,
      showAddEventForm: false,
      animalForm: { name: '', latinName: '', category: '', image: '', status: '', statusText: '', description: '' },
      eventForm: { title: '', type: '', price: 0, spotsLeft: 20, location: '', image: '', description: '' }
    };
  },
  methods: {
    submitAnimal() {
      this.$emit('add-animal', { ...this.animalForm });
      this.animalForm = { name: '', latinName: '', category: '', image: '', status: '', statusText: '', description: '' };
      this.showAddAnimalForm = false;
    },
    submitEvent() {
      this.$emit('add-event', { ...this.eventForm, price: Number(this.eventForm.price), spotsLeft: Number(this.eventForm.spotsLeft), date: new Date() });
      this.eventForm = { title: '', type: '', price: 0, spotsLeft: 20, location: '', image: '', description: '' };
      this.showAddEventForm = false;
    }
  }
};
</script>
<style scoped>
.admin-view {
  padding-bottom: 4rem;
  background-color: #fcfcfc;
  min-height: 100vh;
}

.admin-hero {
  background-color: #2c3e50;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 0 0 20px 20px;
}

.admin-hero h1 {
  margin: 0;
  font-size: 2.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.admin-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  -webkit-overflow-scrolling: touch;
}

.admin-tab {
  padding: 0.8rem 1.5rem;
  border: none;
  background: #e2e8f0;
  color: #4a5568;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  transition: all 0.3s ease;
}

.admin-tab:hover {
  background: #cbd5e0;
}

.admin-tab.active {
  background: #10b981;
  color: white;
  box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);
}

.admin-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.admin-section-header h2 {
  margin: 0;
  color: #2d3748;
}

.btn-add {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-add:hover {
  background: #2563eb;
}

.admin-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
}

.admin-form input,
.admin-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
}

.admin-form textarea {
  grid-column: 1 / -1;
  resize: vertical;
}

.form-actions {
  grid-column: 1 / -1;
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.form-actions button {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  font-weight: bold;
}

.btn-primary {
  background: #10b981;
  color: white;
}

.admin-table {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.admin-row {
  display: flex;
  align-items: center;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.header-row {
  background: #f8fafc;
  font-weight: 700;
  color: #4a5568;
  border: none;
  box-shadow: none;
}

.admin-row > span {
  flex: 1;
  padding-right: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.admin-actions {
  flex: 0 0 auto !important;
  padding-right: 0 !important;
  text-align: right;
}

.btn-delete {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-delete:hover {
  background: #dc2626;
}

@media (max-width: 768px) {
  .admin-form {
    grid-template-columns: 1fr;
  }

  .header-row {
    display: none;
  }

  .admin-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1rem;
  }

  .admin-row > span {
    width: 100%;
    white-space: normal;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 0.5rem;
  }

  .admin-row > span:last-child {
    border-bottom: none;
  }

  .admin-actions {
    width: 100%;
    text-align: left;
    margin-top: 0.5rem;
  }

  .btn-delete {
    width: 100%;
    padding: 0.75rem;
  }
}
</style>