<template>
  <BaseLayout>
    <template #header >
      <NavBar />
    </template>
   <template #footer >
      <TheFooter />
    </template>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default Vue.extend({
  components: {
    BaseLayout,
    NavBar,
    TheFooter,
  },
});
</script>
