import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameData: {
    players: ['1', '2', '3', '4'],
    gameWords: [],
    option: {},
  },
};

export const gameDataSlice = createSlice({
  name: 'userAppointmentInfo',
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.gameData['players'] = action.payload;
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
export const { setPlayers, setGameWords, setOption } = gameDataSlice.actions;

export default gameDataSlice.reducer;
