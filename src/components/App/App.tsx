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

import React, { useEffect, useState } from 'react'
/*
import Header from '../ui/Header/Header';
import NavBar from '../ui/NavBar/NavBar';
import Footer from '../ui/Footer/Footer';
*/
import { Header, NavBar, Footer } from '../ui/index'
import { FlexWFirstGrow, FlexHThirdGrow } from '../layout/index';
import { MemeForm } from '../functionnal/index';
import { emptyMeme, ImageInterface, MemeInterface, MemeSVGViewer } from 'orsys-tjs-meme';

//props:object
const App=() => {
  //Mauvaise pratique de gérer l'état de l'application dans le composant racine
  const [meme, setMeme] = useState({...emptyMeme, text:"YEC'H MAT !"});
  const [images, setImages] = useState([]);
  useEffect(() => {
      fetch('http://localhost:3001/images').then(response => response.json()).then(data => setImages(data));
  }, []);


  return (
    <div className="App">
      <FlexHThirdGrow>
        <Header />
        <NavBar />
        <FlexWFirstGrow>
         <MemeSVGViewer image={images.find((item:ImageInterface)=>item.id===meme.imageId)} meme={meme} basePath=''/>
          <MemeForm images={images} meme={meme} onMemeChange={(newMeme:MemeInterface) => {
            setMeme(newMeme);
          }}/>
        </FlexWFirstGrow>
          <div>   
            {
            //JSON.stringify(images)
            } 
          </div>
        <Footer />
      </FlexHThirdGrow>
    </div>
  )
}

export default App;