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
     

         <v-form ref="form" @submit.prevent="handleSubmit" >
            <v-text-field
            type="text"
            label="Nome Completo"
            v-model="usuario.name"
           :rules="[value => !!value || 'O nome é obrigatorio']"
            ></v-text-field>

            <v-text-field
            type="email"
            label="E-mail"
            v-model="usuario.email"
            :rules="[value => !!value || 'O email é obrigatorio']"
            ></v-text-field>

            <v-text-field
            type="password"
            label="Senha"
            v-model="usuario.password"
            :rules="[value => !!value || 'A senha é obrigatoria',
            value => {
            if (value?.length >= 8 && value?.length <= 20) return true

            return 'A senha deve ter: mínimo 8 e máximo 20 caracteres'
            },
            ]"            
            ></v-text-field>

            <v-text-field
            type="password"
            label=" Confirme a Senha"
            v-model="usuario.confirmacaoSenha"
            :rules="[value => !!value || 'A confirmacao da senha é obrigatoria',
            value => {
            if (usuario.password != value) return 'A confirmação da senha não é válida'
            },
            ]"

            ></v-text-field>

            <v-select
            label="Tipo de plano"
            v-model="model"
           :items="items"
           :rules="[value => !!value || 'Selecione um item ']"
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


         </v-form>     
           </v-card>

</template>

<script>
import axios from "axios"

export default { 
   data() { 
      return{ 
         usuario:{ 
            name:"",
            email:"",
            password:"",
            confirmacaoSenha:"",
            type_plan:""
         },
         items:["Bronze", "Prata", "Ouro"],
         model: "Bronze"
      }
   },
   methods: {
       async handleSubmit () {
         const {valid } = await this.$refs.form.validate()

         if(!valid){
            alert("Preencha todos os dados")
            return
         }

         try {
            const result= await axios.post("http://localhost:3000/users", this.usuario)
            if(result.status === 201){
               localStorage.setItem("user-info", JSON.stringify(result.data))
               this.$router.push("/login")
            }
         } catch (error) {
            alert(error.message)
            
         }
         const result = confirm ("Usuario cadastrado com sucesso")
         this.$refs.form.reset()
         
      }
   }
  
 }
  
 </script>



<style>
.title{ 
   padding-bottom: 25px;
   color:orange
  
}
</style>