<template>
    <div class="title">
        <h1>Bem-vindo, {{userInfo.name}} </h1>        
    </div>

    <div class="container">

        <v-card class="mx-auto" width="500">
                       
            <template v-slot:title>  <v-icon color="orange" size="large">mdi-account-multiple</v-icon> 
                {{dashboardInfo.amount_students }} Alunos
            </template>


            <v-card-actions>
                <v-btn variant="outlined" color="orange" to="/gerenciamento-alunos">
                    Adicionar
                </v-btn>
            </v-card-actions>


        </v-card>

        <v-card class="mx-auto" width="500"  to="/gerenciamento-exercicios">

            <template v-slot:title>
                <v-icon color="orange" size="large">mdi-arm-flex</v-icon> 
                {{dashboardInfo.amount_exercises}} Exercicios
            </template>

            <v-card-actions>
                <v-btn variant="outlined" color="orange">
                    Adicionar
                </v-btn>
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
import axios from "axios"
export default{ 
    data() {
        return {
            dashboardInfo:{},
            userInfo:{}            
        }
    },
    
        mounted() {
        axios.get("http://localhost:3000/dashboard")
        .then(res => this.dashboardInfo= res.data)
        .catch(error => console.log(error))

        this.userInfo = JSON.parse( localStorage.getItem("user.info")) || null
    }       
}
</script>

<style>
.title {
    padding-top: 50px;
    padding-left: 11%;
}

.container {
    display: flex;
    padding-top: 30px;
    flex-wrap: wrap;
    gap: 40px;
}
</style>