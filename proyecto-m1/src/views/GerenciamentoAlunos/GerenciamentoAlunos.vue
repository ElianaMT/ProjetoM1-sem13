<template>
    <v-form>
        <v-container>

            <v-row no-gutters class="flex-wrap bg-surface-variant encabezado">
                <v-col cols="1" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-4">
                        <v-icon color="orange">mdi-cart</v-icon>
                    </v-sheet>
                </v-col>

                <v-col cols="9" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-4">
                        Alunos
                    </v-sheet>
                </v-col>

                <v-col cols="2" class="flex-grow-0 flex-shrink-0">
                    <v-sheet class="ma-2 pa-2">
                        <v-btn color="orange" class="m-2" block type="submit">
                            Novo
                        </v-btn>
                    </v-sheet>
                </v-col>

            </v-row>


            <v-row>
                <v-col cols="12" md="10">
                    <v-text-field type="text" label="Digite o nome do exercício" 
                        ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                    <v-btn color="orange" class="mt-2" block type="submit">
                        Buscar
                    </v-btn>

                </v-col>
            </v-row>
        </v-container>
    </v-form>

    <v-table>
        <thead>
            <tr>
                <th>Nome do Aluno</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for= "nomeExercicio in loadExercicios" :key="nomeExercicio.id" >
                <td>{{nomeExercicio.id}}</td>
                <td>{{nomeExercicio.description}}</td>
            </tr>
            
        </tbody>
    </v-table>

</template>

 
<script>

</script>

<style>
.title {
    padding-bottom: 25px;
    color: orange;
}

.encabezado {
    border-bottom: solid;
    border-color: orange;

}
</style>
