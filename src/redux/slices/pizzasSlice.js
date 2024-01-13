import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params, thunkAPI) => {
    const { sortBy, category, order, currentPage } = params;
    const { data } = await axios.get(
      `https://6592cf5bbb12970719901142.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`
    );

    return data;
  }
);

const initialState = {
  items: [],
  status: "loading", // loading, success, error
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      console.log(state + " все гуд");
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchPizzas.pending, (state, action) => {
      console.log(state + " идет загрузка");
      state.status = "loading";
      state.items = [];
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      console.log(state + "что-то пошло не так(");
      state.status = "error";
      state.items = [];
    });
  },
});

export const selectPizza = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
