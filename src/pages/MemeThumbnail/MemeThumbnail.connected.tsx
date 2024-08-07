import React from 'react'
import UNCONNECTEDMemeThumbnail from './MemeThumbnail';
import { useSelector } from 'react-redux'

function MemeThumbnail() {
    const imagesSelector = useSelector((storeState:any) => storeState.ressources.images);
    const memeSelector = useSelector((storeState:any) => storeState.ressources.memes);
    console.log('imagesSelector', imagesSelector);
  return (
    <UNCONNECTEDMemeThumbnail images={imagesSelector} memes={memeSelector} />
  )
}

export default MemeThumbnail