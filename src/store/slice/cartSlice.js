import { createSlice } from "@reduxjs/toolkit";

const read = () => JSON.parse(localStorage.getItem("cart"));
const write = (state) =>
  localStorage.setItem("cart", JSON.stringify(state.list));

const initialState = { list: read() ?? [] };

export const cartSlice = createSlice({
  name: "cart ",
  initialState,
  reducers: {
    add(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      if (target) {
        target.count++;
      } else {
        state.list.push({ id: payload, count: 1 });
      }
      write(state);
    },
    incr(state, { payload }) {
      state.list.find(({ id }) => id === payload).count++;
      write(state);
    },

    decr(state, { payload }) {
      if (--state.list.find(({ id }) => id === payload).count === 0) {      
        state.list = state.list.filter(({ id }) => id !== payload); //если меньше/равно нулю,то удаляем
      }
      write(state);
    },
    clear(state, { payload }) {
      state.list = state.list.filter(({ id }) => id !== payload);
      write(state);
    },
    clearCart(state) {
      state.list = [];
    },
  },
});

export const { add, incr, decr, clear, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
