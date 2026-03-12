<template>
    <section style="margin: 50px 0 50px 0;">
        <div class="container">
            <span class="subtitle">
                THINGS TO DO
            </span>
            <h1 class="title">PLAN YOUR VISIT</h1>
            <p class="maintext">
            Whether you want to see snow leopards and snow monkeys or plan your day around a sea lion feeding, here's what you need to know to have an awesome day with wildlife.
            </p>
            <button class="btn">Learn More</button>
        </div>
    </section>
    <section class="park__hours">
        <div class="container">
            <div class="park__hours-content">
                <div class="park__hours-date grayback">
                    <h2 class="park__hours-title">PARK HOURS</h2>
                    <span class="park__hours-subtitle mx-600">NOVEMBER 6, 2022 — MARCH 31, 2023</span>
                    <span class="park__hours-subtitle">DAILY</span>
                    <span class="date">10:00 <span class="am">AM</span> - 4:30 <span class="pm">PM</span></span>
                    <span class="park__hours-subtitle mgtop">APRIL 1 — NOVEMBER 4, 2023</span>
                    <span class="park__hours-subtitle">DAILY</span>
                    <span class="date">10:00 <span class="am">AM</span> - 5:00 <span class="pm">PM</span></span>
                    <span class="park__hours-subtitle mgtop">Weekends & Holidays</span>
                    <span class="park__hours-subtitle">DAILY</span>
                    <span class="date">10:00 <span class="am">AM</span> - 5:00 <span class="pm">PM</span></span>
                    <button class="btn" style="box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25); background: #f48400;">Learn More</button>
                    <span class="park__hours-foottext">Last entry is 30 minutes prior to closing.</span>
                </div>
                <div class="park__hours-map grayback">
                    <h2 class="park__hours-title">MAP & DIRECTIONS</h2>
                    <span class="park__hours-sibtitle subtitlemap mx-600">64th Street & 5th AvenueNew York, NY 10065</span>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0697bec7cc2c9c282b90b51435a9a3aa175239ec42dad1014bc014bb4cd7bb0d&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
                    <span class="park__map-foottext">ЯНДЕКС КАРТЫ</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
</script>
<style>
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
  background: #0681f3;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn:hover {
  opacity: 0.9;
}
.grayback {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
}
.park__hours-content {
    display: flex;
    justify-content: space-between;
}
.park__hours-date, .park__hours-map {
    padding-top: 27px;
    width: 649px;
    height: 898px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
.park__hours-title {
    font-family: Inter;
    font-weight: 700;
    font-size: 40px;
    text-align: right;
    color: #035748;
}
.park__hours-subtitle {
    font-family: Inter;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #035748;
}
.subtitlemap {
    font-family: Inter;
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    color: #035748;
}
.mx-600 {
    max-width: 600px;
}
.date {
    font-family: Inter;
    font-weight: 700;
    font-size: 38px;
    text-align: center;
    color: #035748;
}
.am, .pm {
    font-weight: 700;
    color: #989898;
}
.mgtop {
    margin-top: 50px;
}
.park__hours-foottext {
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #035748;
}
.park__map-foottext {
    font-family: Inter;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #035748;
}
</style>