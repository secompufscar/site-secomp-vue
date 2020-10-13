<template>
  <b-col
    lg="4"
    md="6"
    cols="12"
    class="mb-3"
  >
    <b-card>
      <b-card-img :src="imgSrc" :alt="imgAlt"></b-card-img>
      <b-card-title
        title-tag="h5"
        class="text-center"
      >{{name}}</b-card-title>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'MemberCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgAlt() {
      return `Foto de ${this.name}`;
    },
  },
};
</script>
