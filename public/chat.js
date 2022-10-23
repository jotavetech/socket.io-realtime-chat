const socket = io();

// pega parametros passados na url
const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("username");
const room = urlSearch.get("select_room");

// emit => emitir info
// on => escutar info

const usernameText = document.querySelector("h2");
usernameText.innerHTML = `Olá <bold>${username}</bold> - Sala ${room}`;

socket.emit(
  "select_room",
  {
    username,
    room,
  },
  (messages) => {
    messages.forEach((message) => createMessage(message));
  } // vem do cb
);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const messageInput = document.querySelector("#message_input");
  const message = messageInput.value;

  const data = {
    room,
    message,
    username,
  };

  socket.emit("message", data);

  messageInput.value = "";
});

socket.on("message", (data) => {
  createMessage(data);
});

function createMessage(data) {
  const chatDiv = document.querySelector(".chat");

  chatDiv.innerHTML += `
      <div class="message">
        <span class="username">${data.username}</span> ${data.text} 
      </div>
      `;
}
