<template>
  <li class="list-inline-item social-button">
    <a :href="link">
      <font-awesome-icon :icon="icon" size="2x"></font-awesome-icon>
    </a>
  </li>
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'SocialButton',
=======
  name: "SocialButton",
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d
  props: {
    link: {
      type: String,
      required: true,
    },
    icon: {
      type: [String, Array],
      required: true,
    },
  },
};
</script>

<style>
.social-button a {
  color: #ddd;
  transition: 0.2s;
}

.social-button a:hover {
  color: #00cfa1;
  transition: 0.2s;
}
</style>
