<template>

     <v-form v-model="valid">
    <v-container>
    <div class="title">
      <h1>Exercicios</h1>
    </div>

      <v-row>
        <v-col
          cols="12"
          md="10"
        >
          <v-text-field
            
            label="Digite o nome do exercício"
            required
            hide-details
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
</script>

<style>
.title{ 
   padding-bottom: 25px;
   color:orange;  
}
</style>
