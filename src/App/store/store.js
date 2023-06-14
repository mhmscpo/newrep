import {configureStore,combineReducers} from '@reduxjs/toolkit'
import currentReducer, { update } from './currentSlice'
import ressourcesReducer from './ressourcesSlice'
import {emptyMeme} from 'orsys-tjs-meme'
const store=configureStore({
    reducer:combineReducers({
        ressources:ressourcesReducer,
        current:currentReducer
    }),
    devTools:true
})
// store.subscribe(()=>{
//     console.trace(store.getState())
// })
// store.dispatch({type:'toto'})
//  store.dispatch(update(emptyMeme))
// store.dispatch({type:'current/update', payload:{titre:'coucou'}})
// store.dispatch({type:'current/clear'})
export default store