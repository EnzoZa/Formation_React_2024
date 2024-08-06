import React, { FC, useEffect, useState } from 'react';
import styles from './MemeForm.module.css';
import Button from '../../ui/Button/Button';
import { ImageInterface } from 'orsys-tjs-meme';

interface MemeFormProps {
  images: ImageInterface[];
}

const memeFormInitialState = false;

const MemeForm: FC<MemeFormProps> = ({ images }) => {
  const [state, setState] = useState(memeFormInitialState);
  useEffect(() => {
    //mount effect & update de state
  }, [state]);
  useEffect(() => {
    //mount
  });
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
    <form>
      <label htmlFor="titre"><h1>Titre</h1></label>
      <br />
      <input name="titre" id="titre" />
      <hr />
      <label htmlFor="image"><h2>Image</h2></label>
      <br />
      <select name="image" id="image">
        { images.map((image: ImageInterface, index) => <option key={index} value={image.id}>{image.name}</option>) }
      </select>
      <hr />
      <label htmlFor="text"><h2>texte</h2></label>
      <br />
      <input name="text" id="text" type="text" />
      <br />
      <label htmlFor="x"><h2 style={{display:'inline'}}>x :</h2>
      </label>
      <input className={styles.smallNumber} name="x" id="x" type="number" />
      <label htmlFor="y"><h2 style={{display:'inline'}}>y :</h2></label>
      <input className={styles.smallNumber} name="y" id="y" type="number" />
      <hr />
      <br />
      <h2>Decorations</h2>
      <label htmlFor="color"><h2 style={{display:'inline'}}>color :</h2></label>
      <input name="color" id="color" type="color" />
      <br />
      <label htmlFor="fontSize"><h2 style={{display:'inline'}}>font-size :</h2></label>
      <input className={styles.smallNumber} name="fontSize" id="fontSize" type="number" min="0" />px
      <br />
      <label htmlFor="fontWeight"><h2 style={{display:'inline'}}>font-weight :</h2></label>
      <input className={styles.smallNumber} name="fontWeight" id="fontWeight" type="number" min="100" step="100" max="900" />
      <br />
      <input name="underline" id="underline" type="checkbox" />&nbsp;<label htmlFor="underline"><h2 style={{display:'inline'}}>underline</h2></label>&nbsp;<h2 style={{display:'inline'}}>/</h2>&nbsp;<label htmlFor="italic"><h2 style={{display:'inline'}}>italic</h2></label>&nbsp;<input name="italic" id="italic" type="checkbox" />
      <hr />
      <br />
      <Button type="submit">Valider</Button>
    </form>
  </div>
  );
}

export default MemeForm;
