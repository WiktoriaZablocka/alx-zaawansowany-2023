import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

// const Header = () => {
//   return (
//     <header>
//       Hello World
//     </header>
//   )
// }

// // Stworz komponent List i komponent Footer.

// // Komponent Footer ma wyswietlac Hello + Twoje imie. Twoje imie zdefiniuj jako zmienna.

// // Komponent List ma wyswietlac elementy listy z tablicy obiektow

// const todos = [
//   {
//     id: 1,
//     name: "Jest fajnie"
//   },
//   {
//     id: 2,
//     name: "Kurs ALX jest spoko"
//   }
// ]

// const name = 'Damian';

// const Footer = () => {
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//     </div>
//   )
// }

// const List = () => {
//   return (
//     // Wszystkie Komponenty/Fragmenty JSX musza byc wewnatrz jakiegos znacznika HTML
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>{todo.name}</li>
//       ))}
//     </ul>
//   )
// }

function App() {
  // jak wywolac useState
  // const [zmienna_ze_stanu, funkcja_zmieniajaca_stan] = useState(wartosc_poczatkowa_stanu)
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        name: inputValue
      }
    ])

    setInputValue('');
  }

  const handleTaskNameChange = (event) => {
    // event.target.value = to co uzytkownik wpisuje do inputa

    // kazdorazowo uruchomienie funkcji do zmiany stanu powoduje przeladowanie komponentu
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <h1>Welcome from App</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Task Name
          <input
            type="text"
            value={inputValue}
            onChange={handleTaskNameChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>

      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>{todo.name}</li>
          )
        })}
      </ul>

      {/* <Header></Header>
      <List />
      <Footer/> */}
    </div>
  );
}


export default App;