<template>
  <BaseLayout>
    <template #default>
      <b-container>
        <h2>Próximos Eventos</h2>
        <p v-if="loading">Loading...</p>
        <b-row v-if="!loading">
          <EventoCard
            v-for="event in nextEvents"
            :key="event.id"
<<<<<<< HEAD
            :id="event.id"
            :title="event.title"
            :date-time="event.dateTime"
            :headline="event.headline"
=======
            :title="event.title"
            :date-time="event.dateTime"
            :content="event.content"
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d
          />
        </b-row>
      </b-container>
    </template>
  </BaseLayout>
</template>

<script>
<<<<<<< HEAD
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import EventoCard from '@/components/EventoCard.vue';
import { getNextEvents } from '@/services/events-service';
=======
import Vue from "vue";
import BaseLayout from "@/components/BaseLayout.vue";
import EventoCard from "@/components/EventoCard.vue";
import { getNextEvents } from "@/services/events-service";
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d

export default Vue.extend({
  data() {
    return {
      loading: false,
<<<<<<< HEAD
      error: '',
=======
      error: "",
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d
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
  },
});
</script>

<style>
</style>
