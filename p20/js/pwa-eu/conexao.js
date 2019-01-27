const changeModel = function changeModel(model){
    localStorage.setItem('#meudesign-lista', JSON.stringify(model))
}

const setModel = function setModel(){
    let model = [
        {id: 'Amazon Prime', ativo: 'true'},
        {id: 'Baixada', ativo: 'true'},
        {id: 'HBOgo', ativo: 'true'},
        {id: 'Hulu', ativo: 'true'},
        {id: 'Netflix', ativo: 'true'},
        {id: 'Now', ativo: 'true'},
        {id: 'Online', ativo: 'true'},
        {id: 'TV', ativo: 'true'},
        {id: 'YouTube', ativo: 'true'}
    ]
    
    localStorage.setItem('#meudesign-lista', JSON.stringify(model))
    
    
}

const getModel = function getModel(){
    let model
    if(!localStorage.getItem('#meudesign-lista'))
        setModel()
    console.log(localStorage.getItem('#meudesign-lista'))
    return JSON.parse(localStorage.getItem('#meudesign-lista'))
}

$(function(){
    setModel()
})