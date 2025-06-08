import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {
  const nome  = "Juliana"
  return (
    <div className="App">  
      <Frase/>
      <Frase/>
      <HelloWorld/>
      <SayMyName nome="Brendon"/>
      <SayMyName nome="John"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Gregorie" 
        idade="23" 
        profissao="Analista" 
      />
    </div>
   )
  }

export default App;
