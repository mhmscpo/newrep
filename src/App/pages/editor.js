import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import FlexH1Grow from '../components/layout/FlexH1Grow/FlexH1Grow'
import { MemeSVGViewerConnected } from '../components/functional/MemeSVGViewerConnected/MemeSVGViewerConnected'
import { MemeFormStoredConnected } from '../components/functional/MemeForm/MemeForm'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../store/currentSlice'

export default function Editor() {
    console.log({useParams})
    const d=useDispatch()
    const memes=useSelector(s=>s.ressources.memes)
    const params=useParams()

    useEffect(()=>{
        if (undefined!== params.id) {
          const toViewMeme=memes.find(m=>m.id===Number(params.id))
          if ( undefined===toViewMeme) {}
          else {d(update(toViewMeme))}
        }
    }, [params, memes, d])
    
  return (
    <FlexH1Grow>
        <MemeSVGViewerConnected  basePath=''/>
        <MemeFormStoredConnected/>
    </FlexH1Grow>
  )
}
