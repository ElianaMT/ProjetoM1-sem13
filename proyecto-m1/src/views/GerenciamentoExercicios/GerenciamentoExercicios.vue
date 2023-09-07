<template>
    <v-form ref="form" @submit.prevent="handleSubmit"  >
        <v-text-field placeholder="Cadastre novo exercício" v-model="exercicio.exercises"
        :rules="[value => !!value || 'O exercício é obrigatorio']"></v-text-field>
       
        <v-btn type="submit">Cadastrar</v-btn>
    </v-form>
</template>

<script>
import axios from "axios"

export default { 
   data() { 
      return{ 
         exercicio:{ 
            exercises:"",  
            
                   
         }  
        }     
   },
   methods: {
       async handleSubmit () {
         const {valid } = await this.$refs.form.validate()

         if(!valid){
            alert("Cadastre o exercicio")
            return
         }

         try {
            const result= await axios.post("http://localhost:3000/exercises",{description:this.exercicio.exercises} )
            if(result.status === 201){
               localStorage.setItem("exercicio_info", JSON.stringify(result.data))
               const result = confirm ("Exercicio cadastrado com sucesso")
               this.$refs.form.reset()  
               
            }
         } catch (error) {
            alert(error.response.data.error)
            
         }
                
      }
   }  

}
  
 </script>





