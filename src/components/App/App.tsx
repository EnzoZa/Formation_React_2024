/*
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
*/

import React from 'react'
/*
import Header from '../ui/Header/Header';
import NavBar from '../ui/NavBar/NavBar';
import Footer from '../ui/Footer/Footer';
*/
import { Header, NavBar, Footer, SvgViewer } from '../ui/index'
import { FlexWFirstGrow, FlexHThirdGrow } from '../layout/index';
import { MemeForm } from '../functionnal/index';

const App=(props:object) => {
  return (
    <div className="App">
      <FlexHThirdGrow>
        <Header />
        <NavBar />
        <FlexWFirstGrow>
          <SvgViewer />
          <MemeForm />
        </FlexWFirstGrow>
        <Footer />
      </FlexHThirdGrow>
    </div>
  )
}

export default App;