import { ImageInterface, MemeInterface, MemeSVGViewer } from 'orsys-tjs-meme'
import React from 'react'
import style from './MemeThumbnail.module.css'

interface MemeThumbnailProps {
  images: ImageInterface[]
  memes: MemeInterface[]
}

function MemeThumbnail({ images, memes }: MemeThumbnailProps) {
  return (
    <div className={style.MemeThumbnail}>
        {memes.map((meme:MemeInterface) => {
            return (
                <MemeSVGViewer key={meme.id} meme={meme} image={images.find((item:ImageInterface) => item.id === meme.imageId)} basePath='' />
            )
        })}
    </div>
  )
}

export default MemeThumbnail