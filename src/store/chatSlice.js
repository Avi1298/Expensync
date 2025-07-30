// store/chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    senderUserId: null,
    receiverUserId: null,
    messages: [],
  },
  reducers: {
    setSenderUserId: (state, action) => {
      state.senderUserId = action.payload;
    },
    setReceiverUserId: (state, action) => {
      state.receiverUserId = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setSenderUserId, setReceiverUserId, addMessage } =
  chatSlice.actions;
export default chatSlice.reducer;
