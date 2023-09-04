<template>
    <v-form>
        <v-container>

            <v-row no-gutters class="flex-wrap bg-surface-variant encabezado">
                <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-4">
                        <v-icon color="orange">mdi-cart</v-icon>
                    </v-sheet>
                </v-col>

                <v-col cols="11" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-4">
                        Exercícios
                    </v-sheet>
                </v-col>
            </v-row>


            <v-row>
                <v-col cols="12" md="10">
                    <v-text-field type="text" label="Digite o nome do exercício" v-model="cadastroExercicio.exercises"
                        :rules="[value => !!value || 'O cadastro do exercício é obrigatorio']"></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                    <v-btn color="orange" class="mt-2" block type="submit">
                        Cadastrar
                    </v-btn>

                </v-col>
            </v-row>
        </v-container>

        
    </v-form>

    <v-table>
    <thead>
      <tr>
        <th>Nome</th>        
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>exercicio</td>      
      </tr>
      
    </tbody>
  </v-table>

</template>

 
<script>
export default {
    data() {
        return {
            cadastroExercicio: {
                exercises: "",

            },

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
