import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_MODAL_STATE } from "../../constants/InitialData";

const ModalSlice = createSlice({
  name: "modal",
  initialState: INITIAL_MODAL_STATE,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
