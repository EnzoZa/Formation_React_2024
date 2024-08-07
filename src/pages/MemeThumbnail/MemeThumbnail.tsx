import { ImageInterface, MemeInterface, MemeSVGViewer } from 'orsys-tjs-meme'
import React from 'react'
import style from './MemeThumbnail.module.css'
import { Link } from 'react-router-dom'

interface MemeThumbnailProps {
  images: ImageInterface[]
  memes: MemeInterface[]
}

function MemeThumbnail({ images, memes }: MemeThumbnailProps) {
  return (
    <div className={style.MemeThumbnail}>
        {memes.map((meme:MemeInterface) => {
            return (
              <Link key={meme.id} to={`/editor/${meme.id}`} style={{display:'block'}}>
                <div > 
                  <MemeSVGViewer meme={meme} image={images.find((item:ImageInterface) => item.id === meme.imageId)} basePath='' />
                </div>
              </Link>
                
            )
        })}
    </div>
  )
}

export default MemeThumbnail