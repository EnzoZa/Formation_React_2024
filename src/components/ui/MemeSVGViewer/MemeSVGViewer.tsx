import React from 'react';
import { ImageInterface, MemeSVGViewer as UNCONNECTEDMemeSVGViewer } from 'orsys-tjs-meme';
import { useSelector } from 'react-redux';

interface IMemeSVGViewerProps {
    basePath: ""|'/'|'/img';
}

const MemeSVGViewer: React.FC<IMemeSVGViewerProps> = (props: any) => {
    const memeSelector = useSelector((storeState:any) => storeState.current);
    const imagesSelector = useSelector((storeState:any) => storeState.ressources.images.find((item:ImageInterface)=>item.id===storeState.current.imageId));
    return (
        <UNCONNECTEDMemeSVGViewer 
            meme={memeSelector}
            image={imagesSelector}
            {...props} //Permet de prévenir le parents du changement de la valeur meme | il c'est que changeMeme dans current car il a le même nom d'action
        ></UNCONNECTEDMemeSVGViewer>
    )
}

export default MemeSVGViewer