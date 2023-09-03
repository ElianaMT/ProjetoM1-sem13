<template>
    
    
    <v-form >
    <v-container>
        
      <div class="title">
        <v-icon color="orange">mdi-cart</v-icon>        
      <h1 > Exercicios</h1>
      </div>

      <v-row>
        <v-col
          cols="12"
          md="10"
        >
          <v-text-field
            type="text"
            label="Digite o nome do exercício"
            v-model="cadastroExercicio.exercises"
           :rules="[value => !!value || 'O cadastro do exercício é obrigatorio']"

          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="2"
        >
        <v-btn
           color="orange"
           class="mt-2"
           block
           type="submit"
           
         >
           Cadastrar
         </v-btn>

        </v-col>
       </v-row>
     </v-container>
    </v-form>   
  

  </template>

 
  <script>
export default { 
   data() { 
      return{ 
        cadastroExercicio:{ 
            exercises:"",
            
         },
         
      }
   },
  
 }


  </script>

<style>
.title{ 
   padding-bottom: 25px;
   color:orange;  
}
</style>
