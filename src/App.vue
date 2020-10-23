<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
}

.phone-hidden {
  display: none;
}

.notphone-hidden {
  display: initial;
}

@media only screen and (min-width: 768px) {
  .phone-hidden {
    display: initial;
  }
  .notphone-hidden {
    display: none;
  }
}
</style>
