import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import Button from '../../ui/Button/Button';
import { ImageInterface, MemeInterface } from 'orsys-tjs-meme';

export interface memeProps {
  images: ImageInterface[];
  meme: MemeInterface
  onMemeChange: (meme: MemeInterface) => void;
  onMemeSave: (meme: MemeInterface) => void;
}

//const memeInitialState = {};

const MemeForm: FC<memeProps> = ({ images, meme, onMemeChange, onMemeSave }) => {
  //const [state, setState] = useState(memeInitialState); //état intermediaire du composant
  //état intermediaire du composant, pour remonter les valeurs du formulaire que au submit
  //const [memeForm, setMemeForm] = useState(meme); 
  //let initialStateMeme= {};
  useEffect(() => {
    //mount effect & update de state
    //initialStateMeme = meme;
  }, []);
  /*
  useEffect(() => {
    //mount
  });
    */
 const updateMeme = (event:React.ChangeEvent<HTMLInputElement>) => {
  const {name, value} = event.target;
  //const newMeme = {...meme, [name]: value};
  onMemeChange( {...meme, [name]: value});
 };

 const updateMemeInt = (event:React.ChangeEvent<HTMLInputElement>) => {
  const {name, value} = event.target;
  //const newMeme = {...meme, [name]: parseInt(value)};
  onMemeChange({...meme, [name]: parseInt(value)});
 };

 const updateMemeChecked = (event:React.ChangeEvent<HTMLInputElement>) => {
  const {name, checked} = event.target;
  //const newMeme =  {...meme, [name]: checked};
  onMemeChange( {...meme, [name]: checked});
  }

  return (
    <div data-testid="meme">
    <form onSubmit={(e) => {
        e.preventDefault();
        //Pourquoi ça rafraichi le formulaire ?
        onMemeSave(meme);
        //onMemeChange(meme);
      }}
      /* TODO A COMPRENDRE
      onReset={(e) => {
        e.preventDefault();
        //setMeme(memeInitialState);
        onMemeChange(initialStateMeme);
      }}
      */
    >
      <label htmlFor="titre" ><h1>Titre</h1></label>
      <br />
      <input name="titre" id="titre" value={meme.titre} onChange={updateMeme} />
      <hr />
      <label htmlFor="image"><h2>Image</h2></label>
      <br />
      <select name="image" id="image" value={meme.imageId} onChange={(e) => {
        onMemeChange({...meme, imageId: Number(e.target.value)});
      }} >
        <option value="-1">No image</option>
        { images.map((image: ImageInterface, index) => <option key={index} value={image.id}>{image.name}</option>) }
      </select>
      <hr />
      <label htmlFor="text"><h2>texte</h2></label>
      <br />
      <input name="text" id="text" type="text" value={meme.text} onChange={updateMeme} />
      <br />
      <label htmlFor="x"><h2 style={{display:'inline'}}>x :</h2>
      </label>
      <input name="x" id="x" type="number" value={meme.x} onChange={updateMemeInt} />
      <label htmlFor="y"><h2 style={{display:'inline'}}>y :</h2></label>
      <input name="y" id="y" type="number" value={meme.y} onChange={updateMemeInt} />
      <hr />
      <br />
      <h2>Decorations</h2>
      <label htmlFor="color"><h2 style={{display:'inline'}}>color :</h2></label>
      <input name="color" id="color" type="color" value={meme.color} onChange={updateMeme} />
      <br />
      <label htmlFor="fontSize"><h2 style={{display:'inline'}}>font-size :</h2></label>
      <input name="fontSize" id="fontSize" type="number" min="0" value={meme.fontSize} onChange={updateMemeInt} />px
      <br />
      <label htmlFor="fontWeight"><h2 style={{display:'inline'}}>font-weight :</h2></label>
      <input name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900" value={meme.fontWeight} onChange={updateMemeInt} />
      <br />
      <input name="underline" id="underline" type="checkbox" value={
        meme.underline ? 'on' : 'off'
      }
      onChange={updateMemeChecked} />&nbsp;<label htmlFor="underline">
        <h2 style={{display:'inline'}}>underline</h2></label>&nbsp;<h2 style={{display:'inline'}}>/</h2>&nbsp;
        <label htmlFor="italic"><h2 style={{display:'inline'}}>italic</h2></label>&nbsp;
        <input name="italic" id="italic" type="checkbox" value={
          meme.italic ? 'on' : 'off'
        } onChange={updateMemeChecked}/>
      <hr />
      <br />
      {/* <Button type="reset">Reset</Button> */}
      <Button type="submit">Valider</Button>
    </form>
  </div>
  );
}

export default MemeForm;
