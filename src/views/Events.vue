<template>
  <BaseLayout>
    <template #default>
      <b-container class="h-100">
        <h2>Eventos</h2>
        <b-row v-if="loading">
          <SkeletonLoader
            v-for="i in perPage"
            :key="i"
          />
        </b-row>
        <div v-if="!loading && hasEvents">
          <b-row v-if="!loading">
            <EventoCard
              v-for="event in events"
              :key="event.id"
              :title="event.title"
              :date-time="event.dateTime"
              :content="event.content"
            />
          </b-row>
          <b-pagination
            :total-rows="count"
            :value="page + 1"
            :per-page="perPage"
            align="center"
            @change="goToPage"
          ></b-pagination>
        </div>
        <div
          v-if="!loading && !hasEvents"
          class="d-flex justify-content-center align-items-center h-100"
        >
          Nenhum evento foi encontrado.
        </div>
      </b-container>
    </template>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import EventoCard from '@/components/EventoCard.vue';
import { getCount, getEvents } from '@/services/events-service';
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
      events: [],
      page: this.$route.params.page || 0,
      count: 0,
      perPage: 6,
    };
  },
  computed: {
    hasEvents() {
      return this.count > 0;
    },
  },
  watch: {
    $route(to) {
      this.page = to.params.page || 0;
      getEvents(this.page, this.perPage)
        .then((events) => {
          this.events = events;
        });
    },
  },
  created() {
    this.loading = true;
    Promise.all([
      getCount()
        .then((count) => {
          this.count = count;
        }),
      getEvents(this.page, this.perPage)
        .then((events) => {
          this.events = events;
        })
        .catch((error) => {
          this.error = error;
        }),
    ])
      .then(() => {
        this.loading = false;
      });
  },
  methods: {
    goToPage(page) {
      this.$router.push(`/events/${page - 1}`);
    },
  },
});
</script>
