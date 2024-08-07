import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme';

const initialState = emptyMeme;

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    changeMeme(state, action) {
        console.log(action);
        delete state.id;    
        Object.assign(state, action.payload);
    },
    resetCurrent(state, action) {
        delete state.id;
        Object.assign(state, action)
    },
    initCurrent(state, action) {
        delete state.id;
        Object.assign(state, {...emptyMeme, text:action.payload.text});
    }
    },
    extraReducers(builder) {
        builder.addCase(saveCurrent.fulfilled, (state, action) => {
            //delete state.id;
            Object.assign(state, action.payload);
        });
        builder.addCase(saveCurrent.pending, (state, action) => {
            console.log("pending", action);
        });
        builder.addCase(saveCurrent.rejected, (state, action) => {
            console.log("rejected", action);
        });
    }
});

export const {
    changeMeme,
    resetCurrent,
    initCurrent
} = current.actions

const currentReducer = current.reducer

export const saveCurrent = createAsyncThunk(
    'current/saveCurrent',
    async (meme) => {
        const add = meme.id === undefined;
        const response = await fetch(`http://localhost:3001/memes/${!add ? `/${meme.id}` : ''}`, {
            method: !add ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meme)
        });
        return await response.json();
    }
);

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

export default currentReducer;