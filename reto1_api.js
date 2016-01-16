var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
	var randomId = faker.random.uuid();
	var randomNombre = faker.name.findName();
	var randomContenido = faker.lorem.sentences();
	var randomFecha = faker.date.past();
	var randomImagen = faker.image.avatar();

	return{
		id:randomId,
		nombre: randomNombre,
		contenido: randomContenido,
		fecha: randomFecha,
		imagen:randomImagen
	}
}

app.get('/',function(solicitud, respuesta){
	respuesta.send('Mi servidor');
});

app.get('/post', function(solicitud, respuesta){
	var cantidad = _.random(10,20);
	var usuarios = _.times(cantidad, generarUsuario);
	respuesta.json(usuarios);
});

app.listen(3000);
