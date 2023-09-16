
<template>
    <v-container>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="1200" rounded="lg">
        <h1>Bem-vindo, {{userInfo.name }}</h1>

        <div class="container">
            <v-card class="mx-auto pa-12 pb-8" elevation="8" width="500" rounded="lg">
                <div class="formato">                
                <div>
                    <div>
                       <h2> {{dashboardInfo.amount_students }} Alunos</h2>
                    </div>
                    <br>
                    <div>
                        <v-btn variant="outlined" color="orange-accent-3" size="large" to="/cadastro-novo-aluno">
                        Adicionar
                        </v-btn> 
                    </div>
                </div> 
                <div>
                    <h1><v-icon color="orange" size="x-large">mdi-account-multiple</v-icon></h1>
                </div>
            </div>
        </v-card>
        
        <v-card class="mx-auto pa-12 pb-8" elevation="8" width="500" rounded="lg">
                <div class="formato">                
                <div>
                    <div>
                       <h2> {{dashboardInfo.amount_exercises}} Exercicios</h2>
                    </div>
                    <br>
                    <div>
                        <v-btn variant="outlined" color="orange-accent-3" size="large" to="/gerenciamento-exercicios">
                        Adicionar
                        </v-btn>
                    </div>
                </div> 
                <div>
                    <h1><v-icon color="orange" size="x-large">mdi-arm-flex</v-icon></h1>
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

