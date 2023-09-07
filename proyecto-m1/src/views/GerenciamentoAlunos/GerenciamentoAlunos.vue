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
            <tr v-for= "nomeAluno in loadAlunos" :key="nomeAluno.id" >
                <td>{{nomeAluno.id}}</td>
                <td>{{nomeAluno.name}} </td>
            </tr>
            
        </tbody>
    </v-table>

</template>

 
<script>
export default { 
    data() { 
      return{ 
        loadAlunos:[]
         
         }  
        },   
   
   mounted() {    
    axios.get("http://localhost:3000/students")
    .then((response) =>{ this.loadAlunos = response.data}  
    
    ) 
    
    .catch(()=>{
        alert("Nao foi possivel recuperar os nomes dos alunos")
    })  
      
   },
}


</script>

<style>

.encabezado {
    border-bottom: solid;
    border-color: orange;

}
</style>
