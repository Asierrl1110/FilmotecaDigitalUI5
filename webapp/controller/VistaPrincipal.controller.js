sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("filmotecadigital.controller.VistaPrincipal", {
        onInit() {
        },
        onCreatePelicula: function () {
            var router = sap.ui.core.UIComponent.getRouterFor(this);
            router.navTo("RouteVistaCreacionPeli");
        },
        onDeletePelicula: function (oEvent) {
            // Función para eliminar una película
            let eliminarPelicula = () => {
                // Obtener el contexto de la fila donde se hizo clic
                var oButton = oEvent.getSource();
                var oContext = oButton.getBindingContext("peliculas");

                // Obtener el indice de ese registro en el modelo
                var sPath = oContext.getPath(); // Ej: "/0", "/1", "/2", ...
                var iIndex = parseInt(sPath.split("/")[1]); // convierte "/0" -> 0

                // Obtener el modelo y borrar el registro
                var oModel = this.getOwnerComponent().getModel("peliculas");
                var aPeliculas = oModel.getData();
                aPeliculas.splice(iIndex, 1);
                oModel.setData(aPeliculas);

                MessageBox.alert("Pelicula eliminada correctamente");
            }

            // Mostrar MessageBox para confirmar la eliminación de la pelicula
            MessageBox.confirm("¿Estas seguro de que quieres eliminar la pelicula?", {
                title: "Confirmación",
                onClose: function (oAction) {
                    if (oAction === sap.m.MessageBox.Action.OK) {
                        eliminarPelicula();
                    }
                }
            });
        },
        onFilaSelect: function (oEvent) {
            var oItem = oEvent.getParameter("listItem"); // fila clicada
            var oContext = oItem.getBindingContext("peliculas");
            // Obtener el indice
            var sPath = oContext.getPath(); // Ej: "/0", "/1", "/2", ...
            var iIndex = parseInt(sPath.split("/")[1]); // convierte "/0" -> 0

            var router = sap.ui.core.UIComponent.getRouterFor(this);
            router.navTo("RouteVistaDetalle", {
                index: iIndex
            });
        }
    });
});