<template>
  <div class="wrapper">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="footer pt-4">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style>
.wrapper {
  height: 100%;
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: auto 1fr auto;
}
</style>
