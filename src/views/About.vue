<template>
  <BaseLayout>
    <template #default> About </template>
  </BaseLayout>
</template>

<script>
import Vue from "vue";
import BaseLayout from "@/components/BaseLayout.vue";

export default Vue.extend({
  components: {
    BaseLayout,
  },
});
</script>
