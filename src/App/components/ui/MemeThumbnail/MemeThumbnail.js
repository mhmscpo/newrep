import React from 'react'
import PropTypes from 'prop-types'
import style from './MemeThumbnail.module.css'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const MemeThumbnail = (props) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((varMeme, i) => <div key={"image-"+i}>
        <Link to={"/meme/"+varMeme.imageId}>
        <MemeSVGViewer 
          meme={varMeme}
          image={props.images.find(im=>im.id===varMeme.imageId)}
        basePath=''/>
        <div>{varMeme.titre}</div>
        </Link>
       </div>
       )}
    </div>
  )
}

MemeThumbnail.propTypes = {

}

export default MemeThumbnail

export const MemeThumbnailConnected = (props) => {
  const ressources = useSelector(storeState => storeState.ressources)
  return (<MemeThumbnail 
          {...props}
          {...ressources}
          />)
}