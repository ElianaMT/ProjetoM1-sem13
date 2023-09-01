<template>
    {{usuario }}
           <v-card
       class="mx-auto pa-12 pb-8"
       elevation="8"
       max-width="448"
       rounded="lg"
     >
     <div class="title">
      <h1>Crie sua conta</h1>
   </div>
     

         <form>
            <v-text-field
            type="text"
            label="Nome Completo"
            v-model="usuario.nome"
           :rules="[value => !!value || 'O nome é obrigatorio']"

            ></v-text-field>

            <v-text-field
            type="text"
            label="E-mail"
            ></v-text-field>

            <v-text-field
            type="password"
            label="Senha"
            ></v-text-field>

            <v-text-field
            type="password"
            label=" Confirme a Senha"
            ></v-text-field>

            <v-select
            label="Tipo de plano"
            ></v-select>

      <div class="d-flex flex-column">

           <v-btn
           color="orange"
           class="mt-4"
           block
           type="submit"
         >
           Cadastrar
         </v-btn>

         <v-btn
           color="orange"
           class="mt-4"
           block
           >
           Voltar
         </v-btn>     
    </div>


         </form>     
           </v-card>

</template>

<script>
export default { 
   data() { 
      return{ 
         usuario:{ 
            nome:"",
            email:"",
            senha:"",
            confirmacaoSenha:"",
            plano:""
         },
         
      }
   },
  
 }
  
 </script>



<style>
.title{ 
   padding-bottom: 25px;
   color:orange
  
}
</style>