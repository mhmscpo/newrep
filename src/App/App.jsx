import React, {useState, useEffect} from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  const [counter, setcounter] = useState(0)

  useEffect(()=>{
      console.log('Valeur post setCounter', counter)
      return() => {
        //console.log('cleanup') //effect
      }
  }, [counter])

  useEffect(() => {
      setcounter(1)
  }, [])

  console.log('rendu');
  return (
    <div className="App">
      Voici la valeur de counter : {counter}
      <hr/>
      <Button className="error" onClick={()=>{
        setcounter(counter-1)
        console.log(counter)
      }}>-1</Button>
      <Button onClick={()=>{
        setcounter(counter+1)
        console.log(counter)
      }}>+1</Button>
    </div>
  );
}

export default App;
