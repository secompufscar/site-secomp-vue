<template>
  <BaseLayout>
    <template #default>
      <b-container>
        <h2 v-if="loading">Loading...</h2>
        <div v-if="!loading" class="content-loaded">
          <h2>{{ event.title }}</h2>
          <h6 class="subtitle">Data: {{ event.dateTime }}</h6>
          <vue-markdown class="markdown" :source="event.content" />
        </div>
      </b-container>
    </template>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';
import VueMarkdown from 'vue-markdown-render';
import BaseLayout from '@/components/BaseLayout.vue';
import formatDate from '@/utils/date-format';
import { getEvent } from '@/services/events-service';

export default Vue.extend({
  props: {
    eventid: {
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
  mounted() {
    getEvent(Number(this.eventid))
      .then((event) => {
        this.event = event;
        this.event.dateTime = formatDate(this.dateTime);
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
    VueMarkdown,
  },
});
</script>

<style scoped>
h2, h6 {
  text-align: center;
}
.subtitle {
  color: darkgray;
}
.markdown {
  text-align: justify;
}

</style>
