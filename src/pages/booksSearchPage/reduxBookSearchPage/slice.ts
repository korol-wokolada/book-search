import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./constants";
import { BooksRequestType } from "./types";
import { RequestBooksType } from "../../../api/types";

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<BooksRequestType>): void => {
      state.books = action.payload;
      state.requestErrors = null;
    },
    setSearchQuerues: (
      state,
      action: PayloadAction<RequestBooksType>
    ): void => {
      state.booksSearchQuerues = action.payload;
    },
    setMoreBooksItems: (
      state,
      action: PayloadAction<BooksRequestType>
    ): void => {
      if (state.books) {
        state.books.items = [
          ...(state.books.items || []),
          ...action.payload.items,
        ];
      }
    },
    setBooksErrors: (state, action: PayloadAction<string>): void => {
      state.requestErrors = action.payload;
    },
  },
});

export default booksSlice.reducer;
export const { setBooks, setSearchQuerues, setMoreBooksItems, setBooksErrors } =
  booksSlice.actions;
