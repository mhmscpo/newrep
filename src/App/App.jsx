import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  return (
    <div className="App">
        <Button onClick={(unParamDeLEnfant)=>{
            console.log('fonction evnoyee par le parent', unParamDeLEnfant)
        }}><img src='/img/9165532_ok_hand_icon.png' alt='Ok'/></Button>
        <Button className="error">Cancel</Button>
    </div>
  );
}

export default App;
