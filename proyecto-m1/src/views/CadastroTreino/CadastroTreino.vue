<template>
  <v-container>
      <v-row no-gutters class="flex-wrap encabezado">
          <v-col cols="1" class="flex-grow-0 flex-shrink-0">
              <v-sheet class="ma-2 pa-4">
                  <v-icon color="orange">mdi-cart</v-icon>
              </v-sheet>
          </v-col>

          <v-col cols="11" class="flex-grow-0 flex-shrink-0">
              <v-sheet class="ma-2 pa-4">
                  Treino
              </v-sheet>
          </v-col>
      </v-row>
      <br>


      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="1200" rounded="lg">

          <v-form>

              <v-row>
                  <v-col cols="12" md="12">
                      <v-select type="text" label="Qual exercício"
                      :items="exercicio_id" 
                      
                      ></v-select>
                  </v-col>


              </v-row>

              <v-row>
                  <v-col cols="12" md="5">
                      <v-text-field type="number" label="Repetições"
                      v-model="treino.repetitions"
                          


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
                      <v-select type="text" label="Dia da semana"
                      v-model="model"
                      :items="items"
                      
                      ></v-select>
                  </v-col>

              </v-row>

              <v-row>

                  <v-textarea label="Observações para esse treino"></v-textarea>

              </v-row>

              <v-row class="d-flex flex-row-reverse">
                  <v-col cols="12" md="2">
                      <v-btn color="orange" class="mt-2" block type="submit">
                          Cadastrar
                      </v-btn>
                  </v-col>

                  <v-col cols="12" md="2">
                      <v-btn color="orange" class="mt-2" block type="submit">
                          Cancelar
                      </v-btn>
                  </v-col>
              </v-row>

          </v-form>
      </v-card>


  </v-container>
</template>

<script>
export default { 
  data() {
    return {
      treino: { 
        exercicio_id: [ ],
        repetitions:"",
        weight:"",
        break_time:"",
        observations:"",
        day:""
      },
      items: ["Segunda-feira", "Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira", "Sábado" ,"Domingo"],
      model: "Domingo"
    }
  },
}

</script>

<style>
.encabezado {
  border-bottom: solid;
  border-color: orange;
}

</style>