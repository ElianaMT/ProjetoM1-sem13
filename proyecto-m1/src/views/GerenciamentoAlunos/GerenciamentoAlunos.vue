<template>
    
        <v-container>
            <v-row no-gutters class="flex-wrap encabezado">
                <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-4">
                       <v-icon color="orange" size="large" class="text-h3">mdi-account-multiple</v-icon> 
                    </v-sheet>
                </v-col>

                <v-col cols="9" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-3 pa-4">
                       <p class="text-h4">Alunos</p>
                    </v-sheet>
                </v-col>

                <v-col cols="2" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-3 pa-2">
                        <v-btn color="orange-darken-2" size="large" class="m-2" block type="submit"
                            to="/cadastro-novo-aluno">
                            Novo
                        </v-btn>
                    </v-sheet>
                </v-col>
            </v-row>
            
            <br>

            <v-form>
            <v-row>
                <v-col cols="12" md="10">
                    <v-text-field 
                    v-model="search"
                    type="text" 
                    label="Digite o nome">                    
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                    <v-btn                                       
                    color="orange-darken-2" 
                    size="large" class="mt-2" 
                    block 
                    @click="filtrarNome">
                        Buscar
                    </v-btn>
                </v-col>
            </v-row>
          </v-form>
        </v-container>
    

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="1200" rounded="lg">
        <v-table>
            <thead>
                <tr class="text-h5 text-center">
                    <th><p class="text-center">Nº</p></th>
                    <th><p class="text-center">Nome do Aluno</p></th>
                    <th><p class="text-center">Ações</p></th>                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="Aluno in AlunosFiltrados" :key="Aluno.id">
                    <td><p class="text-center text-body-1">{{ Aluno.id }}</p></td>
                    <td><p class="text-center text-body-1">{{ Aluno.name }}</p></td>
                    <td>
                        <v-container  >
                            <v-row class="d-flex flex-row-reverse">    
                                <v-col cols="12" md="2"></v-col>

                                <v-col cols="12" md="3">
                                    <v-btn 
                                    color="orange-accent-1" 
                                    class="mt-auto" 
                                    block 
                                    type="submit"
                                    @click="() => redirect(Aluno.id)">
                                        Ver
                                    </v-btn>
                                </v-col>

                                <v-col cols="12" md="5">
                                    <v-btn 
                                    color="orange-accent-1" 
                                    class="mt-auto" 
                                    block 
                                    type="submit"
                                    @click="() => redirectTreino(Aluno.id)">
                                    Montar treino
                                    </v-btn>
                                </v-col>                               
                                                                
                            </v-row>
                        </v-container>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

 
<script>
import axios from "axios"

export default {

    data() {
        return {
            Alunos: [],
            AlunosFiltrados: [],
            search: ""
        }
    },
    // Trae o listagem do alunos
    mounted() {
        this.loadAlunos()
    },

    methods: {
        //Filter
        filtrarNome() {
            this.AlunosFiltrados = this.Alunos.filter((aluno) => {
                return aluno.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        // Trae o listagem do alunos
        loadAlunos() {
            axios({
                url: "http://localhost:3000/students",
                method: "get"
            })
                .then((response) => {
                    this.Alunos = response.data.students
                    //Listagem para filter
                    this.AlunosFiltrados = response.data.students
                })

                .catch(() => {
                    alert("Nao foi possivel recuperar os nomes dos alunos")
                })

        },

        // Redirecciona id a visualizacao-treinos
        redirect(id) {
            this.$router.push(`/visualizacao-treinos/${id}`)
        },

        // Redirecciona id a cadastro-treino
        redirectTreino(id) {
            this.$router.push(`/cadastro-treino/${id}`)

        }
    }
}

</script>

<style>
.encabezado {
    border-bottom: solid;
    border-color: orange;

}</style>
