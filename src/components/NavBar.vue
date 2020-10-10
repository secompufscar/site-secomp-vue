<template>
    <b-navbar class="shadow-sm bg-gradient-secomp text-navbar-secomp" fixed="top" type="dark" toggleable="lg">
      <b-navbar-brand :to="{name: 'Home'}" href="#">
        <img id="logo" src="../assets/logo.png" alt="Logo da SECOMP UFSCar"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Home' }">
            <font-awesome-icon icon="home"></font-awesome-icon>
            Home
          </b-nav-item>
          <b-nav-item :to="{ name: 'Events' }">
            <font-awesome-icon icon="calendar-alt"></font-awesome-icon>
            Eventos
          </b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<style>
#logo {
  width: 30px;
  height: 30px;
}

.bg-gradient-secomp {
  background-image: linear-gradient(to right, #008cb5, #00cfa1);
}

.text-navbar-secomp a {
  color: white !important;
}
</style>
