const chatForm = document.querySelector('#chatForm');
const chatAuthor = document.querySelector('#author');
const chatMessage = document.querySelector('#message')
const list = document.querySelector('#list')
const chat = document.querySelector('#chat');

let messages = JSON.parse(localStorage.getItem('messages'));

if(messages === null) {
  messages = [];
}

const renderMessages = () => {
  ul.innerHTML = '';

  for(let chat of messages) {
    ul.innerHTML += `
        <li>${chat.author} : ${chat.message}</li>
    `
  }
}


  const validate = (newChat) => {
    if(newChat.author.length < 1) {
      alert ('Field AUTHOR cannot be empty')
      return false;

    }
  
    if(newChat.message.length < 2) {
      alert('Field MESSAGE cannot be empty')
      return false;
    }
  
    return true;
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newChat = {
      author: chatAuthor.value,
      message: chatMessage.value,
    }

    const isValid = validate(newChat)
    if(!isValid) return;

    messages = [newChat, ...messages]
    
    localStorage.setItem('messages', JSON.stringify(newMessages));
    renderMessages();

  }



renderMessages();
chatForm.addEventListener("submit", handleSubmit);




// JS a JSON


// JS - jezyk programowania
// JSON - sposob zapisu danych, majacy okreslona strukture (brat JSON to XML)

// Fragment JS

// const table = {
//   id: 1,
//   name: 'Pod oknem',
//   people: 4
// }

// JSON

// {
//   "id": 1,
//   "name": "Pod oknem",
//   "people": 4
// }


// JS posiada wbudowane metody do zamian JS do JSON i na odwrot.

// Tablica obiektow
console.log(messages);

// JSON
const MessagesAsJSON = JSON.stringify(messages);
console.log(MessagesAsJSON)


// localStorage

// localStorage jest dostepny w obiekcie window, ale ze window jest domyslnym slowem przed kazda funkcja, to nie trzeba tego wpisywac

// localStorage.getItem('klucz') // pobranie wartosci ze schowka
// localStorage.setItem('klucz', 'wartosc') // zapisanie do schowka
// localStorage.removeItem('klucz') // usuniecie ze schowka

