const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const inputCVC = document.querySelector("#input-cvc");
const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCVC = document.querySelector("#card-cvc");
const form = document.querySelector("#form");
const thankYou = document.querySelector("#thank-you");
const buttonContinue = document.querySelector("#continue");
const buttonRetry = document.querySelector("#retry");
const error = document.querySelector("#error")
const errorText = document.querySelector(".thank-you-text1");

const nombreTarjeta = document.getElementById("input-name");
const numeroTarjeta = document.getElementById("input-number");
const mesTarjeta = document.getElementById("input-month");
const anioTarjeta = document.getElementById("input-year");
const cvcTarjeta = document.getElementById("input-cvc");

inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;

    if (inputName.value.length === 0) {
        cardName.innerText = "XXXX XXXXXX";
    }
})

var cleave = new Cleave('#input-number', {
    blocks: [4, 4, 4, 4], 
    numericOnly: true,
});

inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;

    if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
    }
})

inputMonth.addEventListener("input", () => {
    cardMonth.innerText = inputMonth.value;

    if (inputMonth.value.length === 0) {
        cardMonth.innerText = "00";
    }
})

inputYear.addEventListener("input", () => {
    cardYear.innerText = inputYear.value;

    if (inputYear.value.length === 0) {
        cardYear.innerText = "00";
    }
})

inputCVC.addEventListener("input", () => {
    cardCVC.innerText = inputCVC.value;

    if (inputCVC.value.length === 0) {
        cardCVC.innerText = "000";
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = (nombreTarjeta.value.toUpperCase() === "BENJAMIN ORDAZ GARCIA") ? true : false;
    const numero = (numeroTarjeta.value === "7865 8673 6865 6833") ? true : false;
    const mes = (mesTarjeta.value === "12") ? true : false;
    const anio = (anioTarjeta.value === "24") ? true : false;
    const cvc = (cvcTarjeta.value === "358") ? true : false;

    if(nombre && numero && mes && anio && cvc){
        form.classList.add("disabled");
        thankYou.classList.remove("disabled");
    }else{
        form.classList.add("disabled");
        error.classList.remove("disabled");
        if (!nombre) {
            errorText.textContent = "El nombre ingresado no es válido. Asegúrate de escribirlo tal como aparece en la tarjeta.";
        } else if (!numero) {
            errorText.textContent = "El número de tarjeta es incorrecto. Busca bien las pistas.";
        } else if (!mes) {
            errorText.textContent = "El mes de vencimiento no es válido. Por favor, ingresa un mes entre 01 y 12.";
        } else if (!anio) {
            errorText.textContent = "El año de vencimiento no es válido. Asegúrate de que corresponda al año transcurrido.";
        } else if (!cvc) {
            errorText.textContent = "El código de seguridad (CVC) es incorrecto. Revisa los 3 dígitos al reverso de la caja.";
        } else {
            errorText.textContent = "Ocurrió un error inesperado. Por favor, intenta de nuevo más tarde.";
        }
        
    }
})

buttonContinue.addEventListener("click", () => {
    const alertBox = document.getElementById('alertBox');
    const mensaje = document.getElementById('seleccion');
    alertBox.classList.remove('hidden');
    let cont = 5;
    mensaje.textContent = `Seras redirigido en ${cont} segundos`
    const intervalo = setInterval(() => {
        if (cont  === 0) {
            clearInterval(intervalo);
            window.location.href = "../presupuesto.html";
        }else{
            mensaje.textContent = `Seras redirigido en ${cont-1} segundos`;
            cont--;
        }
    }, 1000);
})

buttonRetry.addEventListener("click", () => {
    form.classList.remove("disabled");
    error.classList.add("disabled");
    form.reset();
    cardName.innerText = "XXXX XXXXXX";
    cardNumber.innerText = "0000 0000 0000 0000";
    cardMonth.innerText = "00";
    cardYear.innerText = "00";
    cardCVC.innerText = "000";
});

