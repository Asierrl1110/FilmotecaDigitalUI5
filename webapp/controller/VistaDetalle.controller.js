sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("filmotecadigital.controller.VistaDetalle", {
        onInit() {
            var router = sap.ui.core.UIComponent.getRouterFor(this);
            router.attachRoutePatternMatched(this._handleRouteMatched, this);
        },
        _handleRouteMatched : function(oEvent){
            // Obtenemos los parámetros pasados a la vista
            var oParameters = oEvent.getParameter("arguments");
            // Obtenemos el indice pasado por parámetro
            // Lo almacenamos en un parámetro del controlador
            this._iIndex = oParameters.index;

            // Obtenemos la película correspondiente al indice pasado por parámetro
            var oPelicula = this.getOwnerComponent().getModel("peliculas").getData()[this._iIndex];
            
            // Asignamos los valores de la pelicula seleccionado a los campos de la vista
            this.getView().byId("inpNombre").setValue(oPelicula.nombre);
            this.getView().byId("inpAnho").setValue(oPelicula.añoEstreno);
            this.getView().byId("inpDirector").setValue(oPelicula.director);
            this.getView().byId("inpPais").setValue(oPelicula.pais);
        },
        onEditar : function(){
            // Creamos un objeto con los datos actualizados de la película
            var oNewPelicula = {
                Nombre: this.getView().byId("inpNombre").getValue(),
                AnhoEstreno: this.getView().byId("inpAnho").getValue(),
                Director: this.getView().byId("inpDirector").getValue(),
                Pais: this.getView().byId("inpPais").getValue()
            }

            // Obtenemos el modelo global
            var aPeliculas = this.getOwnerComponent().getModel("peliculas").getData();
            // Actualizamos la pelicula
            aPeliculas[this._iIndex] = oNewPelicula;
            this.getOwnerComponent().getModel("peliculas").setData(aPeliculas);

            MessageBox.success("Pelicula actualizada correctamente");
        }
    });
});