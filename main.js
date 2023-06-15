const ingressos = [];

addRedBorder = (id) => {
    element = document.querySelector(`#${id}`);
    element.style.border = "5px solid red";
}

boxShadow = (selector) => {
    var element = document.querySelector(selector);

    element.classList.toggle("boxshadow");
}

checkKeyboardCode = () => {

    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
    
        alert(`key pressed ${name} \r\n key code value: ${code}`);
    }, false);
    

}

addKeyboardEventListener = () => {

    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;

        if(code == 'Digit1') {
            ingresso1.classList.toggle("boxshadow");
            ingresso2.classList.remove("boxshadow");
            ingresso3.classList.remove("boxshadow");
            ingresso4.classList.remove("boxshadow");
        }

        if(code == 'Digit2'){
            ingresso1.classList.remove("boxshadow");
            ingresso2.classList.toggle("boxshadow");
            ingresso3.classList.remove("boxshadow");
            ingresso4.classList.remove("boxshadow");
        }

        if(code == 'Digit3'){
            ingresso1.classList.remove("boxshadow");
            ingresso2.classList.remove("boxshadow");
            ingresso3.classList.toggle("boxshadow");
            ingresso4.classList.remove("boxshadow");
        }

        if(code == 'Digit4'){
            ingresso1.classList.remove("boxshadow");
            ingresso2.classList.remove("boxshadow");
            ingresso3.classList.remove("boxshadow");
            ingresso4.classList.toggle("boxshadow");
        }
        
        if(code == 'Escape'){
            ingresso1.classList.remove("boxshadow");
            ingresso2.classList.remove("boxshadow");
            ingresso3.classList.remove("boxshadow");
            ingresso4.classList.remove("boxshadow");
        }
    }, false);  
}

cardSelected = (selector) => {
    var element = document.querySelector(selector);
        element.classList.toggle('cards-selected')
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else(ingressos.push(selector))
}

showSelectedCards = ()  => {
    if(ingressos.length > 0) alert("ingressos selecionados: " + ingressos);
}
//checkKeyboardCode();

addKeyboardEventListener();


