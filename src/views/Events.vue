<template>
  <BaseLayout>
    <template #default>
      <b-container>
        <h2>Eventos</h2>
        <p v-if="loading">Loading...</p>
        <b-row v-if="!loading">
          <EventoCard
            v-for="event in events"
            :key="event.id"
            :id="event.id"
            :title="event.title"
            :date-time="event.dateTime"
            :content="event.content"
          />
        </b-row>
      </b-container>
    </template>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import EventoCard from '@/components/EventoCard.vue';
import { getEvents } from '@/services/events-service';

export default Vue.extend({
  data() {
    return {
      loading: false,
      error: '',
      events: [],
    };
  },
  created() {
    this.loading = true;
    getEvents()
      .then((events) => {
        this.events = events.sort((a, b) => a.dateTime - b.dateTime);
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
  },
});
</script>
