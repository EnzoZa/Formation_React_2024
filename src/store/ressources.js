//Stockage de données serialisables
import { createSlice } from '@reduxjs/toolkit'

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
    addMemes(state, action) {
        state.memes = action.payload
      },
    removeMeme(state, action) {
      state.memes = state.memes.filter((meme) => meme.id !== action.payload)
    },
    removeImage(state, action) {
      state.images = state.images.filter((image) => image.id !== action.payload)
    }
  }
});

export const {
    addMeme,
    addImage,
    removeMeme,
    removeImage,
    addImages,
    addMemes
} = ressources.actions

const ressourcesReducer = ressources.reducer

export default ressourcesReducer;