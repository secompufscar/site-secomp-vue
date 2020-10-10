<template>
  <BaseLayout>
    <template #header>
      <NavBar/>
    </template>
    <template #default>
      <b-container>
        <h2>Eventos</h2>
        <b-row>
          <EventoCard
            v-for="event in events"
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
import { events } from '@/utils/dummy-data';

export default Vue.extend({
  data() {
    return {
      events,
    };
  },
  components: {
    BaseLayout,
    NavBar,
    TheFooter,
    EventoCard,
  },
});
</script>
