import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button'

function App() {
  return (
    <div className="App">
        <Button style={{display:'block', fontSize:'24pt'}} bgColor='green' onClick={(unParamDeLEnfant)=>{
            console.log('fonction evnoyee par le parent', unParamDeLEnfant)
        }}><img src='/img/9165532_ok_hand_icon.png' alt='Ok'/></Button>
        <Button bgColor='red'>Cancel</Button>
    </div>
  );
}

export default App;
