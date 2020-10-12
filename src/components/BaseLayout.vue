<template>
  <div class="wrapper">
    <header>
      <slot name="header">
        <NavBar />
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="footer mt-5 pt-4">
      <slot name="footer">
        <TheFooter/>
      </slot>
    </footer>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
    TheFooter,
  },
};
</script>

<style>
.wrapper {
  height: 100%;
  display: grid;
  grid-template-rows: 4.5rem 1fr auto;
}
</style>
