angular
	.module('formulario', [])
	.controller('formController', function($scope, $log){
		$scope.usuario = {};
		let user = {
			nombre : 'Maria Rodriguez',
			email : 'nrodriguez@test.com', 
			subject : 'envia tu correo',
			celular : 12345, 
			mensaje: 'asdasdasdadadssaddasdd'
		}

		$scope.usuario = user;

		$scope.enviarForm = function(){
			console.log('Form Enviado');
			$log.error($scope.usuario);
			$log.warn("Error de usuario");
		}
	})

