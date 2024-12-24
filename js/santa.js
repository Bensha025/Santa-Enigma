document.getElementById("dialogo").style.display = "block";
document.getElementById("dialogo").style.width = "200px";

const mensajes = [
    "JO JO JO, FELIZ NAVIDAD",
    "¿Pero a quién tenemos por aquí?",
    "¿Cuál es tu nombre, pequeña?",
];

const dialogo = document.getElementById('dialogo');
const contNom = document.getElementById('contNom');
let mensajeIndex = 0;

// Mostrar mensajes uno por uno
const intervalo = setInterval(() => {
    dialogo.textContent = mensajes[mensajeIndex];
    mensajeIndex++;

    if (mensajeIndex === mensajes.length) {
            clearInterval(intervalo); 
            contNom.style.display = "block"; 
        }
    }, 5000);

    function validarNombre(){
        const nombre = document.getElementById('usuarioInput').value;
        console.log(nombre);
        if(nombre === "" || nombre.length < 2){
            dialogo.textContent = 'JO, JO, JO. Parece que no has seguido la indicación, ingresa tu nombre por favor!';
            document.getElementById('usuarioInput').value = ""; 
        }else{
            localStorage.setItem('name', nombre);
            contNom.style.display = "none";
            const mensajes1 = [
                `¡JO, JO, JO! Qué gusto saludarte, ${nombre}.`,
                "Antes de continuar, debo asegurarme que eres tú.",
                "Asi que ingresa el número mágico... 🤔\n¡Piensa bien! ★"
            ];
            let mensajeIndex = 0;
            const intervalo = setInterval(() => {
                dialogo.textContent = mensajes1[mensajeIndex];
                mensajeIndex++;

                if (mensajeIndex === mensajes1.length) {
                    clearInterval(intervalo); 
                    document.getElementById("numMagico").style.display = "block";
                }
            }, 5000);
        }
    }

    let contErrores = 0;

    function validarNumero() {
        const nombre = document.getElementById('usuarioInput').value; 
        const numero = parseInt(document.getElementById("numero").value);

        if (numero === 6) {
            numMagico.style.display = "none";
            const mensajes = [
                `¡JO, JO, JO! ¡Has adivinado el número mágico, ${nombre}! 🎉`,
                "¿Pero a quién tenemos por aquí? 😏",
                "Seria tan mágico si tan solo hubiéramos quedado campeones... 😢​",
                "Pero así es la vida... Pronto llegara la sexta ✨🏆​",
                "Bueno, ese es otro tema. ¡Felicidades por descubrir el número mágico! 💪🏼​🧠​",
                "¿Verdad que no fue tan difícil? ¿O sí? JO, JO, JO."
            ];

            let mensajeIndex = 0;

            const intervalo = setInterval(() => {
                dialogo.textContent = mensajes[mensajeIndex]; 
                mensajeIndex++;

                if (mensajeIndex === mensajes.length) {
                    clearInterval(intervalo); 
                    preguntaRegalo();
                }
            }, 5000);
        } else {
            if (contErrores >= 0 && contErrores <= 2) {
                dialogo.textContent = `¡JO, JO, JO! El ${numero} no es la solución. Vamos, ${nombre}, no es tan complicado... ¡Tú puedes! ★`;
            } else if (contErrores > 2 && contErrores <= 6) {
                dialogo.textContent = `¡JO, JO, JO! Ya llevas ${contErrores} intentos, ${nombre}. ¿Qué número podrá ser? 🤔 ★. ¡Pista! Revisa tu WhatsApp. 📱`;
            } else {
                dialogo.textContent = `¡JO, JO, JO! De verdad, ${nombre}, ⚽★🏆. ¿Te vas a rendir? ¡No lo hagas! 💪`;
            }
            contErrores++; 
        }
    }

    function preguntaRegalo(){
        const nombre = document.getElementById('usuarioInput').value;
        dialogo.textContent = `Ahora cuéntame, ${nombre}, ¿qué le has pedido a Santa Claus? 🤔`;
        contGift.style.display = "block";
    }

    function validarRegalo(){
        const regalo = document.getElementById("gift").value;

        if(regalo != ""){
            contGift.style.display = "none";
            const mensajes = [
                `¡Jo, jo, jo! ¡Vaya que has pedido cosas! `,
                "Quizá este año no alcance a darle nada a Rodolfo 🦌.",
                "Antes de seguir con tu sorpresa, cuéntame; ¿cómo te has portado este año?",
            ];

            let mensajeIndex = 0;

            const intervalo = setInterval(() => {
                dialogo.textContent = mensajes[mensajeIndex];
                mensajeIndex++;

                 if (mensajeIndex === mensajes.length) {
                    clearInterval(intervalo); 
                    contAnio.style.display = "block";
                }
            }, 5000);
        }{
            dialogo.textContent = `¡Jo, jo, jo! ¿No has pedido nada? Escribe alguno de tus regalos, por favor.`;
        }
    }

    function validarAnio() {
            
        const opciones = document.getElementsByName('pregunta');
        let seleccionado = null;

        for (let opcion of opciones) {
            if (opcion.checked) {
                seleccionado = opcion.value; 
                break;
            }
        }

        if (seleccionado) {
            contAnio.style.display = "none";
            console.log(seleccionado)
            if(seleccionado === "bien"){
                dialogo.textContent = `¡Jo, jo, jo! Haré como que te creo, pero recuerda que estaré observándote para confirmar que no mientas. 🙃`;
            }else{
                dialogo.textContent = `¡Jo, jo, jo! Qué bueno que seas sincera, eso definitivamente te suma puntos. 🤪`;
            }
            const intervalo = setInterval(() => {
                clearInterval(intervalo);
                preguntas();
            }, 5000);
        } else {
            dialogo.textContent = `¡Jo, jo, jo! Solo selecciona una opción por favor.`;
        }
    }

    function preguntas(){
        contCorreo.style.display = "block";
        const nombre = document.getElementById('usuarioInput').value;
        dialogo.textContent = `Para continuar, por favor ingresa un correo y estate pendiente de él, ${nombre}. 😉`;
    }
        
    function validarCorreo(){
        const correo = document.getElementById("correo").value;
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(correo)) {
            dialogo.textContent = "JO, JO, JO. El correo no es válido. Asegúrate de incluir un '@', un dominio válido y evitar caracteres especiales.";
            document.getElementById("correo").value = "";
        }else{
            enviarCorreo(correo)
            terminar();
        }
    }

    async function enviarCorreo(correo) {
        const nombre = document.getElementById('usuarioInput').value;
        try {
            emailjs.init('TKe2d8116SCmfmd7u');

            const templateParams = {
            from_name: nombre || "Usuario",
            to_name: 'Santa Claus', 
            from_email: "pitech.noreply@gmail.com",
            to_email: correo || "default@correo.com", 
            message: `🎁 ${nombre}, Como muestra de mi gratitud, aquí tienes un regalito especial: https://bensha025.github.io/Santa-Enigma/`
            };

            const response = await emailjs.send("service_sxmyejf", "template_7lbh886", templateParams);

        } catch (error) {
            console.error("Error al enviar el correo: ", error);
        }
    }

    function terminar(){
        const nombre = document.getElementById('usuarioInput').value;
        contCorreo.style.display = "none";
        const mensajes = [
            `🎅 ¡Jo, jo, jo! 🎁 Mis pequeños duendes mágicos del departamento de regalos 📦 están preparando algo muy especial para ti... ✨`,
            `📬 ¡Atenta a tu correo, ${nombre}! 🎄`,
            "🎉 Nos vemos pronto, y espero que disfrutes muchísimo tu sorpresa... 🎅❄️🌟",
            "¡JO, JO, JO! FELIZ NAVIDAD 🎄🎁"
        ];

        let mensajeIndex = 0;

        const intervalo = setInterval(() => {
            const pantallaNegra = document.getElementById('pantallaNegra');
            const dialogo = document.getElementById('dialogo');
            dialogo.textContent = mensajes[mensajeIndex];
            mensajeIndex++;

            if (mensajeIndex === mensajes.length) {
                clearInterval(intervalo); 
                pantallaNegra.style.display = "block";
                    
            }
        }, 5000);
    }    