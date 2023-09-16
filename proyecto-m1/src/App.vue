<template>
  <v-layout>
    <v-app-bar color="orange-accent-2" v-if="renderizarMenu">
      <v-app-bar-title class="titleMenu text-h5">Lab Treinos</v-app-bar-title>
     
      <v-btn size="small" to="/dashboard">        
          Home               
      </v-btn>
   
      <v-btn size="small" to="/gerenciamento-alunos">
           Alunos       
      </v-btn>

      <v-btn size="small" to="/gerenciamento-exercicios">
        Exercicios      
       </v-btn>
      
      <v-btn size="small" to="/">
      Sair      
       </v-btn>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  computed: {
    renderizarMenu() {
      return this.$route.path !== '/' && this.$route.path !== '/cadastro-usuario'
    }
  }
}
</script>

<style>
.v-btn {
  text-shadow: none;
}
</style>