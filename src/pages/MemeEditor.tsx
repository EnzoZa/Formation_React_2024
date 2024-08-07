import React from 'react'
import { MemeSVGViewer } from '../components/ui/index'
import { FlexWFirstGrow } from '../components/layout/index';
import { MemeForm } from '../components/functionnal/index';
function MemeEditor() {
  return (
    <FlexWFirstGrow>
         <MemeSVGViewer basePath='' /> { /* image={images.find((item:ImageInterface)=>item.id===meme.imageId)} meme={meme} basePath='' */ }
          <MemeForm /> 
    </FlexWFirstGrow>
  )
}

export default MemeEditor