let edad = parseInt(prompt("ingrese su edad"))
if (edad >= 18) {
    let nombreUsuario = prompt("escribe tu nombre")
    alert("Hola " + nombreUsuario + " Bienvenido(a) a mi trivia de videojuegos...")
    document.getElementById('trivia').style.display = ''
    
} else {
    alert("no tienes edad para este juego")
    document.getElementById('trivia').style.display = 'none'
}

const RESPUESTAS = {
    '1': "Atari 2600",
    '2': "Minecraft",
    '3': "Virtual Racing",
    '4': "GoldenEye 007",
    '5': "Super Mario Bros",
    '6': "Super Nintendo Entertainment System (SNES)",
    '7': "EyeToy: Play"
}

function resultados() {
    const SELECCIONADOS = document.querySelectorAll('input[type="radio"]:checked').length;

    if (SELECCIONADOS < 7) {
        alert('Te falto responder alguna(s) pregunta(s)')
    } else {
        contador = 0;

        for (i=1; i<=7;i++){
            let respuesta = document.querySelector('input[name = pregunta'+i+']:checked').value

            if (respuesta == RESPUESTAS[i]) {
                contador++;
            }
        }

        alert("Respuestas correctas: " +  contador)

        document.getElementById("trivia_form").reset();
    }
    
}



