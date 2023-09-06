<template>
    <v-form ref="form" @submit.prevent="handleSubmit">
        <v-container>

            <v-row no-gutters class="flex-wrap bg-surface-variant encabezado">
                <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-4">
                        <v-icon color="orange" size="x-large">mdi-arm-flex</v-icon>

                    </v-sheet>
                </v-col>

                <v-col cols="11" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-4">
                        Exercícios
                    </v-sheet>
                </v-col>
            </v-row>


            <v-row>
                <v-col cols="12" md="10">
                    <v-text-field type="text" label="Digite o nome do exercício" v-model="exercises">
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                    <v-btn color="orange" class="mt-2" block type="submit">
                        Cadastrar
                    </v-btn>
                    <v-btn color="orange" class="mt-2" block @click="loadExercicios">
                        Cargar exercicios
                    </v-btn>

                </v-col>
            </v-row>
        </v-container>


    </v-form>


    <li v-for= "exercicio in exercicios" :key="exercicio.id">{{exercicio.nome }}</li>

    <v-table>
        <thead>
            <tr>
                <th>Nome</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td >nome productos</td>
            </tr>
        </tbody>
    </v-table>
</template>

 
<script>
import *as yup from "yup"
import { captureErrorYup } from "../../utils/captureErrorYup"
import axios from "axios"


export default {
    
    data() {
        return {
            exercises: "",
            errors: {},
            exercicios:[]
        }
    },

    methods: {
        handleSubmit() {
            try {
                const schema = yup.object().shape({
                    exercises: yup.string().requiered("O nome do exercicio é obrigatorio")
                })
                schema.validateSync({
                    exercises: this.exercises
                },
                    { abortEarly: false })

                const token = localStorage.getItem('usuario_token')

                axios({
                    url: "http://localhost:3000/exercises",
                    method: "POST",
                    data: {
                        exercises: this.exercises
                    },

                    headers: {
                        Authorization: `Bearen ${token}`
                    }
                })
                    // escenario positivo y negativo con token
                    .then(() => {
                        alert('Exercício cadastrado com sucesso')
                        this.exercises = ''


                    })
                    .catch(() => {
                        alert('Houve um erro ao realizar o cadastro')
                    })


                //erro con yup

            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    this.errors = captureErrorYup(error)
                }

            }
            // llamar a los exercicios cadastrados
        },
        loadExercicios() {
            const token = localStorage.getItem('usuario_token')
            axios({
                url: "http://localhost:3000/exercises",
                method: "GET",
                headers: {
                Authorization: `Bearen ${token}`
        }
            })
                .then((response) => {
                    this.exercicios= response.data.description
                    

                    alert('deu certo')
                })
                .catch(() => {
                    alert('deu ruim')
                })


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
