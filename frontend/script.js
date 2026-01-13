async function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    if (input.value.trim() === "") return;

    const userMessage = input.value;

    chatBox.innerHTML += `<div class="message user">${userMessage}</div>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: userMessage
        })
    });

    const data = await response.json();

    chatBox.innerHTML += `<div class="message bot">${data.reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
