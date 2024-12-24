//Fondo
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var fontSize = 16;
var columns = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < columns; i++) {
    drops.push(0);
}
var str = "JavaScript Hacking Effect";
function draw() {
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, W, H);
    context.fontSize = "700 " + fontSize + "px";
    context.fillStyle = "#00cc33";
    for (var i = 0; i < columns; i++) {
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
draw();
setInterval(draw, 35);

//Letras
function hackingEffect(element, text, speed, callback) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
    let iteration = 0;
    const interval = setInterval(() => {
        element.innerText = text
            .split("")
            .map((char, index) => {
                if (index < iteration) {
                    return char; // Muestra el carácter definitivo
                }
                return characters.charAt(Math.floor(Math.random() * characters.length));
            })
            .join("");

        if (iteration >= text.length) {
            clearInterval(interval); 
            if (callback) callback(); 
        }

        iteration += 1; 
    }, speed);
}

const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const h4 = document.getElementById("h4");
const p = document.getElementById("p");
let decifrado = false;
const nombre = localStorage.getItem('name');
if(nombre == null){
    nombre = ""
}

let llamar = 0;

function startHackingEffects() {
    if (llamar < 3) {
        hackingEffect(h1, `Bienvenido ${nombre}`, 40, () => {
            hackingEffect(h2, "🚨 ALERTA DE SEGURIDAD 🚨", 40, () => {
                hackingEffect(h3, "Tu misión: Descubre el código secreto de 2 dígitos para desbloquear el sistema y recuperar el control.", 20, () => {
                    hackingEffect(h4, "⏳ El tiempo corre... ¿Serás capaz de descifrarlo y restaurar el orden? 💻⚡", 20, () => {
                        hackingEffect(p, "💡 Pista: El hacker dejó rastros... ¡Usa tu lógica y habilidades para resolver este enigma!", 20, () => {
                            llamar++;
                            setInterval(startHackingEffects, 8000);
                        });
                    });
                });
            });
        });
    }
}

startHackingEffects()

function startHackingEffectsFinal(){
    llamar = 10
    hackingEffect(h1, `Felicidades ${nombre}`, 75, () => {
        hackingEffect(h2, "🚨 ALERTA DE SEGURIDAD NEUTRALIZADA🚨", 50, () => {
            hackingEffect(h3, "✨ ¡Lo lograste! El código secreto ha sido descifrado y el sistema está nuevamente bajo tu control. 🛡️💻", 40, () => {
                hackingEffect(h4, "El acceso ha sido restaurado. Gracias a tu ingenio y habilidades, el hacker ha sido derrotado. ¡Eres un héroe digital! 🕵️‍♀️⚡", 40, () => {
                    hackingEffect(p, "Puedes disfrutar tu regalo, o quiza falte algo mas... 😉", 50, () => {
                        setTimeout(startHackingEffects, 3000);
                    });
                });
            });
        });
    });
}

function box() {
    const alertBox = document.getElementById('alertBox');
    setTimeout(() => {
        alertBox.style.display = 'block'; 
    }, 8000);
}

box();

function borrar(){
    const mensaje = [""]
    document.getElementById("diguitos").value = "";
}

let contadorErrores = 0;
function validar(){
    numero = parseInt(document.getElementById("diguitos").value);
    const error = document.getElementById("errores");
    const msg = document.getElementById("mensajeError");
    const mensajes = [
        "❌ ¡Oops! Fallaste de nuevo... El número secreto está tan cerca como un clic en tu buzón de correo 📬.",
        "🔐 ¡Incorrecto! Quizá deberías revisar tu 'bandeja de entrada'... ahí podría estar la clave 🕵️‍♂️.",
        "📉 ¡Eso no es! Piensa en algo más pequeño que 20 pero más grande que 10. ¿Te dice algo? 🧐",
        "✉️ ¡Pista desbloqueada! El número secreto está 'escondido' en un mensaje importante... ¿ya lo buscaste? 📨",
        "🤯 ¡Ay, no! Cada fallo te acerca al misterio. El correo es la clave, pero no olvides que el número es no es tan de mala suerte... 🧠",
        "⏳ ¡El tiempo corre! Revisa entre las letras, números y mensajes... la verdad siempre sale a la luz 💡."
    ]

    if(numero == 13){ 
        mensajeError.textContent = "Haz descubierto el numero";
        document.getElementById("cancelButton").style.display = "none";
        document.getElementById("okButton").style.display = "none";
        decifrado = true;
        final();
    }else if(numero <= 9 || !numero){
        mensajeError.textContent = "❌Error. Debes ingresar 2 DÍGUITOS❌";
        contadorErrores++;
    }else{
        const numeroRandom = Math.floor(Math.random() * 6);
        mensajeError.textContent = mensajes[numeroRandom];
        contadorErrores++;
    }

    if(contadorErrores >= 13){
        contadorErrores = 13;
        error.textContent = `Errores: ${contadorErrores} <---`;
    }else{
        error.textContent = `Errores: ${contadorErrores}`;
    }
}

function final(){
    let cont = 20;
    startHackingEffectsFinal();
    const intervalo = setInterval(() => {
        if (cont  === 0) {
            clearInterval(intervalo);
            window.location.href = "./tarjeta/index.html";
        }else{
            mensajeError.textContent = `Seras redirigido en ${cont-1} segundos`;
            cont--;
        }
    }, 1000);
}