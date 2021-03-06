/* pega os dados do form e muda pro formato necessário do JSON do BD */
/* checa se os dados são válidos antes de submeter, se sim ele coloca no BD e mostra novamente a lista do Home */
const submitForm = function submitForm(data) {
  let final_data = {},
  old_db = [],
  aux

  for (let i = 0; i < data.length; i++) {
    aux = data[i].name
    final_data[aux] = data[i].value
  }
  
  if (final_data.favorita)
  	final_data.favorita = 1
 	else
 		final_data.favorita = null

 	if (getDB()) {
  	old_db = getDB()
 		final_data.id = old_db.length
 	} else {
 		final_data.id = 0
 	}

  old_db.push(final_data)

  if (formValid(final_data)) {
    setDB(old_db)
    loadHomeTemplate()
    hideWindow('add-form')
    $('.add-form__form').trigger('reset')
  }
}

/* checa se o formulário é válido (se o campo nome não está vazio) */
const formValid = function formValid(data) {
  if (data.nome.trim().length === 0)
    return false
  return true
}

$(function(){

  /* mostra o formulário */
  $('.btn-add').on('click', function() {
    showWindow('add-form')
    loadFormTemplate()
  })

  /* ao submeter (de mentira pq não temos back-end) o formulário */
  $('.add-form__form').on('submit', function(e) {
    e.preventDefault()
    submitForm($(this).serializeArray())
    return false
  })

	$('.main__meudesign-wrapper').on('submit','.form-plataforma', function(e) {
    e.preventDefault()
		console.count()
    submitFormPlataforma($(this).serializeArray())
    return false
  })	
	
  /* esconde o formulário ao clicar no botão/ícone de voltar/seta para esquerda */
  $('.window__icon--add-form').on('click', function() {
    hideWindow('add-form')
  })

})