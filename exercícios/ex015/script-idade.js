function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
//homen
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 1 && idade < 12){
                //criança
                img.setAttribute('src','foto-bebe-m.png') 

            } else if (idade >= 12 && idade <= 21){
                //adolescente
                img.setAttribute('src','foto-adolescente-m.png') 

            } else if (idade > 21 && idade <= 30){
                //jovem
                img.setAttribute('src','foto-jovem-m.png') 
            } else if (idade > 30 && idade <= 60){
                //idoso
                img.setAttribute('src','foto-adulto-m.png') 

            } else if (idade > 60){
                //idoso
                img.setAttribute('src','foto-idoso-m.png') 

            }

//mulher
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 1 && idade < 12){
                //criança
                img.setAttribute('src','foto-bebe-f.png') 

            } else if (idade >= 12 && idade <= 21){
                //adolescente
                img.setAttribute('src','foto-adolescente-f.png') 

            } else if (idade > 21 && idade <= 30){
                //jovem
                img.setAttribute('src','foto-jovem-f.png') 
            } else if (idade > 30 && idade <= 60){
                //idoso
                img.setAttribute('src','foto-adulto-f.png') 

            } else if (idade > 60){
                //idoso
                img.setAttribute('src','foto-idoso-f.png') 

            }
            
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    
    }
}