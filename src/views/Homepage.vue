<template>
  <section class="wild">
    <div class="container">
      <div class="wild__images">
        <div class="image">
          <img src="../assets/one_image.png" alt="картин.1">
        </div>
        <div class="image">
          <img src="../assets/two_image.png" alt="картин.2">
        </div>
        <div class="image">
          <img src="../assets/three_image.png" alt="картин.3">
        </div>
        <div class="image">
          <img src="../assets/four_image.png" alt="картин.4">
        </div>
      </div>

      <div class="wild__content">
        <h1 class="wild__title">
          DISCOVER YOUR <br />
          WILD SIDE
        </h1>

        <p class="wild__text">
          Discover the wild side of Staten Island. At the Staten Island Zoo,
          you can marvel at incredible animal exhibits and activities.
          Spot elusive snow leopards, watch sea lions perform,
          or have fun like a kid at the Children's Zoo.
        </p>

        <button class="wild__btn">Learn more</button>
      </div>

      <div class="wild__bottomBlocks">
        <button class="wild__bottomBlocks-block green">
          DONATE
        </button>
        <button class="wild__bottomBlocks-block blue">
          MEMBERSHIP
        </button>
        <button class="wild__bottomBlocks-block orange">
          BUY TICKETS
        </button>
      </div>
    </div>
    

  </section>

  <section class="discover">
    <div class="container">

      <div class="discover__header">
        <h1 class="discover__title">
          <span class="span__title-one">DISCOVER YOUR</span><br />
          <span class="span__title-two">WILD SIDE</span>
        </h1>

        <a href="" class="notice">
          All visitors must reserve a date-specific ticket in advance.
        </a>
      </div>

      <div class="cards">
        <div class="card">
          <div class="card__image">
            <img src="../assets/card_two.png" class="first_card" alt="карт.каоьы">
          </div>
          <div class="card__btn">
            <span>Come visit the</span>
            <br>
            <strong>VIRTUAL ZOO</strong>
          </div>
        </div>

        <div class="card">
          <div class="card__image"> 
            <img src="../assets/card_one.png" class="second_card" alt="карт.каоьы">
          </div>
          <div class="card__btn">
            <span>Become a member</span>
            <br>
            <strong>MEMBERSHIP</strong>
          </div>
        </div>

        <div class="card">
          <div class="card__image">
            <img src="../assets/card_three.png" class="three_card" alt="карт.каоьы">
          </div>
          <div class="card__btn">
            <span>Stay up to date</span>
            <br>
            <strong>LATEST NEWS</strong>
          </div>
        </div>
      </div>

    </div>

    <div class="events">
      <div class="container events__wrapper">

        <div class="events__content">
          <span class="events__label">CONSERVATION</span>
          <h2>UPCOMING EVENTS</h2>

          <p>
            Explore our rich legacy of saving animals, from birds to snow leopards,
            and learn about our ongoing efforts. At the Staten Island Zoo,
            we take pride in our history of successful animal conservation.
          </p>

          <button>Learn more</button>
        </div>

      </div>

      <div class="events__image">
        <img src="../assets/tigers.jpg" alt="карт.тигров">
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "WildSection"
  }
</script>

<style scoped>
.wild {
  background: #0b5d13;
  padding: 60px 80px;
  color: white;
}

/* ===== IMAGES ===== */

.wild__images {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 60px;
}

.image {
  flex: 1;
  height: 754px;
  max-width: 304px;;
  background: #2e7d32;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
}

/* ===== CONTENT ===== */

.wild__title {
  font-family: Inter;
  font-weight: 900;
  font-size: 110px;
  color: #fff;
  margin-bottom: 25px;
}

.wild__text {
  max-width: 1000px;
  font-family: Inter;
  font-weight: 700;
  font-size: 36px;
  color: #fff;
  margin-bottom: 30px;
}

.wild__btn {
  background: #f28c00;
  border: none;
  padding: 14px 28px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.wild__btn:hover {
  opacity: 0.85;
}

.wild__bottomBlocks {
  margin: 0 0 0 243px;
  position: relative;
  top: 112px;
  display: flex;
  justify-content: end;
  gap: 27px;
}
.wild__bottomBlocks-block {
  width: 335px;
  height: 149px;
  font-family: Inter;
  font-weight: 700;
  font-size: 40px;
  color: #fff;
  border: none;
}
.green {
  background: #067d03;
}
.blue {
  background: #0681f3;
}
.orange {
  background: #f48400;
}

.discover {
  padding: 60px 0;
  margin-top: 178px;
}

.discover__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
}


.span__title-one {
  font-family: Inter;
  font-weight: 900;
  font-size: 64px;
  color: #045703;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
.span__title-two {
  font-family: Inter;
  font-weight: 900;
  font-size: 110px;
  color: #f48400;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
.notice {
  font-family: Inter;
  font-weight: 900;
  font-size: 20px;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #045703;
}

/* ===== CARDS ===== */

.cards {
  display: flex;
  gap: 47px;
}

.card {
  flex: 1;
  position: relative;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
}

.card__image {
  height: 310px;
  max-width: 405px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.first_card {
  width: 405px;
}
.second_card {
  width: 423px;
}
.three_card {
  width: 386px;
}
.card__image img {
  width: 100%;
  height: 310px;
}
.card__btn {
  position: absolute;
  bottom: -20px;
  left: 20px;
  background: #f28c00;
  color: white;
  padding: 18px 24px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.card__btn span {
  font-family: Inter;
  font-weight: 500;
  font-size: 28px;
  color: #fff;
}

.card__btn strong {
  font-family: Inter;
  font-weight: 900;
  font-size: 40px;
  color: #fff;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

/* ===== EVENTS ===== */

.events {
  margin-top: 120px;
  position: relative;
}

.events__wrapper {
  background: #0d5f4a;
  padding: 60px;
  position: relative;
  z-index: 2;
}

.events__content {
  color: white;
}

.events__label {
  font-family: Inter;
  font-weight: 500;
  font-size: 24px;
  color: #fff;
}

.events h2 {
  font-family: Inter;
  font-weight: 900;
  font-size: 64px;
  color: #fff;
}

.events p {
  font-family: Inter;
  font-weight: 500;
  font-size: 24px;
  color: #fff;
  max-width: 1000px;
}

.events button {
  background: #f28c00;
  border: none;
  padding: 14px 28px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
}

/* ===== BIG IMAGE ===== */

.events__image {
  margin-top: -140px;
  display: flex;
  justify-content: center;
}

</style>