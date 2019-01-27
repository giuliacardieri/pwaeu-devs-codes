model = [
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

const changeTipo = function changeTipo(tipo){
    if(tipo == 'Amazon Prime'){
        model[0].ativo = false
    }else if(tipo == 'Baixada'){
        model[1].ativo = false
    }else if(tipo == 'HBOgo'){
        model[2].ativo = false
    }else if(tipo == 'Hulu'){
        model[3].ativo = false
    }else if(tipo == 'Netflix'){
        model[4].ativo = false
    }else if(tipo == 'Now'){
        model[5].ativo = false
    }else if(tipo == 'Online'){
        model[6].ativo = false
    }else if(tipo == 'TV'){
        model[7].ativo = false
    }else if(tipo == 'YouTube'){
        model[8].ativo = false
    }
    
    changeModel(model)
//    checkActiveBtn(getActiveType())
    loadTemplate()
}

const getActiveType = function getActiveType(){
    let model = getModel()
    for(let i = 0; i < Object.keys(model).length; i++){
        if(model[i].ativo == true)
            return model[i].id
    }
}

$(function(){
    $('.btn-escolher').on('click', function(){
        let tipo = $(this).attr('data-tipo')
        changeTipo(tipo)
    })
})