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



      <v-card>
    <v-toolbar
      color="orange-darken-2"
    >
      <v-toolbar-title>Treinos da Semana</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs
        v-model="tab"
        direction="horizontal"
        color="orange-darken-2"
      >
        <v-tab value="option-1">
          <v-icon start>
            mdi-run
          </v-icon>
          Segunda
        </v-tab>

        <v-tab value="option-2">
          <v-icon start>
            mdi-dumbbell
          </v-icon>
          Terca
        </v-tab>

        <v-tab value="option-3">
          <v-icon start>
            mdi-gymnastics
          </v-icon>
          Quarta
        </v-tab>

        <v-tab value="option-4">
          <v-icon start>
            mdi-bike
          </v-icon>
          Quinta
        </v-tab>

        <v-tab value="option-5">
          <v-icon start>
            mdi-arm-flex
          </v-icon>
          Sexta
        </v-tab>

        <v-tab value="option-6">
          <v-icon start>
            mdi-jump-rope
          </v-icon>
          Sabado
        </v-tab>

        <v-tab value="option-7">
          <v-icon start>
            mdi-weight-lifter
          </v-icon>
          Domingo
        </v-tab>

      </v-tabs>
    </div>

    <br>

      <v-window v-model="tab">

        <v-window-item value="option-1">
          <v-card flat>
            <v-card-text>  
                <table >
                <tr v-for="treino in dadosSegunda" :key="treino.id">               
                    <td> {{treino.exercise_description}} </td>
                    <td> | {{treino.weight }} KG </td>
                    <td> | {{treino.repetitions}} repetições </td>
                    <td> | {{treino.break_time }} min de pausa</td>
                </tr> 
              </table>
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="option-2">
          <v-card flat>
            <v-card-text>
              <table>
                <tr v-for="treino in dadosTerca" :key="treino.id">                     
                    <td> {{treino.exercise_description}} </td>
                    <td> | {{treino.weight }} KG </td>
                    <td> | {{treino.repetitions}} repetições </td>
                    <td> | {{treino.break_time }} min de pausa</td>
                </tr> 
              </table>   
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="option-3">
          <v-card flat>
            <v-card-text>
             <v-table  >
              <tr v-for="treino in dadosQuarta" :key="treino.id">                     
                    <td class="text-left"> {{treino.exercise_description}} </td>
                    <td> | {{treino.weight }} KG </td>
                    <td> | {{treino.repetitions}} repetições </td>
                    <td> | {{treino.break_time }} min de pausa</td>
                </tr> 
             </v-table>
            </v-card-text>
          </v-card>
        </v-window-item>

         <v-window-item value="option-4">
          <v-card flat>
            <v-card-text>
             <v-table>
              <tr v-for="treino in dadosQuinta" :key="treino.id">                     
                    <td> {{treino.exercise_description}} </td>
                    <td> | {{treino.weight }} KG </td>
                    <td> | {{treino.repetitions}} repetições </td>
                    <td> | {{treino.break_time }} min de pausa</td>
                </tr> 
             </v-table>
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="option-5">
          <v-card flat>
            <v-card-text>
             <v-table>
              <tr v-for="treino in dadosSexta" :key="treino.id">                     
                    <td> {{treino.exercise_description}} </td>
                    <td> | {{treino.weight }} KG </td>
                    <td> | {{treino.repetitions}} repetições </td>
                    <td> | {{treino.break_time }} min de pausa</td>
                </tr> 
             </v-table>
            </v-card-text>
          </v-card>
        </v-window-item>


        <v-window-item value="option-6">
          <v-card flat>
            <v-card-text>
             <v-table>
              <tr v-for="treino in dadosSabado" :key="treino.id">                     
                    <td> {{treino.exercise_description}} </td>
                    <td> | {{treino.weight }} KG </td>
                    <td> | {{treino.repetitions}} repetições </td>
                    <td> | {{treino.break_time }} min de pausa</td>
                </tr> 
             </v-table>
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="option-7">
          <v-card flat>
            <v-card-text>
             <v-table>
              <tr v-for="treino in dadosDomingo" :key="treino.id">                     
                    <td> {{treino.exercise_description}} </td>
                    <td> | {{treino.weight }} KG </td>
                    <td> | {{treino.repetitions}} repetições </td>
                    <td> | {{treino.break_time }} min de pausa</td>
                </tr> 
             </v-table>
            </v-card-text>
          </v-card>
        </v-window-item>
        


      </v-window>
    
  </v-card>



  


      <v-form ref="form" @submit.prevent="handleSubmit" >
       
          <v-table>
            <thead>
                <tr> 
                  <th> 
                    dados domingo
                    {{this.$route.params.id }}                                        
                    
                    </th>
                </tr>
            </thead>
           
            <tbody>              
              <tr v-for="treino in dadosDomingo" :key="treino.id">               
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
      
      tab: 'option-1',   

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
      // Genera um dado novo(dias) a partir de outro(treino)
      computed:{
        dadosSegunda(){
          return this.treinoLista.filter(item => item.day === "segunda")
        },
        dadosTerca(){
          return this.treinoLista.filter(item => item.day === "terca")
        },
        dadosQuarta(){
          return this.treinoLista.filter(item => item.day === "quarta")
        },
        dadosQuinta(){
          return this.treinoLista.filter(item => item.day === "quinta")
        },
        dadosSexta(){
          return this.treinoLista.filter(item => item.day === "sexta")
        },
        dadosSabado(){
          return this.treinoLista.filter(item => item.day === "sabado")
        },
        dadosDomingo(){
          return this.treinoLista.filter(item => item.day === "domingo")
        }


      },      

      //Recibe info. desde cadastro do treinos   
       mounted() {  
        axios({ 
        url: `http://localhost:3000/workouts?student_id=${this.$route.params.id}`,
        method: "GET"
      })
      // Todos os dados do treinos
        .then((response) => {
        this.treinoLista = response.data.workouts

       })
      }
    }
  
</script>

<style>
.encabezado {
  border-bottom: solid;
  border-color: orange;
}
</style>