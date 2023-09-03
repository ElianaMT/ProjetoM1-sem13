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
                    Alunos
                </v-sheet>
            </v-col>
        </v-row>
        <br>


        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="1200" rounded="lg">

            <v-form>

                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field type="text" label="Nome completo"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field type="text" label="Email"></v-text-field>
                    </v-col>
                </v-row>

                <v-row class="box-1">
                    <v-col cols="12" md="6">
                        <v-text-field type="text" label="Contato"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field type="text" label="Data de nascimiento"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field type="text" label="Cep"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field type="text" label="Logaduro"></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="2">
                        <v-text-field type="text" label="Estado"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3">
                        <v-text-field type="text" label="Barrio"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-text-field type="text" label="Cidade"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field type="text" label="Complemento"></v-text-field>
                    </v-col>
                </v-row>

                <v-row class="d-flex flex-row-reverse">
                    <v-col cols="12" md="2">
                        <v-btn color="orange" class="mt-2" block type="submit">
                            Buscar
                        </v-btn>

                    </v-col>
                </v-row>

            </v-form>
        </v-card>


    </v-container>
</template>

<script>
</script>

<style>
.encabezado {
    border-bottom: solid;
    border-color: orange;
}

.box-1 {
    border-bottom: solid;
    border-color: orange;

}
</style>