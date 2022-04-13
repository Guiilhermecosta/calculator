let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2') 
let res = document.getElementById('resul')
let cor = window.document.body
cor.style.height = '100vh'
cor.style.backgroundImage = 'url(./img/PIC1.PNG)'
cor.style.backgroundPosition = 'center center'
cor.style.backgroundRepeat = 'no-repeat'
cor.style.backgroundSize = 'cover'
cor.style.backgroundAttachment = 'fixed'
res.style.fontSize = '18px'
res.style.fontWeight = '600'
res.style.color = '#ffffff'
res.style.fontFamily = 'Arial, Sans-Serifa'
function somar(){
let nu1 = Number(n1.value)
let nu2 = Number(n2.value)
let total = nu1 + nu2
res.innerHTML = `A soma entre ${nu1} + ${nu2} é igual ${total}`
if(n1.value == 0 || n2.value == 0){
    window.alert('Valor inválido')
    res.innerHTML = ''
}
n1.focus()
n1.value = ''
n2.value = ''
}

function subtrair(){
    let nu1 = Number(n1.value)
    let nu2 = Number(n2.value)
    let total = nu1 - nu2
    res.innerHTML = `Resultado... ${nu1} - ${nu2} é igual ${total}`
    if(n1.value == 0 || n2.value == 0){
        window.alert('Valor inválido')
        res.innerHTML = ''
    }
    n1.focus()
    n1.value = ''
    n2.value = ''
    }

function multiplicar(){
    let nu1 = Number(n1.value)
    let nu2 = Number(n2.value)
    let total = nu1 * nu2
    res.innerHTML = `Resultado... ${nu1} x ${nu2} é igual ${total}`
    if(n1.value == 0 || n2.value == 0){
        window.alert('Valor inválido')
        res.innerHTML = ''
    }

    n1.focus()
    n1.value = ''
    n2.value = ''
    }
    
function dividir(){
    let nu1 = Number(n1.value)
    let nu2 = Number(n2.value)
    let total = nu1 / nu2
    res.innerHTML = `Resultado... ${nu1} / ${nu2} é igual ${total}`
    if(n1.value == 0 || n2.value == 0){
        window.alert('Valor inválido')
        res.innerHTML = ''
    }
    n1.focus()
    n1.value = ''
    n2.value = ''
    }
