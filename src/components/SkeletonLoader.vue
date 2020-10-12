<template>
  <b-col lg="6" cols="12">
    <div class="card">
      <div class="card-body item">
        <div class="title"></div>
        <div class="sub-title"></div>
        <div class="content"></div>
        <div class="content"></div>
      </div>
    </div>
  </b-col>
</template>

<style>

.title {
  height: 1.5rem;
  margin-bottom: 0.75rem;
  width: 80%;
  animation: loader 1s infinite ease-in-out;
  -webkit-animation: loader 1s infinite ease-in-out;
}

.sub-title {
  height: 1.2rem;
  width: 35%;
  margin-bottom: 0.5rem;
  animation: loader 1s infinite ease-in-out;
  -webkit-animation: loader 1s infinite ease-in-out;
}

.content {
  height: 1.5rem;
  width: 100%;
  background-color: rgba(165, 165, 165, 0.1);
  animation: loader 1s infinite ease-in-out;
  -webkit-animation: loader 1s infinite ease-in-out;
}

@keyframes loader {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}

@-webkit-keyframes loader {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}
</style>
