//store avec redux
import { combineReducers, configureStore } from '@reduxjs/toolkit';
//import { emptyMeme } from 'orsys-tjs-meme';
import ressourcesReducer, { addImages } from './ressources';
import { images } from '../../db/db.json';
//import { memes } from '../../db/db.json';
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
store.dispatch(addImages(images)); //async thunk à la place dans le middleware
/* pour ts
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
*/

