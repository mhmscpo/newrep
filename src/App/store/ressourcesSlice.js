import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
const fetchAllRessources = createAsyncThunk('ressources/fetchRessources',
    async () => {
        const promiseImages = await fetch()
        return await promiseImages.json() 
    })
export default ressourcesSlice.reducer