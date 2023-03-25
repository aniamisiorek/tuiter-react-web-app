import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json"

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "image": "nasa.webp",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    likesToggle(state, action) {
      const index = state.
      findIndex(tuit =>
          tuit._id === action.payload._id)
      console.log(index)
      const newArray = [...state.initialState];
      newArray[index].liked = !newArray[index].liked
    }
  }
});
export const {createTuit, deleteTuit, likesToggle} = tuitsSlice.actions
export default tuitsSlice.reducer;