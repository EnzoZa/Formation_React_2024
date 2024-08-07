//Stockage de données serialisables
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    memes: [],
    images: []
}

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    addMeme(state, action) {
      state.memes.push(action.payload) //utile pour les useState [...state.memes, action.payload]
    },
    addImage(state, action) {
      state.images.push(action.payload)
    },
    addImages(state, action) {
      state.images = action.payload
    },
    removeMeme(state, action) {
      state.memes = state.memes.filter((meme) => meme.id !== action.payload)
    },
    removeImage(state, action) {
      state.images = state.images.filter((image) => image.id !== action.payload)
    }
  },
  extraReducers(builder) {
    builder.addCase(loadInit.pending, () => {
        console.log("pending")
    }),
    builder.addCase(loadInit.fulfilled, (state, action) => { //array de image interface dans action
        //state.images = action.payload valide ?
        //state.images.splice(0, state.images.length, ...action.payload) valide ? 
        state.images.splice(0);
        state.memes.splice(0);
        state.images.push(...action.payload.images)
        state.memes.push(...action.payload.memes)
    })
    //addMatcher permet de gérer les cas d'erreur
    builder.addCase('current/saveCurrent/fulfilled', (state, action) => {
      const index = state.memes.findIndex(meme => meme.id === action.payload.id);
      index >= 0 ? state.memes[index] = action.payload : state.memes.push(action.payload);
    });
  }
});

export const {
    addMeme,
    addImage,
    removeMeme,
    removeImage,
    addImages
} = ressources.actions

export const loadInit = createAsyncThunk(
    'ressources/loadInit',
    async () => {
        const responseImages = fetch('http://localhost:3001/images'); //Bonne pratique de le mettre dans un env évidemment DA
        const responseMeme = fetch('http://localhost:3001/memes'); //Bonne pratique de le mettre dans un env évidemment DA
        const response = await Promise.all([responseImages, responseMeme]);
        const images = await response[0].json(); //await car lecture de flux
        const memes = await response[1].json(); //await car lecture de flux
        return { images:images, memes:memes };
    }
);

const ressourcesReducer = ressources.reducer

export default ressourcesReducer;