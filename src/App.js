import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
  const name = "Brendon"
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Meu primeiro app</h1>
      <p>Estarei Aprendendo a programar no REACT</p>
      <p>Seja bem-vindo {newName}</p>
      <p>Soma: {sum(5, 5)}</p>
      <img scr={url} alt="Minha imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
