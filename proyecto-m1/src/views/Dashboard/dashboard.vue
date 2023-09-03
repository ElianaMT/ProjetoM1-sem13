<template>
    <div class="title">
        <h1>Bem-vindo, nome aluno</h1>
        {{dashboardInfo }}
      
        
    </div>

    <div class="container">

        <v-card class="mx-auto" width="500" prepend-icon="mdi-home">
            <template v-slot:title>
                10 Alunos
            </template>


            <v-card-actions>
                <v-btn variant="outlined" color="orange">
                    Adicionar
                </v-btn>
            </v-card-actions>


        </v-card>

        <v-card class="mx-auto" width="500" prepend-icon="mdi-home">
            <template v-slot:title>
                10 Alunos
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
            dashboardInfo:{ }
            
        }
    },

    mounted() {
        axios.get("http://localhost:3000/dashboard")
        .then(res => this.dashboardInfo= res.data)
        .catch(error => console.log(error))

       
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