<template>
   <div>
     
     <v-card
       class="mx-auto pa-12 pb-8"
       elevation="8"
       max-width="448"
       rounded="lg"
     >

     <v-img
       class="mx-auto my-auto"
       max-width="228"
       src="../src/views/Login/Logo.png"
     ></v-img>


       <div class="text-subtitle-1 text-medium-emphasis">Email</div>
 
       <v-text-field
         density="compact"
         placeholder="Email"
         prepend-inner-icon="mdi-email-outline"
         variant="outlined"
         v-model="sessions.email"
         :rules="[value => !!value || 'O email é obrigatorio']"
         type="email"


       ></v-text-field>
 
       <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
         Senha
 
       </div>
 
       <v-text-field
         :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
         :type="visible ? 'text' : 'password'"
         density="compact"
         placeholder="Ingrese a senha"
         prepend-inner-icon="mdi-lock-outline"
         variant="outlined"
         @click:append-inner="visible = !visible"
         v-model="sessions.password"
       :rules="[ value => !!value || 'A senha é obrigatoria' ]"   
      

       ></v-text-field>
 
       <v-card
         class="mb-12"
         color="surface-variant"
         variant="tonal"
       >
                 
       </v-card>
 
       <v-btn
         block
         class="mb-8"
         color="blue"
         size="large"
         variant="tonal"
       >
         Entrar
       </v-btn>
 
       <v-card-text class="text-center">
         <a
           class="text-blue text-decoration-none"
           href="#"
           rel="noopener noreferrer"
           target="_blank"
         >
           Ainda não tem conta? Cadrastre-se <v-icon icon="mdi-chevron-right"></v-icon>
         </a>
       </v-card-text>
     </v-card>
   </div>
 </template>
 
 <script>

  export default { 
   data() { 
      return{ 
         visible: false,
         sessions:{ 
            email:"",
            password:"",
                     },
               }
   },
  }

 </script>