<template>
  <BaseLayout>
    <template #default>
      <b-container class="h-100">
        <h2>Próximos Eventos</h2>
        <b-row v-if="loading">
          <SkeletonLoader
            v-for="i in  4"
            :key="i"
            :loading="loading"/>
        </b-row>
        <b-row v-if="!loading">
          <EventoCard
            v-for="event in nextEvents"
            :key="event.id"
            :id="event.id"
            :title="event.title"
            :date-time="event.dateTime"
            :headline="event.headline"
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
import { getNextEvents } from '@/services/events-service';
import SkeletonLoader from '@/components/SkeletonLoader.vue';

export default Vue.extend({
  components: {
    BaseLayout,
    EventoCard,
    SkeletonLoader,
  },
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
});
</script>

<style>
</style>
