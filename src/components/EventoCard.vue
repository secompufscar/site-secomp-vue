<template>
  <b-col cols="12" lg="6">
    <b-card
      :sub-title="dateFormatted"
      tag="article"
      class="mb-2"
    >
      <b-card-title>
        <router-link to="/events/1">
          {{ title }}
        </router-link>
      </b-card-title>
      <b-card-text>
        {{ content }}
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
import formatDate from '@/utils/date-format';

export default {
  name: 'EventoCard',
  props: {
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
  },
};
</script>
