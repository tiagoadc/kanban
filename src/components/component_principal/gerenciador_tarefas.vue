<template>
  <div class="div-flex flex-column">
    <div class="div-flex flex-row">
      <!-- menu lista -->
      <div @click="click_lista" class="m-3 ml-4 click">
        <i class="fas fa-list-ul" style="color: #2c338e"></i>
        <span class="ml-2 lista"> Lista</span>

        <hr v-if="show_lista" class="hr-lista" align="center" />
      </div>

      <!-- menu kanban -->
      <div @click="click_kanban" class="m-3 click">
        <i class="fas fa-th-large" style="color: #e84586"></i>
        <span class="ml-2 kanban">Kanban </span>
        <hr v-if="show_kanban" class="hr-kanban" align="center" />
      </div>

      <!-- menu grafico gantt -->
      <div @click="click_grant" class="m-3 click">
        <i class="fas fa-chart-bar" style="color: green"></i>
        
        <span class="ml-2 grantt">Gráfico gantt </span>
        <hr v-if="show_grant" class="hr-grantt" align="center" />
      </div>
    </div>

    <!-- body lista -->
    <div v-if="show_lista"  class="div-flex flex-row border-top border-bottom"   >
      <ListCard  class="w-100 "/>
     
    </div>

    <!-- body kanban -->
    <div v-if="show_kanban" class="div-flex">
      <kanban class="w-100" />
    </div>

    <!-- body Grafico Grantt -->
    <div v-if="show_grant" class="div-flex">
      <Grant class="w-100" />
    </div>
  </div>
</template>
<script>
import Kanban from "../kanban/kanban.vue";
import Grant from "../grafico_grantt/grant.vue";
import ListCard from '../listas_card/ListCard.vue'

export default {
  components: {
    Grant,
    Kanban,
    ListCard
  },
  data() {
    return {
      show_lista: true,
      show_kanban: false,
      show_grant: false,

     
    };
  },
  methods: {
    click_lista() {
      this.show_lista = true;
      this.show_kanban = false;
      this.show_grant = false;
    },
    click_kanban() {
      this.show_lista = false;
      this.show_kanban = true;
      this.show_grant = false;
    },
    click_grant() {
      this.show_lista = false;
      this.show_kanban = false;
      this.show_grant = true;
    },
  },
};
</script>
<style scoped>
.div-flex {
  display: flex;
}
.click {
  cursor: pointer;
}
.kanban {
  color: black;
}
.kanban:hover {
  color: #e84586;
}
.lista {
  color: black;
}
.lista:hover {
  color: #2c338e;
}
.grantt {
  color: black;
}
.grantt:hover {
  color: green;
}
.hr-lista {
  border-style: solid;
  border-width: 1px;
  border-color: #2c338e;
}
.hr-kanban {
  border-style: solid;
  border-width: 1px;
  border-color: #e84586;
}
.hr-grantt {
  border-style: solid;
  border-width: 1px;
  border-color: green;
}


</style>