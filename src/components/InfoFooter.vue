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
<<<<<<< HEAD:src/components/InfoFooter.vue
          Departamento de Computação <br>
          UFSCar - Universidade Federal de São Carlos <br>
          Rodovia Washington Luís, Km 235 - Bairro Jardim Guanabara <br>
=======
          Departamento de Computação <br />
          UFSCar - Universidade Federal de São Carlos <br />
          Rodovia Washington Luís, Km 235 - Bairro Jardim Guanabara <br />
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d:src/components/Footer.vue
          São Carlos/ SP - CEP 13565-905
        </p>
      </b-col>
      <b-col sm="12" class="text-center">
<<<<<<< HEAD:src/components/InfoFooter.vue
        <p>
          Copyright &copy; SECOMP UFSCar
        </p>
=======
        <p>Copyright &copy; SECOMP UFSCar</p>
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d:src/components/Footer.vue
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
<<<<<<< HEAD:src/components/InfoFooter.vue
import SocialButton from '@/components/SocialButton.vue';
import SocialButtonContainer from '@/components/SocialButtonContainer.vue';
import socialButtonsData from '@/utils/social-buttons-data';
=======
import SocialButton from "@/components/SocialButton.vue";
import SocialButtonContainer from "@/components/SocialButtonContainer.vue";
import socialButtonsData from "@/utils/social-buttons-data";
>>>>>>> 3e804f3baec75fba9f6ca692591c3ab2e81e196d:src/components/Footer.vue

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
