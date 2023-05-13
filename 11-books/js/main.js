// Stworz aplikacje, ktore bedzie renderowala ksiazke z podanego endpointa
// https://openlibrary.org/works/OL45804W.json

// Na stronie zawrzyj: tytul i opis

const bookList = document.querySelector('#bookList')

const renderBooks = (data) => {
    console.log(data)
    bookList.innerHTML += `
    <li> 
    <h2> ${data.title}</h2>
    <p> ${data.description} </p>
    </li>
    `

  }
  

const loadBooks = () => {
    return fetch('https://openlibrary.org/works/OL45804W.json')
      .then((response) => {
        return response.json()
      })
  }
  

  loadBooks().then(data => {
    renderBooks(data)
  })

  console.log("Hej");