<template>
  <div class="wrapper">
    <header>
      <slot name="header">
<<<<<<< HEAD
        <NavBar/>
=======
        <NavBar />
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="footer mt-5 pt-4">
      <slot name="footer">
<<<<<<< HEAD
        <InfoFooter/>
=======
        <Footer />
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d
      </slot>
    </footer>
  </div>
</template>

<script>
<<<<<<< HEAD
import InfoFooter from '@/components/InfoFooter.vue';
import NavBar from '@/components/NavBar.vue';
=======
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d

export default {
  components: {
    NavBar,
<<<<<<< HEAD
    InfoFooter,
=======
    Footer,
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d
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
