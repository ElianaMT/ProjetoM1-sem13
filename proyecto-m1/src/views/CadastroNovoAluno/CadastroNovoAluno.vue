
<template>
    <v-container>
        <v-row no-gutters class="flex-wrap encabezado">
            <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                <v-sheet class="ma-2 pa-4">
                    <v-icon color="orange" size="large">mdi-account-multiple</v-icon>
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

                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field 
                        type="text" 
                        label="Nome completo" 
                        v-model="alunoNovo.name"
                        :rules="[value => !!value || 'O nome completo é obrigatorio']">
                    </v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                       
                        <v-text-field
                        v-model="alunoNovo.email"
                        type="text"
                        label="E-mail">   
                    </v-text-field>
                    </v-col>
                </v-row>

                <v-row class="box-1">
                    <v-col cols="12" md="6">
                        <v-text-field 
                        type="text" 
                        label="Contato" 
                        v-model="alunoNovo.contact"
                        :rules="[value => !!value || 'O contato é obrigatorio']">
                    </v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        {{data }}
                        <VueDatePicker
                        placeholder="Data de nascimento"
                        v-model="alunoNovo.date_birth"
                        :max-date="new Date()"
                        locale="pt-BR"
                        cancelText="Cancelar"
                        selectText="Selecionar"
                        :format="format"
                        :enable-time-picker="false"
                        />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="5">
                        <v-text-field 
                        type="text" 
                        label="Cep" 
                        v-model="alunoNovo.cep" 
                        @blur="fazerRequisicao"
                        :rules="[value => !!value || 'O CEP é obrigatorio']">
                        </v-text-field>
                    </v-col>

                    <v-col cols="12" md="5">
                        <v-text-field 
                        type="text" 
                        label="Logradouro" 
                        v-model="alunoNovo.street"
                        :rules="[value => !!value || 'O endereco é obrigatorio']">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-text-field 
                        type="number" 
                        label="Numero" 
                        v-model="alunoNovo.number"
                        :rules="[value => !!value || 'O numero é obrigatorio']">
                        </v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="2">
                        <v-text-field 
                        type="text" 
                        label="Estado" 
                        v-model="alunoNovo.province"
                        :rules="[value => !!value || 'O estado é obrigatorio']">
                        </v-text-field>
                    </v-col>

                    <v-col cols="12" md="3">
                        <v-text-field 
                        type="text" 
                        label="Bairro" 
                        v-model="alunoNovo.neighborhood"
                        :rules="[value => !!value || 'O bairro é obrigatorio']">
                        </v-text-field>
                    </v-col>

                    <v-col cols="12" md="3">
                        <v-text-field 
                        type="text" 
                        label="Cidade" 
                        v-model="alunoNovo.city"
                        :rules="[value => !!value || 'A cidade é obrigatoria']">
                        </v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field 
                        type="text" 
                        label="Complemento" 
                        v-model="alunoNovo.complement">
                        </v-text-field>
                    </v-col>
                </v-row>

                <v-row class="d-flex flex-row-reverse">
                    <v-col cols="12" md="2">
                        <v-btn 
                        color="orange-darken-2" 
                        size="large" 
                        block 
                        class="mt-2" 
                        type="submit">
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
import moment from "moment"

export default {
    data() {
        return {            
            alunoNovo: {
                name: "",
                email: "",
                contact: "",
                date_birth: (new Date()),
                cep: "",
                street: "",
                number: "",
                neighborhood: "",
                city: "",
                province: "",
                complement: ""
            },
            novoAlunoInfo: []
        }
    },
   

 
    methods: {

        // Format Datepicker
        format(date){
            const day = date.getDate();
            const month = date.getMonth()+1;
            const year = date.getFullYear();

            return `${day}/${month}/${year} `;
        },

        // Requisicao de dados da api CEP, com fetch

        async fazerRequisicao() {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${this.alunoNovo.cep}/json/`)
                const data = await response.json()
                this.alunoNovo.street = data.logradouro
                this.alunoNovo.number = data.siafi
                this.alunoNovo.province = data.uf
                this.alunoNovo.neighborhood = data.bairro
                this.alunoNovo.city = data.localidade
                this.alunoNovo.complement = data.complemento

            } catch (error) {
                alert("Nao foi possivel concluir o cadastro")
            }
        },

        // Validacao de dados do formulario

        async handleSubmit() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                alert("Preencha os dados obrigatorios")
                return
            }

          
            try {
                const result = await axios.post("http://localhost:3000/students", this.alunoNovo)

                if (result.status === 200) {
                    localStorage.setItem("novoAluno_info", JSON.stringify(result.data))                    
                }

            } catch (error) {
                alert("Falha ao concluir cadastro de alunno")
            } 
            
            let dataFormatada = moment(this.data).format("DD/MM/YYYY")
            
            const result = confirm ("Aluno cadastrado com sucesso")
            this.$refs.form.reset()
        }
    },

}

</script>

<style>
.encabezado {
    border-bottom: solid;
    border-color: orange;
}
</style>
