<template>
    <v-form @submit.prevent="handleSubmit" >
        <v-text-field placeholder="Cadastre novo exercício" v-model="exercises"></v-text-field>
        <v-btn type="submit">Cadastrar</v-btn>
    </v-form>
</template>

<script>
export default{ 
    data(){ 
        return{ 
            exercises:""
        }

    },
    methods:{ 
        async handleSubmit(){
           alert("tou aqui")
        }
    }
}

</script>