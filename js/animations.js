const messages = ["Harmonia", "Sonhos", "Comunicação Visual", "Transformação"];
let index = 0;
let charIndex = 0;
let currentMessage = "";
let interval;

function typeMessage() {
    if (charIndex < messages[index]?.length) {
        currentMessage += messages[index][charIndex];
        charIndex++;
        document.querySelector('.letreiro').textContent = currentMessage;
    } else {
        clearInterval(interval); 
        setTimeout(startTyping, 1000); 
    }
}

function startTyping() {
    if (index < messages.length) {
        currentMessage = "";
        charIndex = 0;
        interval = setInterval(typeMessage, 100);
        index++;
    } else {
        index = 0;
        startTyping();
    }
}

startTyping();
