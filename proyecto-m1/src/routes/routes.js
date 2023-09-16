import { createRouter, createWebHistory } from 'vue-router'

import Login from "../views/Login/Login.vue"
import CadastroUsuario from "../views/CadastroUsuario/CadastroUsuario.vue"
import Dashboard from "../views/Dashboard/Dashboard.vue"
import GerenciamentoExercicios from "../views/GerenciamentoExercicios/GerenciamentoExercicios.vue"
import GerenciamentoAlunos from "../views/GerenciamentoAlunos/GerenciamentoAlunos.vue"
import CadastroNovoAluno from "../views/CadastroNovoAluno/CadastroNovoAluno.vue"
import CadastroTreino from "../views/CadastroTreino/CadastroTreino.vue"
import VisualizacaoTreinos from "../views/VisualizacaoTreinos/VisualizacaoTreinos.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro-usuario',
      name: 'CadastroUsuario',
      component: CadastroUsuario
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/gerenciamento-exercicios',
      name: 'GerenciamentoExercicios',
      component: GerenciamentoExercicios
    },
    {
      path: '/gerenciamento-alunos',
      name: 'GerenciamentoAlunos',
      component: GerenciamentoAlunos
    },
    {
      path: '/cadastro-novo-aluno',
      name: 'CadastroNovoAluno',
      component: CadastroNovoAluno
    },
    {
      path: '/cadastro-treino/:id',
      name: 'CadastroTreino',
      component: CadastroTreino
    },
    {
      path: '/visualizacao-treinos/:id',
      name: 'VisualizacaoTreinos',
      component: VisualizacaoTreinos 
    },
  
  
  ]
})

export default router
