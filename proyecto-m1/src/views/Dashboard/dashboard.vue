
<template>
    <v-container>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="1200" rounded="lg">        
        <p class="text-h4">Bem-vindo, {{userInfo.name }}</p>
        <div class="container">
            <v-card class="mx-auto pa-12 pb-8" elevation="8" width="500" rounded="lg">
                <div class="formato">                
                <div>
                    <div>                       
                       <p class="text-h5">{{dashboardInfo.amount_students }} Alunos</p>
                    </div>
                    <br>
                    <div>
                        <v-btn variant="outlined" color="orange-accent-3" size="large" to="/cadastro-novo-aluno">
                        Adicionar
                        </v-btn> 
                    </div>
                </div> 
                <div>
                    <v-icon color="orange" class="text-h1">mdi-account-multiple</v-icon>
                </div>
            </div>
        </v-card>
        
        <v-card class="mx-auto pa-12 pb-8" elevation="8" width="500" rounded="lg">
                <div class="formato">                
                <div>
                    <div>
                        <p class="text-h5">{{dashboardInfo.amount_exercises}} Exercicios</p>                       
                    </div>
                    <br>
                    <div>
                        <v-btn variant="outlined" color="orange-accent-3" size="large" to="/gerenciamento-exercicios">
                        Adicionar
                        </v-btn>
                    </div>
                </div> 
                <div>
                    <v-icon color="orange" class="text-h1">mdi-arm-flex</v-icon>
                </div>
            </div>
        </v-card>
    </div>
</v-card>
</v-container>
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
.formato {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.container {
    display: flex;
    padding-top: 30px;
    flex-wrap: wrap;
    gap: 40px;
}
</style>

