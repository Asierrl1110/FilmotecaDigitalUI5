/*global QUnit*/

sap.ui.define([
	"filmotecadigital/controller/VistaInicio.controller"
], function (Controller) {
	"use strict";

	QUnit.module("VistaInicio Controller");

	QUnit.test("I should test the VistaInicio controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
