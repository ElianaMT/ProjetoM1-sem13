<template>
  <v-container>
    <v-row no-gutters class="flex-wrap encabezado">
      <v-col cols="1" class="flex-grow-0 flex-shrink-0">
        <v-sheet class="ma-2 pa-4">
          <v-icon color="orange" size="large">mdi-account-multiple</v-icon>
        </v-sheet>
      </v-col>

      <v-col cols="11" class="flex-grow-0 flex-shrink-0">
        <v-sheet class="ma-2 pa-4">
          Treinos-  {{this.$route.params.id}}
        </v-sheet>
      </v-col>
    </v-row>
    <br>


    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="1200" rounded="lg">

      <v-form>

        <v-table>
        <thead>
            <tr>
                <th>
                  <v-container>
                        <v-row>
                            <v-col cols="12" md="2">
                                <v-btn color="orange" class="mt-auto" block type="submit" >
                                  Segunda
                                </v-btn>
                            </v-col>

                            <v-col cols="12" md="1">
                                <v-btn color="orange" class="mt-auto" block type="submit" >
                                  Terça
                                </v-btn>
                            </v-col>
                            <v-col cols="12" md="1">
                                <v-btn color="orange" class="mt-auto" block type="submit" >
                                  Quarta
                                </v-btn>
                            </v-col>

                            <v-col cols="12" md="2">
                                <v-btn color="orange" class="mt-auto" block type="submit" >
                                  Quinta
                                </v-btn>
                            </v-col>
                            <v-col cols="12" md="2">
                                <v-btn color="orange" class="mt-auto" block type="submit" >
                                  Sexta
                                </v-btn>
                            </v-col>
                            <v-col cols="12" md="2">
                                <v-btn color="orange" class="mt-auto" block type="submit" >
                                  Sábado
                                </v-btn>
                            </v-col>
                            <v-col cols="12" md="2">
                                <v-btn color="orange-darken-2" size="large" class="mt-2" block type="submit" >
                                  Domingo
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </th>                                
            </tr>
        </thead>

        <tbody>
            <tr >
                <td>lista lorem20</td>  
            </tr>

        </tbody>
    </v-table>  

      </v-form>


      <v-form ref="form" @submit.prevent="handleSubmit" >
        <v-table>
            <thead>
                <tr> 
                  <th> 
                    <v-btn color="orange" 
                    class="mt-auto" 
                    block 
                    type="submit" >
                    Hoje
                    </v-btn>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>  
                    <td>aqui el detalle de hoje</td>
                    
                </tr>            
            </tbody>
        </v-table>
          <v-table>
            <thead>
                <tr> 
                  <th> 
                    Todos los ejercicios
                    {{this.$route.params.id }} 
                    {{this.$route.params.weight}} 
                    {{this.$route.params.repetitions}} 
                    
                    
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="treino in treinoLista" :key="treino.id">  
                    <td>{{treino.id}} </td>
                    <td> {{treino.day }} </td>
                    <td> {{treino.exercise_description}} </td>
                    <td> {{treino.weight }} KG </td>
                    <td> {{treino.repetitions}} repetições </td>
                    <td> {{treino.break_time }} min de pausa</td>
                    
                </tr>   
                        
            </tbody>
        </v-table>
      </v-form>

    </v-card>


  </v-container>
</template>

<script>
import axios from "axios"

export default{ 
  data() {
    return {      
      treinosUsuario:{
        workout_id: "",
        student_id:"",
        day_of_week: ""
      },   
      
      treinoLista:[] 
    }
  },
  

  methods:{
       async handleSubmit (){
        const{valid} = await this.$refs.form.validate()

        if(!valid){
            alert("Marque um item")
            return
         }
         try {
          const result= await axios.post("http://localhost:3000/workouts/check",this.treinosUsuario)
            if(result.status === 200){
               localStorage.setItem("_info", JSON.stringify(result.data)) }              
          
         } catch (error) {          
          alert(error.response.data.error)          
         }
       }
       
      },  

      //probando el envio desde cadastro de treinos   
       mounted() {  
        axios.get(`http://localhost:3000/workouts?student_id=${this.$route.params.id}`)
        .then(res => this.treinoLista = res.data.workouts)
       },
}
  
</script>

<style>
.encabezado {
  border-bottom: solid;
  border-color: orange;
}
</style>