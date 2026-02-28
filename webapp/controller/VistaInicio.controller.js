sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("filmotecadigital.controller.VistaInicio", {

        onInit() {
        },
        onIniciarSesion : function(){
            // Obtenemos los valores de usuario y clave
            var sUsuario = this.getView().byId("inputUsuario").getValue();
            var sClave = parseInt(this.getView().byId("inputClave").getValue());
            // Datos de los usuarios
            var aUsuarios = this.getOwnerComponent().getModel("usuarios").getData();

            // Buscamos en el array si hay un usuario con usuario y contraseña que coincidan
            var oUsuarioEncontrado = aUsuarios.find(function (oUsuario) {
                return oUsuario.usuario === sUsuario && oUsuario.clave === sClave;
            });

            // En caso de que exista el usuario, entonces se inicia sesión
            if(oUsuarioEncontrado){
                MessageBox.success("Inicio sesión correctamente", {
                    onClose : function(){
                        var router = sap.ui.core.UIComponent.getRouterFor(this);
                        router.navTo("RouteVistaPrincipal"); 
                    }.bind(this)
                });
                
            }else{
                MessageBox.error("Usuario no existente");
            }
        },
        onRegistrar: function(){

        }
    });
});