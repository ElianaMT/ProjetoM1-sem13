<template>
    <v-form ref="form" @submit.prevent="handleSubmit"  >
        <v-container>

<v-row no-gutters class="flex-wrap encabezado">
    <v-col cols="1" class="flex-grow-0 flex-shrink-0">
        <v-sheet class="ma-2 pa-4">
            <v-icon color="orange" size="large" class="text-h3"> mdi-arm-flex </v-icon>
        </v-sheet>
    </v-col>

    <v-col cols="11" class="flex-grow-0 flex-shrink-0">
        <v-sheet class="ma-2 pa-4">
            <p class="text-h4">Exercícios</p>           
        </v-sheet>
    </v-col>
</v-row>

<v-row>
    <v-col cols="12" md="10">
        <v-text-field type="text" label="Digite o nome do exercício" v-model="exercicio.exercises"
            :rules="[value => !!value || 'O cadastro do exercício é obrigatorio']"></v-text-field>
    </v-col>

    <v-col cols="12" md="2">
        <v-btn color="orange-darken-2" size="large" class="mt-2" block type="submit">
            Cadastrar
        </v-btn>

    </v-col>
</v-row>
</v-container>

    </v-form>
    
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="1200" rounded="lg">

    <v-table>
        <thead>
            <tr class="text-h5 text-center">
                <th><p class="text-center">Nº</p></th>
                <th><p class="text-center">Nome do Exercício</p></th>                
            </tr>
        </thead>
        <tbody>
            <tr v-for= "nomeExercicio in loadExercicios" :key="nomeExercicio.id">
                <td><p class="text-center text-body-1">{{nomeExercicio.id}}</p></td>
                <td><p class="text-center text-body-1">{{nomeExercicio.description}}</p></td>                
            </tr>
            
        </tbody>
    </v-table>
</v-card>

</template>

<script>
import axios from "axios"

export default { 
    data() { 
      return{ 
        loadExercicios:[],
         exercicio:{ 
            exercises:"",  
         }  
        }     
   },

   mounted() {    
    axios.get("http://localhost:3000/exercises")
    .then((response) =>{ this.loadExercicios = response.data}  
    
    ) 
    
    .catch(()=>{
        alert("Nao foi possivel recuperar os exercícios")
    })  
      
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
               alert("Exercicio cadastrado com sucesso")
               this.$refs.form.reset()  
               
            }
         } catch (error) {
            alert(error.response.data.error)
            
         }
                
      }
   }  

}
  
 </script>





