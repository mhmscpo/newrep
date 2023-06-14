import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme'
import { ressourceURI, REST_ADR } from '../config/config';

const initialState = emptyMeme

const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        update: (state, action) => {
            delete state.id
            Object.assign(state, action.payload)
        },
        clear: (state) => { 
            delete state.i
            Object.assign(state, emptyMeme) 
        }
    },
    extraReducers:(builder)=>{
        builder.addCase('current/save/fulfilled', (state, action)=>{
            Object.assign(state, action.payload)
        })
    }
});

export const { update, clear } = currentSlice.actions

//update(unMeme) -> {type:'current/update', payload:unMeme} 

export const saveCurrent = createAsyncThunk('current/save', async(meme)=>{
    console.log('Entree de saveCurrent');
    const promiseCurrent = await fetch(
        `${REST_ADR}${ressourceURI.memes}${undefined !== meme.id ? '/' + meme.id : ''}`,
        {
            method: undefined!== meme.id?'PUT':'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(meme)
        }
    )
    return await promiseCurrent.json()
})

export default currentSlice.reducer