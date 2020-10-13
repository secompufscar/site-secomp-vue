<template>
  <BaseLayout>
    <template #default>
      <b-container>
        <h2 v-if="loading">Loading...</h2>
        <h2 v-if="!loading">{{ event.title }}</h2>
      </b-container>
    </template>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import { getEvent } from '@/services/events-service';

export default Vue.extend({
  props: {
    eventid: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      error: '',
      event: {},
      loading: true,
    };
  },
  created() {
    getEvent(this.eventid)
      .then((event) => {
        this.event = event;
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
  },
});
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
