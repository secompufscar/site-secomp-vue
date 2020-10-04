<template>
  <div class="footer container small">
    <div class="row justify-content-center">
      <div class="col-sm-12">
        <ul class="list-unstyled list-inline social text-center">
          <li class="list-inline-item">
            <a href="https://play.google.com/store/apps/details?id=br.com.secompufscar.app">
              <font-awesome-icon icon="mobile-alt" size="2x"></font-awesome-icon>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://facebook.com/secompufscar" target="blank">
              <font-awesome-icon :icon="['fab', 'facebook-f']" size="2x"></font-awesome-icon>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://twitter.com/secompufscar" target="blank">
              <font-awesome-icon :icon="['fab', 'twitter']" size="2x"></font-awesome-icon>
            </a>
          <li class="list-inline-item">
            <a href="https://www.youtube.com/channel/UChj1pycWmHOJDeJkDf6RraA" target="blank">
              <font-awesome-icon :icon="['fab', 'youtube']" size="2x"></font-awesome-icon>
            </a></li>
          <li class="list-inline-item">
            <a href="https://instagram.com/secompufscar" target="blank">
              <font-awesome-icon :icon="['fab', 'instagram']" size="2x"></font-awesome-icon>
            </a></li>
          <li class="list-inline-item">
            <a href="mailto:marketing@secompufscar.com.br">
              <font-awesome-icon :icon="['fas', 'envelope']" size="2x"></font-awesome-icon>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-sm-12 text-center">
        <p>
          Departamento de Computação <br>
          UFSCar - Universidade Federal de São Carlos <br>
          Rodovia Washington Luís, Km 235 - Bairro Jardim Guanabara <br> São Carlos/ SP - CEP 13565-905
        </p>
      </div>
      <div class="col-sm-12 text-center">
        <p>
          Copyright &copy; SECOMP UFSCar
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  background-color: #001014;
  color: #dddddd;
}

.social a {
  color: #ddd;
  transition: 0.2s;
}
.social a:hover {
  color: #00cfa1;
  transition: 0.2s;
}
</style>
