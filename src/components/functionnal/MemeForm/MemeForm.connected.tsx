import React from 'react'
import UNCONNECTEDMemeForm, { memeProps } from './MemeForm'
import { useDispatch, useSelector } from 'react-redux'
import { changeMeme } from '../../../store/current.js'

function MemeForm({ images, meme }: memeProps) {
    const imagesSelector = useSelector((storeState:any) => storeState.ressources.images);
    const memeSelector = useSelector((storeState:any) => storeState.current);
    const dispatch = useDispatch();
    return (
        <UNCONNECTEDMemeForm 
            images={imagesSelector}
            meme={memeSelector}
            onMemeChange={(meme) => dispatch(changeMeme(meme))} //Permet de prévenir le parents du changement de la valeur meme
        ></UNCONNECTEDMemeForm>
    )
}

export default MemeForm