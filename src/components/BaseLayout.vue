<template>
  <div class="wrapper">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="footer mt-5 pt-4">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
.wrapper {
  height: 100%;
  display: grid;
  grid-template-rows: 4.5rem 1fr auto;
}
</style>
