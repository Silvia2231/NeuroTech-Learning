function toggleChat() {
    let chat = document.getElementById("chatbot");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function sendMessage(event) {
    if (event.key !== "Enter") return;

    let input = document.getElementById("chat-input");
    let text = input.value.trim();
    if (text === "") return;

    let chatBody = document.getElementById("chat-body");
    chatBody.innerHTML += `<p><strong>Tú:</strong> ${text}</p>`;

    let response = getResponse(text);
    chatBody.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getResponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hola")) return "¡Hola! ¿En qué puedo ayudarte?";
    if (msg.includes("neuromor")) return "La tecnología neuromórfica imita el cerebro humano.";
    if (msg.includes("red")) return "Las redes neuromórficas funcionan con neuronas artificiales.";
    if (msg.includes("hardware")) return "El hardware neuromórfico consume poca energía.";

    return "No entendí eso, pero seguiré aprendiendo 👀";
}
