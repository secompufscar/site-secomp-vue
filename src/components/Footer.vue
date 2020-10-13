<template>
  <b-container class="footer small">
    <b-row class="justify-content-center">
      <b-col sm="12">
        <SocialButtonContainer>
          <SocialButton
            v-for="(data, index) in socialButtonsData"
            :key="index"
            :link="data.link"
            :icon="data.icon"
          />
        </SocialButtonContainer>
      </b-col>
      <b-col sm="12" class="text-center">
        <p>
          Departamento de Computação <br>
          UFSCar - Universidade Federal de São Carlos <br>
          Rodovia Washington Luís, Km 235 - Bairro Jardim Guanabara <br>
          São Carlos/ SP - CEP 13565-905
        </p>
      </b-col>
      <b-col sm="12" class="text-center">
        <p>
          Copyright &copy; SECOMP UFSCar
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SocialButton from '@/components/SocialButton.vue';
import SocialButtonContainer from '@/components/SocialButtonContainer.vue';
import socialButtonsData from '@/utils/social-buttons-data';

export default {
  components: {
    SocialButtonContainer,
    SocialButton,
  },
  data() {
    return {
      socialButtonsData,
    };
  },
};
</script>

<style>
.footer {
  background-color: #001014;
  color: #dddddd;
}
</style>
