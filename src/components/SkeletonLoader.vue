<template>
  <b-col lg="6" cols="12">
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card class="mb-2">
          <b-skeleton animation="fade" height="1.5rem" width="80%"></b-skeleton>
          <b-skeleton animation="fade" height="1.2rem" width="35%"></b-skeleton>
          <b-skeleton animation="fade" class=""></b-skeleton>
          <b-skeleton animation="fade" class=""></b-skeleton>
          <b-skeleton animation="fade" class=""></b-skeleton>
          <b-skeleton animation="fade" height="2.2rem" width="20%"></b-skeleton>
        </b-card>
      </template>
    </b-skeleton-wrapper>
  </b-col>
</template>

<script>
export default {
  name: 'SkeletonLoader',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
