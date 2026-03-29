<template>
  <div class="about-view">
    <div class="page-hero">
      <h1>О нас</h1>
      <p>История и миссия Алматинского зоопарка</p>
    </div>
    <div class="container">
      <div class="about-content">
        <div class="about-section">
          <h2>Наша история</h2>
          <p>Алматинский зоопарк был основан в 1972 году и является одним из крупнейших зоопарков Центральной Азии. За более чем 50 лет работы зоопарк стал не только местом отдыха, но и важным научным и образовательным центром.</p>
          <p>Сегодня в нашем зоопарке обитают более 200 видов животных, многие из которых занесены в Красную книгу и участвуют в международных программах разведения редких животных.</p>
        </div>
        <div class="about-mission">
          <h2>Наша миссия</h2>
          <div class="mission-cards">
            <div class="mission-card" v-for="m in missions" :key="m.title">
              <span class="mission-icon">{{ m.icon }}</span>
              <h3>{{ m.title }}</h3>
              <p>{{ m.text }}</p>
            </div>
          </div>
        </div>
        <div class="about-contacts">
          <h2>Контакты</h2>
          <div class="contact-grid">
            <div class="contact-item"><span>📍</span><p>ул. Байтурсынова 161, Алматы</p></div>
            <div class="contact-item"><span>📞</span><p>+7 (727) 270-40-88</p></div>
            <div class="contact-item"><span>📧</span><p>info@zoo.almaty.kz</p></div>
            <div class="contact-item"><span>🕘</span><p>Ежедневно 09:00–20:00</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  data() {
    return {
      missions: [
        { icon: '🌿', title: 'Сохранение природы', text: 'Участвуем в международных программах сохранения редких видов.' },
        { icon: '🎓', title: 'Образование', text: 'Проводим экскурсии, лекции и мастер-классы для школьников.' },
        { icon: '🔬', title: 'Наука', text: 'Ведём научную работу по изучению поведения и биологии животных.' },
        { icon: '🌍', title: 'Экология', text: 'Внедряем экологические практики во всей работе зоопарка.' }
      ]
    };
  }
};
</script>
