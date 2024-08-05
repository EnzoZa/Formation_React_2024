import React from 'react'
import Button from '../ui/Button/Button.tsx'
//DEMAT BREIZH
//text="Benjamin"
function App() {
  return <div className="App" data-testid="App"> 
    <Button onClick={() => {alert("DEMAT BREIZH")}}>
      YEC'H MAT !
    </Button>   
    <Button onClick={() => {alert("test")}}>
      <img src="/pacman.png" alt="image de pacman"></img>
    </Button>   
  </div>  
}

export default App