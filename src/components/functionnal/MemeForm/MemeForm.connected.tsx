import React from 'react'
import UNCONNECTEDMemeForm, { memeProps } from './MemeForm'
import { useDispatch, useSelector } from 'react-redux'
import { changeMeme, saveCurrent } from '../../../store/current.js'
import { ImageInterface, MemeInterface } from 'orsys-tjs-meme';

function MemeForm(props: any) {
    /* Question on ferai pas mieux de dispatch les valeurs initial du store ici ? */
    const imagesSelector = useSelector((storeState:any) => storeState.ressources.images);
    const memeSelector = useSelector((storeState:any) => storeState.current);
    const dispatch = useDispatch();
    return (
        <UNCONNECTEDMemeForm 
            images={imagesSelector}
            meme={memeSelector}
            onMemeChange={(meme) => dispatch(changeMeme(meme))} //Permet de prévenir le parents du changement de la valeur meme | il c'est que changeMeme dans current car il a le même nom d'action
            onMemeSave={(meme: MemeInterface) => dispatch(saveCurrent(meme))}
        ></UNCONNECTEDMemeForm>
    )
}

export default MemeForm