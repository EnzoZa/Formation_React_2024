import React, { useEffect } from 'react'
import { MemeSVGViewer } from '../components/ui/index'
import { FlexWFirstGrow } from '../components/layout/index';
import { MemeForm } from '../components/functionnal/index';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MemeInterface } from 'orsys-tjs-meme';
import { resetCurrent, changeMeme } from '../store/current';
//Pourquoi on utilise pas .connected Ici ? 
function MemeEditor() {
  const routeParams = useParams();
  const dispatch = useDispatch();
  const memes = useSelector((storeState:any) => storeState.ressources.memes);
  const nav = useNavigate();
  useEffect(() => {
    if (routeParams.id !== undefined) {
      const meme = memes.find((item:MemeInterface) => item.id === parseInt(routeParams.id));
      if (meme !== undefined) {
        dispatch(changeMeme(meme));
      } else if (memes.length > 0) {
        //Car il faut attendre que les memes soient chargés. Je trouve que c'est une méthode de contournement...
        nav('/home')
      }
    } else {
      dispatch(resetCurrent())
    }
    return () => {
      
    };
  }, [routeParams, memes])
  return (
    <FlexWFirstGrow>
         <MemeSVGViewer basePath='' /> { /* image={images.find((item:ImageInterface)=>item.id===meme.imageId)} meme={meme} basePath='' */ }
          <MemeForm /> 
    </FlexWFirstGrow>
  )
}

export default MemeEditor