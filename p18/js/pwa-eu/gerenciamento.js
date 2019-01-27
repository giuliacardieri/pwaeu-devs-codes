const remove = name => {
	let data = getModel()
	
	for(i=0; i < data.length; i++) {
		if(data[i].name == name) {
			delete data[i]			
		}
	}
	
	localStorage.setItem('lista_tipos', JSON.stringify(data))
	loadDesignListaTemplate()
}