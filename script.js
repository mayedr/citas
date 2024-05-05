let username = '';
const shareLinkInput = document.getElementById('shareLinkInput');
const chatContainer = document.getElementById('chat');
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');

function generateLink() {
    const usernameInput = document.getElementById('usernameInput');
    username = usernameInput.value.trim();
    if (username !== '') {
        const url = window.location.href.split('?')[0] + `?user=${encodeURIComponent(username)}`;
        shareLinkInput.value = url;
        showChat();
    }
}

function showChat() {
    chatContainer.classList.remove('hidden');
}

function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${username}: ${message}`;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
    }
}

// Obtener el nombre de usuario de la URL si está presente
const urlParams = new URLSearchParams(window.location.search);
const userParam = urlParams.get('user');
if (userParam) {
    username = decodeURIComponent(userParam);
    shareLinkInput.value = window.location.href;
    showChat();
}
