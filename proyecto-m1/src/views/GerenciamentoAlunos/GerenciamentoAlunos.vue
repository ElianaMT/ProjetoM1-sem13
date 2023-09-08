<template>
    <v-form>
        <v-container>

            <v-row no-gutters class="flex-wrap bg-surface-variant encabezado">
                <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-4">
                        <v-icon color="orange" size="large">mdi-account-multiple</v-icon>
                    </v-sheet>
                </v-col>

                <v-col cols="9" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-4">
                        Alunos
                    </v-sheet>
                </v-col>

                <v-col cols="2" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-2">
                        <v-btn color="orange" class="m-2" block type="submit" to="/cadastro-novo-aluno">
                            Novo
                        </v-btn>
                    </v-sheet>
                </v-col>

            </v-row>


            <v-row>
                <v-col cols="12" md="10">
                    <v-text-field type="text" label="Digite o nome do exercício"></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                    <v-btn color="orange" class="mt-2" block type="submit">
                        Buscar
                    </v-btn>

                </v-col>
            </v-row>
        </v-container>
    </v-form>


    <v-table>
        <thead>
            <tr>
                <th>Nº</th>
                <th>Nome do Aluno</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="Aluno in Alunos" :key="Aluno.id">
                <td>{{ Aluno.id }}</td>
                <td>{{ Aluno.name }} </td>
                <td>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="3">
                                <v-btn color="orange" class="mt-auto" block type="submit" to="/cadastro-treino">
                                    Montar treino
                                </v-btn>
                            </v-col>

                            <v-col cols="12" md="2">
                                <v-btn color="orange" class="mt-auto" block type="submit" @click="()=>redirect(Aluno.id)">
                                    Ver
                                </v-btn>

                            </v-col>
                        </v-row>
                    </v-container>
                </td>



            </tr>

        </tbody>
    </v-table>
</template>

 
<script>
import axios from "axios"

export default {
    data() {
        return {
            Alunos: []
        }
    },

    mounted() {
        this.loadAlunos()
    },

    methods: {
        loadAlunos() {
            axios({
                url: "http://localhost:3000/students",
                method: "get"
            })
                .then((response) => {
                    this.Alunos = response.data.students
                })

                .catch(() => {
                    alert("Nao foi possivel recuperar os nomes dos alunos")
                })

        },
        redirect(id){
            this.$router.push(`/gerenciamento-exercicios/${id}`)
        }
        
    }
}

</script>

<style>
.encabezado {
    border-bottom: solid;
    border-color: orange;

}
</style>
