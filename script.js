function calcular(){
    tela.value = eval(tela.value)
    if(tela.value == 'Infinity' || tela.value == 'NaN'){
        tela.value = 'ERROR';
    }
}

let teclas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', '+', '-', '/', '*', '=', '.', 'Enter']
let tela = window.document.querySelector('input#tela')

document.addEventListener('keydown', function(event){
    console.log(event.key)
    if(teclas.includes(event.key)){
        switch (event.key){
            case '1':
                tela.value += 1
                break
            case '2':
                tela.value += 2
                break
            case '3':
                tela.value += 3
                break
            case '4':
                tela.value += 4
                break
            case '5':
                tela.value += 5
                break
            case '6':
                tela.value += 6
                break
            case '7':
                tela.value += 7
                break
            case '8':
                tela.value += 8
                break
            case '9':
                tela.value += 9
                break
            case '0':
                tela.value += 0
                break
            case 'Backspace':
                tela.value = tela.value.slice(0, -1)
                break
            case 'Delete':
                tela.value = ''
                break
            case '.':
                tela.value += '.'
                break
            case '+':
                tela.value += '+'
                break
            case '-':
                tela.value += '-'
                break
            case '/':
                tela.value += '/'
                break
            case '*':
                tela.value += '*'
                break
            case 'Enter':
                calcular()
                break 
            case '=':
                calcular()
                break
        }
    }
})