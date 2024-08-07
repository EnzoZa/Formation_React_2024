//store avec redux
import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import { emptyMeme } from 'orsys-tjs-meme';
import ressourcesReducer, { addImages, addMemes } from './ressources';
import { images } from '../../db/db.json';
import { memes } from '../../db/db.json';
import currentReducer from './current';
//const initiaCurrent = emptyMeme;

const store = configureStore({
    reducer: combineReducers({ ressources: ressourcesReducer, current: currentReducer })
});
/*
store.subscribe(() => {
    console.log("store", store.getState());
});
store.dispatch(addMeme({ ...initiaCurrent, id: 1 }));
*/

export default store;

store.subscribe(() => {
    console.log("store", store.getState());
});
store.dispatch(addImages(images));
store.dispatch(addMemes(memes));


