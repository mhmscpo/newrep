import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { REST_ADR, ressourceURI } from '../config/config';

const initialState = {
    images: [],
    memes: []
}

const ressourcesSlice = createSlice({
    name: 'ressources',
    initialState,
    reducers: {}
});

// export const {} = ressourcesSlice.actions
export const fetchAllRessources = createAsyncThunk('ressources/fetchRessources',
    async () => {
        const promiseImages = await fetch(`${REST_ADR}${ressourceURI.images}`)
        const promiseMemes = await fetch(`${REST_ADR}${ressourceURI.memes}`)
        const jsoI = await promiseImages.json() 
        const jsoM = await promiseMemes.json() 

        return {memes:jsoM, images:jsoI}    })


export default ressourcesSlice.reducer