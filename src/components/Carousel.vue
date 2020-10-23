<template>
  <div id="carousel-component">
    <div class="notphone-hidden">
      <b-carousel :interval="3000" indicators>
        <b-carousel-slide
          v-for="event in events"
          :key="event.id"
          :img-src="`https://picsum.photos/512/512?random=${event.id + 1}`"
          :text="event.content"
          text-tag="h5"
        >
          <!-- <b-carousel-slide
          v-for="event in events" :key="event.id"
            :img-src="event.imgURL"
            :text="event.content"
          > -->
          <h2 class="carousel-title">
            {{ event.title }}<b-badge class="badge">Palestra</b-badge>
          </h2>
          <div>
            <strong>{{
              `${event.dateTime.toLocaleDateString()} - ${event.dateTime.toLocaleTimeString()}`
            }}</strong>
          </div>
          <!-- <h2 class="carousel-title">{{ event.title }}<b-badge class="badge">{{ event.type }}</b-badge></h2> -->
          <b-button class="carousel-btn">
            Saiba mais
          </b-button>
          <!-- <b-button class="carousel-btn" @click.prevent="routerTo(event.page)">
              Saiba mais
            </b-button> -->
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="phone-hidden">
      <b-carousel :interval="3000" controls indicators>
        <b-carousel-slide
          v-for="event in events"
          :key="event.id"
          :img-src="`https://picsum.photos/512/230?random=${event.id + 1}`"
          :text="event.content"
          text-tag="h4"
        >
          <!-- <b-carousel-slide
          v-for="event in events" :key="event.id"
            :img-src="event.imgURL"
            :text="event.content"
          > -->
          <h2 class="carousel-title">
            {{ event.title }}<b-badge class="badge">Palestra</b-badge>
          </h2>
          <div>
            <strong>{{
              `${event.dateTime.toLocaleDateString()} - ${event.dateTime.toLocaleTimeString()}`
            }}</strong>
          </div>
          <!-- <h2 class="carousel-title">{{ event.title }}<b-badge class="badge">{{ event.type }}</b-badge></h2> -->
          <b-button class="carousel-btn">
            Saiba mais
          </b-button>
          <!-- <b-button class="carousel-btn" @click.prevent="routerTo(event.page)">
              Saiba mais
            </b-button> -->
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<style scoped>
#carousel-component {
  margin-bottom: 40px;
}

.badge {
  font-size: 12px;
  line-height: 15px;
}

.carousel-title {
  font-size: 25px;
  font-weight: bolder;
}

.carousel-btn {
  font-size: 20px;
  font-weight: bold;
  background-image: linear-gradient(to right, #008cb5, #00cfa1);
}

@media only screen and (min-width: 768px) {
  .carousel-title {
    font-size: 35px;
    font-weight: bolder;
  }
}
</style>

<script>
import { events } from '@/utils/dummy-data';

export default {
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.events = events;
  },
};
</script>
