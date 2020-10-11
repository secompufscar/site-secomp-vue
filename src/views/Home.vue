<template>
  <BaseLayout>
    <template #header>
      <NavBar/>
    </template>
    <template #default>
      <b-container>
        <h2>Próximos Eventos</h2>
        <p v-if="loading">Loading...</p>
        <b-row v-if="!loading">
          <EventoCard
            v-for="event in nextEvents"
            :key="event.id"
            :title="event.title"
            :date-time="event.dateTime"
            :content="event.content"
          />
        </b-row>
      </b-container>
    </template>
    <template #footer>
      <TheFooter/>
    </template>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';
import EventoCard from '@/components/EventoCard.vue';
import { getNextEvents } from '@/services/events-service';

export default Vue.extend({
  data() {
    return {
      loading: false,
      error: '',
      nextEvents: [],
    };
  },
  created() {
    this.loading = true;
    getNextEvents()
      .then((events) => {
        this.nextEvents = events;
      })
      .catch((error) => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  components: {
    BaseLayout,
    EventoCard,
    NavBar,
    TheFooter,
  },
});
</script>

<style>
</style>
