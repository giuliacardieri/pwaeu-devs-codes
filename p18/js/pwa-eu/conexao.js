/* Esse arquivo representa a camada de conexão */

const setModel = function setModel(model) {

  localStorage.setItem('lista_tipos', JSON.stringify(model));
}

const getModel = function getModel() {
  let model
  if (localStorage.getItem('lista_tipos')) {
    return JSON.parse(localStorage.getItem('lista_tipos'));
  }
	return null;
}

//$(function() {
//	let model = [
//		{name: 'Netflix'}
//	]
//	setModel(model)
//})