import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
    <header>
      Hello World
    </header>
  )
}


// Stworz komponent List i komponent Footer.

// Komponent Footer ma wyswietlac Hello + Twoje imie. Twoje imie zdefiniuj jako zmienna.

// Komponent List ma wyswietlac elementy listy z tablicy obiektow


const name = 'Wiktoria';

const todos = [
   {
     id: 1,
     name: "Jest fajnie"
   },
   {
     id: 2,
     name: "Kurs ALX jest spoko"
   }
 ]

 const List = () => {
  return (
    // Wszystkie Komponenty/Fragmenty JSX musza byc wewnatrz jakiegos znacznika HTML
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <p>
      Hello {name}
    </p>
  )
};

function App() {
  return (
    <div className="App">
      <h1>Welcome from App</h1>
      <Header></Header>
      <List></List>
      <Footer/>
    </div>
  );
}

export default App;