<template>
    <v-form @submit.prevent="handleSubmit" >
        <v-text-field placeholder="Cadastre novo exercício" v-model="exercises"></v-text-field>
        <v-btn type="submit">Cadastrar</v-btn>
    </v-form>
</template>

<script>
import *as yup from "yup"

export default{ 
    data(){ 
        return{ 
            exercises:"",
            
        }

    },
    methods:{ 
        async handleSubmit(){

            try {
                const schema= yup.object().shape({ 
                exercises: yup.string().required("O cadastro do exercício é obrigatorio")
            })
            schema.validateSync({ 
                exercises: this.exercises
               
            }, {abortEarly:false })
                
            } catch (error) {
                if(error instanceof yup.ValidationError){
                    alert(error)
                }
                
            }           
           
        }
    }
}

</script>