<template>
  <BaseLayout>
    <template #default>
      <b-container class="h-100">
        <h2>Equipe</h2>
        <div v-if="!loading">
          <TheBoard
            title="Coordenação Geral"
            :staff="coordenacaoGeral"
          />
          <TheBoard
            title="Diretoria de TI"
            :staff="tecnologiaDaInformacao"
          />
          <TheBoard
            title="Diretoria de Design & Marketing"
            :staff="designEMarketing"
          />
          <TheBoard
            title="Diretoria de Conteúdo"
            :staff="conteudo"
          />
          <TheBoard
            title="Diretoria de Patrocínio"
            :staff="patrocinio"
          />
          <TheBoard
            title="Diretoria Jurídico-Financeiro"
            :staff="juridicoFinanceiro"
          />
          <TheBoard
            title="Diretoria Sócio-Cultural"
            :staff="socioCultural"
          />
        </div>
      </b-container>
    </template>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';
import TheBoard from '@/components/TheBoard.vue';
import { getStaff } from '@/services/staff-service';
import Boards from '@/utils/boards-enum';

export default Vue.extend({
  components: {
    TheBoard,
    BaseLayout,
  },
  data() {
    return {
      loading: false,
      error: '',
      staff: [],
    };
  },
  computed: {
    coordenacaoGeral() {
      return this.staff.filter((member) => member.board === Boards.COORDENACAO_GERAL);
    },
    tecnologiaDaInformacao() {
      return this.staff.filter((member) => member.board === Boards.TECNOLOGIA_DA_INFORMACAO);
    },
    designEMarketing() {
      return this.staff.filter((member) => member.board === Boards.DESIGN_E_MARKETING);
    },
    conteudo() {
      return this.staff.filter((member) => member.board === Boards.CONTEUDO);
    },
    patrocinio() {
      return this.staff.filter((member) => member.board === Boards.PATROCINIO);
    },
    juridicoFinanceiro() {
      return this.staff.filter((member) => member.board === Boards.JURIDICO_FINANCEIRO);
    },
    socioCultural() {
      return this.staff.filter((member) => member.board === Boards.SOCIO_CULTURAL);
    },
  },
  created() {
    this.loading = true;
    getStaff(this.page, this.perPage)
      .then((events) => {
        this.staff = events;
      })
      .catch((error) => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
      });
  },
});
</script>
