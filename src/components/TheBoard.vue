<template>
  <div>
    <h3 class="text-center mt-4">{{ title }}</h3>
    <b-row class="justify-content-center">
      <MemberCard
        v-for="member in staff"
        :key="member.id"
        :name="member.name"
        :img-src="member.imgSrc"
      />
    </b-row>
  </div>
</template>

<script>
import MemberCard from '@/components/MemberCard.vue';

export default {
  name: 'TheBoard',
  components: { MemberCard },
  props: {
    title: {
      type: String,
      required: true,
    },
    staff: {
      type: Array,
      required: true,
    },
  },
};

</script>
