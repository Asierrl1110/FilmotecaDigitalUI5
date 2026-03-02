sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("filmotecadigital.controller.VistaPrincipal", {
        onInit() {
            // Variable de ordenación por año (false-descendente, true-ascendente)
            this._bSortDescending = true;
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
        },
        onSearch: function (oEvent) {
            // Obtenemos el texto ingresado
            var sQuery = oEvent.getParameter("newValue");
            // Obtenemos la tabla de películas
            var oTable = this.getView().byId("tablaPeliculas");
            // Obtenemos el binding de la tabla
            var oBinding = oTable.getBinding("items");

            // Verificamos que el usuario haya introducido texto en el search field
            if (sQuery) {
                // Aplicamos filtros individuales al nombre, director y pais
                var aFilters = [
                    new sap.ui.model.Filter("nombre", sap.ui.model.FilterOperator.Contains, sQuery)
                    //new sap.ui.model.Filter("director", sap.ui.model.FilterOperator.Contains, sQuery),
                    //new sap.ui.model.Filter("pais", sap.ui.model.FilterOperator.Contains, sQuery)
                ];

                var oFilter = new sap.ui.model.Filter({
                    filters: aFilters,
                    and: false // Los filtros que combinan con OR
                });

                // Aplicamos el filtro
                oBinding.filter(oFilter);
            } else {
                oBinding.filter([]);
            }
        },
        onFilterByCountry : function(oEvent){
            // Obtenemos el pais seleccionado
            var sCountry = oEvent.getParameter("selectedItem").getKey();
            // Obtenemos la tabla de películas
            var oTable = this.byId("tablaPeliculas");
            // Obtenemos el binding de la tabla
            var oBinding = oTable.getBinding("items");

            // Verificamos que el usuario ha seleccionado un pais
            if(sCountry){
                // Aplicamos filtro al país
                var oFilter = new sap.ui.model.Filter("pais", sap.ui.model.FilterOperator.EQ, sCountry);
                oBinding.filter([oFilter]);
            }else{
                oBinding.filter([]);
            }
        },
        onOrdenarPorAnho : function(oEvent){
            // Obtenemos la tabla de películas
            var oTable = this.byId("tablaPeliculas");
            // Obtenemos el binding de la tabla
            var oBinding = oTable.getBinding("items");

            // Cambiamos la variable de ordenación por año
            this._bSortDescending = !this._bSortDescending;

            // Establecemos la ordenación por la variable de año de estreno
            var oSorter = new sap.ui.model.Sorter("añoEstreno", this._bSortDescending);
            oBinding.sort(oSorter);
        },
        onLanguageChange : function(oEvent){
            var sSelectedLanguage = oEvent.getParameter("selectedItem").getKey();

            sap.ui.getCore().getConfiguration().setLanguage(sSelectedLanguage);
        }
    });
});