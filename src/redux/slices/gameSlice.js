import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameData: {
    numPlayer: 4,
    gameWords: [],
    option: {},
  },
};

export const gameDataSlice = createSlice({
  name: 'userAppointmentInfo',
  initialState,
  reducers: {
    setNumPlayer: (state, action) => {
      state.gameData['numPlayer'] = action.payload;
    },
    setGameWords: (state, action) => {
      state.gameData['gameWords'] = action.payload;
    },
    setOption: (state, action) => {
      state.gameData['option'] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNumPlayer, setGameWords, setOption } = gameDataSlice.actions;

export default gameDataSlice.reducer;
