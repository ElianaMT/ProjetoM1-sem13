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
                  Treino- {{this.$route.params.id }} 
              </v-sheet>
          </v-col>
      </v-row>
      <br>


      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="1200" rounded="lg">
        {{ treino}}

          <v-form ref="form" @submit.prevent="handleSubmit" >
            
              <v-row>
                
                  <v-col cols="12" md="12">
                      <v-select type="text" 
                      label="Selecione o exercício"
                      :items="exerciciosLista"
                      v-model= "treino.exercise_id"  
                      item-title="description"     
                      item-value="id"               
                      ></v-select>
                  </v-col>

              </v-row>

              <v-row>
                  <v-col cols="12" md="5">
                      <v-text-field type="number" label="Repetições"
                      v-model="treino.repetitions"
                      :rules="[value => !!value || 'A quantidade é obrigatoria',
                      value => value>0 || 'Nao minimo uma repeticao'
                      ]"   
                      ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="3">
                      <v-text-field type="number" label="Quilos" 
                      v-model="treino.weight"
                      :rules="[value => !!value || 'Os quilos sao obrigatorios'
                      ]"        
                      ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                      <v-text-field type="time" label="Pausa"
                      v-model="treino.break_time"
                      :rules="[value => !!value || 'A pausa é obrigatoria'
                      ]" 
                      ></v-text-field>
                  </v-col>
              </v-row>

              <v-row>
                  <v-col cols="12" md="12">
                      <v-select type="text" label="Selecione o dia"
                      v-model="treino.day"
                      :items="items"
                      
                      ></v-select>
                  </v-col>

              </v-row>

              <v-row>

                  <v-textarea label="Observações para esse treino"></v-textarea>

              </v-row>

              <v-row class="d-flex flex-row-reverse">
                  <v-col cols="12" md="2">
                      <v-btn color="orange-darken-2" size="large" class="mt-2" block type="submit" >
                          Cadastrar
                      </v-btn>
                  </v-col>

                  <v-col cols="12" md="2">
                      <v-btn color="orange-accent-2" size="large" class="mt-2" block type="submit">
                          Cancelar
                      </v-btn>
                  </v-col>
              </v-row>

          </v-form>
      </v-card>


  </v-container>
</template>

<script>
import axios from "axios"

export default { 
  data() {
    return {
      treino: { 
        student_id:0,
        exercise_id: 0,
        repetitions:0,
        weight:0,
        break_time:"",
        observations:"",
        day:"segunda"
      },
      items: [
        {
        title:"Segunda-feira",
        value: "segunda"
        },
        {
        title:"Terça-feira",
        value: "terca"
        },
        {
        title:"Quarta-feira",
        value: "quarta"
        },
        {
        title:"Quinta-feira",
        value: "quinta"
        },
        {
        title:"Sexta-feira",
        value: "sexta"
        },
        {
        title:"Sábado",
        value: "sabado"
        },
        {
        title:"Domingo",
        value: "domingo"
        }
      ] ,

      exerciciosLista:[],
      estudiantesLista:[],
      workoutsLista:[]

    }
  },
 methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate()
      if (!valid) {
        alert("Preencha os dados obrigatorios")
        return
      }
      try {
        const result = await axios.post("http://localhost:3000/workouts", this.treino)
        if (result.status === 201) {
          localStorage.setItem("treino-info", JSON.stringify(result.data))
          alert("Cadastro de treino com sucesso")

        }
      } catch (error) {
        alert(error.message)

      }

    }
  
  },
  //Para el select
  mounted() {
    axios.get("http://localhost:3000/exercises")
    .then(res => this.exerciciosLista = res.data),

    // Para el nombre del estudiante
    axios.get("http://localhost:3000/students")
    .then(res => this.estudiantesLista = res.data)

    // Para la lista de los entrenamientos-ojo verificar si funciona
    axios.get("http://localhost:3000/workouts")
    .then(res => this.workoutsLista = res.data)
  },

 
}

</script>

<style>
.encabezado {
  border-bottom: solid;
  border-color: orange;
}

</style>