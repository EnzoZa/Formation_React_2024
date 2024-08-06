import React, { useEffect, useState } from 'react'
import Button from '../ui/Button/Button.tsx'
//DEMAT BREIZH
//text="Benjamin"
function App() {
  const [isClicked, setIsClicked] = useState(-1);
  useEffect(() => {
    setIsClicked(0);
  }, []);
  return <div className="App" data-testid="App"> 
    <div> {isClicked} </div>
    <Button 
      //onButtonClick={() => {console.log("DEMAT BREIZH")}}
      onButtonClick={() => {setIsClicked(isClicked - 1)}}
      type= 'button'
    >
      YEC'H MAT !
    </Button>   
    <Button 
      onButtonClick={() => {setIsClicked(isClicked + 1)}}
    >
        <img src="/pacman.png" alt="image de pacman"></img>
    </Button>   
  </div>  
}

export default App