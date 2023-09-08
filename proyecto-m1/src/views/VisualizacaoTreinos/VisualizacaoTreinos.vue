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
          Treinos- 
           
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
                                <v-btn color="orange" class="mt-auto" block type="submit" >
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
    </v-card>


  </v-container>
</template>

<script>
import axios from "axios"

export default{ 
  data() {
    return {
      treino:{
        workout_id: "",
        student_id:"",
        day_of_week:"",
      },
      usuariosLista : []
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