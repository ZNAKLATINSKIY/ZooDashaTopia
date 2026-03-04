<template>
    <section style="margin: 50px 0 50px 0;">
        <div class="container">
            <span class="subtitle">
                THINGS TO DO
            </span>
            <h1 class="title">THINGS TO DO</h1>
            <p class="maintext">
                Discover the wild side of Staten Island. At the Staten Island Zoo, you can marvel at incredible animal exhibits and activities. Spot elusive snow leopards, watch sea lions perform, or have fun like a kid at the Children's Zoo.
            </p>
            <button class="btn">Learn More</button>
        </div>
    </section>

  <section style="background: #035748; height: 759px; overflow: hidden;">
    <div class="container" style="height: 100%;">
      <div class="mustsee__content" style="height: 100%;">
        
        <div class="mustsee__content-text">
          <h2 class="mustsee__title">MUST SEE</h2>
          <p class="mustsee__description">We don’t want you to miss out on any of the wild fun that’s waiting for you.</p>
          <span class="mustsee__undertext">THINGS TO DO</span>
        </div>

        <div class="mustsee__content-AnimalsCards-wrapper">
          <div class="mustsee__content-AnimalsCards">
            <div 
              v-for="animal in visibleAnimals" 
              :key="animal.id" 
              class="card"
            >
              <div class="card__up">
                <img 
                  class="card__img" 
                  :src="animal.imageUrl" 
                  :alt="animal.title"
                >
              </div>
              <div class="card__down">
                <span class="card__title">{{ animal.title }}</span>
                <span class="card__description">{{ animal.description }}</span>
                <button class="btn card__btn" @click="handleLearnMore(animal)">Learn More</button>    
              </div>
            </div>
            
            <div v-if="hasMoreCards" class="show-more-container">
              <button class="show-more-btn" @click="showMoreCards">
                <span>Показать ещё</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MustSeeSection',
  data() {
    return {
      allAnimals: [
        {
          id: 1,
          title: 'Африканский лев',
          description: 'Царь зверей из саванны',
          imageUrl: ''
        },
        {
          id: 2,
          title: 'Снежный барс',
          description: 'Загадочный хищник гор',
          imageUrl: ''
        },
        {
          id: 3,
          title: 'Красная панда',
          description: 'Милый древолазатель',
          imageUrl: ''
        },
        {
          id: 4,
          title: 'Императорский пингвин',
          description: 'Житель Антарктиды',
          imageUrl: ''
        },
        {
          id: 5,
          title: 'Гигантская панда',
          description: 'Любитель бамбука',
          imageUrl: ''
        },
        {
          id: 6,
          title: 'Белый медведь',
          description: 'Хозяин Арктики',
          imageUrl: ''
        },
        {
          id: 7,
          title: 'Орангутан',
          description: 'Умный примат',
          imageUrl: ''
        },
        {
          id: 8,
          title: 'Зебра',
          description: 'Полосатая лошадка',
          imageUrl: ''
        }
      ],
      visibleCount: 2
    }
  },
  computed: {
    visibleAnimals() {
      return this.allAnimals.slice(0, this.visibleCount)
    },
    hasMoreCards() {
      return this.visibleCount < this.allAnimals.length
    }
  },
  methods: {
    handleLearnMore(animal) {
      console.log('Learn more about:', animal.title)
    },
    showMoreCards() {
      this.visibleCount += 2
    }
  }
}
</script>

<style scoped>
.subtitle {
    font-family: Inter;
    font-weight: 800;
    font-size: 32px;
    color: #f48400;
}
.title {
    font-family: Inter;
    font-weight: 800;
    font-size: 110px;
    color: #067d03;
}
.maintext {
    font-family: Inter;
    font-weight: 700;
    font-size: 36px;
    color: #000;
    max-width: 1178px;
}
.btn {
  font-family: Inter;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #fff;
  width: 172px;
  height: 54px; 
  margin-top: 29px;
  border: none;
  background: #f7931e;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

.mustsee__content {
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 40px;
}

.mustsee__content-text {
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-shrink: 0;
  width: 500px;
  height: fit-content; 
  position: sticky;
  top: 0; 
  align-self: flex-start; 
  padding-top: 40px;
}

.mustsee__title {
  font-family: Inter;
  font-weight: 800;
  font-size: 64px;
  color: #ecff12;
  margin: 0;
  line-height: 1.1;
}

.mustsee__description {
  font-family: Inter;
  font-weight: 500;
  font-size: 36px;
  color: #fff;
  max-width: 500px;
  margin: 0;
  line-height: 1.3;
}

.mustsee__undertext {
  font-family: Inter;
  font-weight: 800;
  font-size: 24px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #ecff12;
  padding-top: 21px;
}

.mustsee__content-AnimalsCards-wrapper {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-right: 10px;
  
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.mustsee__content-AnimalsCards-wrapper::-webkit-scrollbar {
  display: none;
}

.mustsee__content-AnimalsCards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  width: 100%;
}

.card {
  width: 100%;
  max-width: 366px;
  height: 602px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-self: center;
  transition: transform 0.3s ease;
  animation: fadeIn 0.5s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card__up {
  width: 100%;
}

.card__img {
  width: 100%;
  height: 330px;
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  object-fit: cover;
  display: block;
  border-radius: 8px 8px 0 0;
}

.card__down {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 32px 0 50px 0;
  width: 100%;
  border-radius: 0 0 8px 8px;
}

.card__title {
  font-family: Inter;
  font-weight: 800;
  font-size: 32px;
  color: #035748;
  margin-bottom: 8px;
}

.card__description {
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  color: #035748;
  max-width: 80%;
}

.card__btn {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #067d03;
  margin-top: 29px;
}

.show-more-container {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin: 20px 0 40px;
}

.show-more-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: 2px solid #ecff12;
  color: #ecff12;
  font-family: Inter;
  font-weight: 600;
  font-size: 20px;
  padding: 12px 30px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.show-more-btn:hover {
  background: #ecff12;
  color: #035748;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(236, 255, 18, 0.3);
}

.show-more-btn:hover svg {
  transform: translateY(3px);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1200px) {
  .mustsee__content {
    flex-direction: column;
  }
  
  .mustsee__content-text {
    width: 100%;
    position: static;
    padding-top: 20px;
  }
  
  .mustsee__content-AnimalsCards-wrapper {
    width: 100%;
    padding-top: 0;
  }
}

@media (max-width: 768px) {
  .mustsee__content-AnimalsCards {
    grid-template-columns: 1fr;
  }
  
  .mustsee__title {
    font-size: 48px;
  }
  
  .mustsee__description {
    font-size: 28px;
  }
}
</style>