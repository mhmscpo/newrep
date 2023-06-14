import React from 'react'
import {useParams} from 'react-router-dom'
import FlexH1Grow from '../components/layout/FlexH1Grow/FlexH1Grow'
import { MemeSVGViewerConnected } from '../components/functional/MemeSVGViewerConnected/MemeSVGViewerConnected'
import { MemeFormStoredConnected } from '../components/functional/MemeForm/MemeForm'

export default function editor() {
    console.log({useParams})
  return (
    <FlexH1Grow>
        <MemeSVGViewerConnected  basePath=''/>
        <MemeFormStoredConnected/>
    </FlexH1Grow>
  )
}
