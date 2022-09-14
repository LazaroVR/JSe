let T = document.querySelector('h1#titulo')
let I = document.querySelector('div#img')
let F = document.querySelector('body#pg')

function titulo(){
    let tt = document.querySelector('select#ttitulo').selectedIndex;
    let rtt = document.querySelector('select#ttitulo').options;
    let tc = document.querySelector('select#tcolor').selectedIndex;
    let rtc = document.querySelector('select#tcolor').options;
    let ta = document.querySelector('select#taling').selectedIndex;
    let rta = document.querySelector('select#taling').options;
    
    if(rtt[tt].index == 1) // Tamanho do titulo
    {  
        T.style.fontSize = "2em"
        T.innerHTML = 'Esta imagem esta no tamanho Pequeno!'
    }else if(rtt[tt].index == 2)
    {
        T.style.fontSize = "3em"
        T.innerHTML = 'Esta imagem esta no tamanho Medio!'
    }else if(rtt[tt].index == 3){
        T.style.fontSize = "4.5em"
        T.innerHTML = 'Esta imagem esta no tamanho Grande!'
    }else{
        T.innerHTML = ''
    }

    if(rtc[tc].index == 1) //  Cor do Titulo
    {   
        T.style.color = "blue"
    }else if(rtc[tc].index == 2 || rtc[tc].index == 0)
    {
        T.style.color = "black"
    }else{
        T.style.color = "#44ff00"
    }

    if(rta[ta].index == 1) // Alinhamento do Titulo
    {   
        T.style.textAlign = "left"
    }else if(rta[ta].index == 2 || rta[ta].index == 0)
    {
        T.style.textAlign = "center"
    }else{
        T.style.textAlign = "right"
    }
}

function imagem()
{
    let it = document.querySelector('select#imgt').selectedIndex;
    let rit = document.querySelector('select#imgt').options;
    let ic = document.querySelector('select#imgbc').selectedIndex;
    let ric = document.querySelector('select#imgbc').options;
    let ia = document.querySelector('select#imgal').selectedIndex;
    let ria = document.querySelector('select#imgal').options;

    if(rit[it].index == 1) // Tamanho da Imagem
    {  
        I.innerHTML = `<img src ="imagens/pequena.jpg">`
    }
    else if(rit[it].index == 2)
    {
        I.innerHTML = `<img src ="imagens/media.jpg">`
    }
    else if(rit[it].index == 3)
    {
        I.innerHTML = `<img src ="imagens/grande.jpg">`
    }
    else
    {
        I.innerHTML = ''
    }

    if(ric[ic].index == 1) // Borda da Imagem
     {  
         I.style.border = "10px solid blue"
     }
     else if(ric[ic].index == 2)
     {
         I.style.border = "10px solid black"
     }
     else if(ric[ic].index == 3)
     {
         I.style.border = "10px solid #44ff00"
     }else{
        I.style.border = ""
     }

      if(ria[ia].index == 1) // Alinhamento da Imagem
     {  
        I.style.textAlign = 'left'
     }
    else if(ria[ia].index == 2 || ria[ia].index == 0)
      {
        I.style.textAlign = 'center' 
      }else if(ria[ia].index == 3)
      {
        I.style.textAlign = 'right'
      }
}

function fundo(){
    let fc = document.querySelector('select#fcolor').selectedIndex;
    let rfc = document.querySelector('select#fcolor').options;
     
    if(rfc[fc].index == 1) // Borda da Imagem
     {  
         F.style.background = "blue"
     }
     else if(rfc[fc].index == 2)
     {
         F.style.background = "black"
     }
     else if(rfc[fc].index == 3)
     {
         F.style.background = "#44ff00"
     }else{
        F.style.background = ""
     }
}
