<template>
    <v-container>
        <v-row no-gutters class="flex-wrap encabezado">
            <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                <v-sheet class="ma-2 pa-4">
                    <v-icon color="orange">mdi-cart</v-icon>
                </v-sheet>
            </v-col>

            <v-col cols="11" class="flex-grow-0 flex-shrink-0">
                <v-sheet class="ma-2 pa-4">
                    Alunos
                </v-sheet>
            </v-col>
        </v-row>
        <br>


        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="1200" rounded="lg">

            <v-form ref="form" @submit.prevent="handleSubmit">
                {{ novoAlunoInfo.cep}}
                
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field type="text" label="Nome completo" v-model="alunoNovo.fullname"
                            :rules="[value => !!value || 'O nome completo é obrigatorio']"></v-text-field>

                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field type="email" label="Email" v-model="alunoNovo.email"></v-text-field>
                    </v-col>
                </v-row>

                <v-row class="box-1">
                    <v-col cols="12" md="6">
                        <v-text-field type="text" label="Contato" v-model="alunoNovo.contact"
                            :rules="[value => !!value || 'O contato é obrigatorio']"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field type="date" label="Data de nascimiento" v-model="alunoNovo.date_birth"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="5">
                        <v-text-field type="text" label="Cep" v-model="alunoNovo.cep"
                            :rules="[value => !!value || 'O CEP é obrigatorio']"> {{ novoAlunoInfo.cep}}</v-text-field>
                    </v-col>

                    <v-col cols="12" md="5">
                        <v-text-field type="text" label="Logradouro" v-model="alunoNovo.street"
                            :rules="[value => !!value || 'O logradouro é obrigatorio']"> {{ novoAlunoInfo.logradouro}}</v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-text-field type="text" label="Numero" v-model="alunoNovo.number"
                            :rules="[value => !!value || 'O numero é obrigatorio']">{{ novoAlunoInfo.siafi}}</v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="2">
                        <v-text-field type="text" label="Estado" v-model="alunoNovo.province"
                            :rules="[value => !!value || 'O estado é obrigatorio']">{{novoAlunoInfo.uf}}</v-text-field>
                    </v-col>

                    <v-col cols="12" md="3">
                        <v-text-field type="text" label="Bairro" v-model="alunoNovo.neighborhood"
                            :rules="[value => !!value || 'O bairro é obrigatorio']">{{novoAlunoInfo.bairro}}</v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-text-field type="text" label="Cidade" v-model="alunoNovo.city"
                            :rules="[value => !!value || 'A cidade é obrigatoria']">{{novoAlunoInfo.localidade}}</v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field type="text" label="Complemento" v-model="alunoNovo.complement"></v-text-field>
                    </v-col>
                </v-row>

                <v-row class="d-flex flex-row-reverse">
                    <v-col cols="12" md="2">
                        <v-btn color="orange" class="mt-2" block type="submit">
                            Cadastrar
                        </v-btn>

                    </v-col>
                </v-row>

            </v-form>
        </v-card>


    </v-container>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {

            alunoNovo: {
                fullname: "",
                email: "",
                contact: "",
                date_birth: "",
                cep: "",
                street: "",
                number: "",
                neighborhood: "",
                city: "",
                province: "",
                complement: ""
            },
            novoAlunoInfo:{}

        }
    },
    methods: {
        async handleSubmit() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                alert("Preencha os dados obrigatorios")
                return
            }

            try {
                const result = await axios.post("http://localhost:3000/students", this.alunoNovo)

                if (result === 200) {
                    localStorage.setItem("novoAluno-info", JSON.stringify(result.data))
                    const result = confirm("Aluno cadastrado con sucesso!")
                    this.$refs.form.reset()
                }

            } catch (error) {
                alert("Falha ao concluir cadastro")

            }


        }
    },
    mounted() {
    axios.get("https://viacep.com.br/ws/01001000/json/")
    .then(res => this.novoAlunoInfo = res.data)
    .catch(error => console.log(error))

    this.anovoAlunoInfo = JSON.parse(localStorage.getItem("novoAluno-info")) || null
}

}


</script>

<style>
.encabezado {
    border-bottom: solid;
    border-color: orange;
}

.box-1 {
    border-bottom: solid;
    border-color: orange;

}
</style>