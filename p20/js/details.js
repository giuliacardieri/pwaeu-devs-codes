/* carrega/recarrega o template que mostra os detalhes de uma série */
const loadDetailsTemplate = function loadCardTemplate(id) {
  let template, html, db
  
  db = getElementDB(id)
  template = Handlebars.compile($('#details-template').html())
  html = template(db)

  $('.details').html(html)
}

$(function(){
  /* mostra os detalhes ao clicar no card da série */
	$('.main').on('click', '.card--serie', function() {
		let id = $(this).attr('id')
		loadDetailsTemplate(id)
	  showWindow('details')
	})

  /* fecha a janela de detalhes ao clicar no botão/icone voltar/seta para esquerda */
  $('.window__icon--details').on('click', function() {
    hideWindow('details')
  })

  /* marca uma série como favorita */
  $('.window__details').on('click', '.btn-fav', function() {
    let id = $(this).attr('data-id')
    setAsFavorite(id)
    loadDetailsTemplate(id)
  })

  /* remove uma série da lista de favoritos */
  $('.window__details').on('click', '.btn-remove-fav', function() {
    let id = $(this).attr('data-id')
    removeFromFavorites(id)
    loadDetailsTemplate(id)
  })
})