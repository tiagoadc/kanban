<template>
  <div id="app">
   
 <!-- <Grant msg="Welcome to Your Vue.js App"/> -->
   <!--   <Kanban /> -->
   <Cards />
  </div>
</template>

<script>

import Cards from './components/component_principal/gerenciador_tarefas.vue'
export default {
  name: 'App',
  components: {
    //Grant
    //Kanban
    Cards
  }
}
</script>

<style>

</style>
