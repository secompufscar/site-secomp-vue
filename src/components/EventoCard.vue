<template>
  <b-col cols="12" lg="6">
    <b-card tag="article" class="mb-2">
      <b-card-title class="bold">
        <router-link class="title-link" :to="linkTo">
          {{ title }}
        </router-link>
      </b-card-title>
      <b-card-sub-title>
        {{ dateFormatted }}
      </b-card-sub-title>
      <b-card-text>
        {{ content }}
      </b-card-text>
      <b-button :pressed="false" :to="linkTo" variant="info">Veja mais</b-button>
    </b-card>
  </b-col>
</template>

<script>
import formatDate from '@/utils/date-format';

export default {
  name: 'EventoCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    dateFormatted() {
      return formatDate(this.dateTime);
    },
    linkTo() {
      return {
        name: 'Event',
        params: { eventid: this.id },
      };
    },
  },
};
</script>

<style scoped>
.title-link {
  color:#212529;
}
</style>
