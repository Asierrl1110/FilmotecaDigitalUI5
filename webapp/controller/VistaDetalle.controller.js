sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
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
            var iIndex = oParameters.index;

            // Obtenemos la película correspondiente al indice pasado por parámetro
            var oPelicula = this.getOwnerComponent().getModel("peliculas").getData()[iIndex];
            
            // Asignamos los valores de la pelicula seleccionado a los campos de la vista
            this.getView().byId("inpNombre").setValue(oPelicula.nombre);
            this.getView().byId("inpAnho").setValue(oPelicula.añoEstreno);
            this.getView().byId("inpDirector").setValue(oPelicula.director);
            this.getView().byId("inpPais").setValue(oPelicula.pais);
        }
    });
});