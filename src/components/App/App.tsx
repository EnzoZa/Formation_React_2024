import React from 'react'
import Button from '../ui/Button/Button.tsx'
//DEMAT BREIZH
//text="Benjamin"
function App() {
  return <div className="App" data-testid="App"> 
    <Button 
    onButtonClick={() => {console.log("DEMAT BREIZH")}}
    type= 'button'
    >
      YEC'H MAT !
    </Button>   
    <Button 
    onButtonClick={(test) => {console.log(test)}}
      >
      <img src="/pacman.png" alt="image de pacman"></img>
    </Button>   
  </div>  
}

export default App