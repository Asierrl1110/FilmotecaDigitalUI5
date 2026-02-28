sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("filmotecadigital.controller.VistaCreacionPeli", {
        onInit() {
        },
        onCreatePelicula: function () {
            // Obtenemos los valores de los inputs
            let nombre = this.getView().byId("inputNombre").getValue().trim();
            let anho = this.getView().byId("dpAnho").getValue().trim();
            let director = this.getView().byId("inputDirector").getValue().trim();
            let pais = this.getView().byId("inputPais").getValue().trim();

            // Validar campos obligatorios
            if (!nombre || !anho || !director || !pais) {
                MessageBox.error("Todos los campos son obligatorios");
            } else {
                // Obtenemos los datos del modelo
                var oPeliculasModel = this.getOwnerComponent().getModel("peliculas");
                var aPeliculas = oPeliculasModel.getData();
                // Añadimos a los datos del modelo la nueva pelicula
                aPeliculas.push({
                    nombre: nombre,
                    añoEstreno: anho,
                    director: director,
                    pais: pais
                });
                // Actualizamos los datos
                oPeliculasModel.setData(aPeliculas);
                MessageBox.success("Pelicula añadida");
            }


        }
    });
});