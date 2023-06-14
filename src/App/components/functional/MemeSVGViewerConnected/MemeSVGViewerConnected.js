
import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux'

export const MemeSVGViewerConnected = (props) => {
    const storeProps = useSelector(storeState => ({
        meme: storeState.current,
        image: storeState.ressources.images.find(img => img.id === Number(storeState.current.imageId))
    }))

    return (
        <MemeSVGViewer
            {...props}
            {...storeProps}
        />)


}