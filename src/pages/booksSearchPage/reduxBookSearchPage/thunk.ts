import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooksRequest } from "../../../api/apiSettings";
import {
  setBooks,
  setBooksErrors,
  setMoreBooksItems,
  setSearchQuerues,
} from "./slice";
import { RequestBooksType } from "../../../api/types";

export const getBooksThunk = createAsyncThunk(
  "books/getBooksThunk",
  async (
    { sortedBy, searchText, categories, paginationIndex }: RequestBooksType,
    { dispatch }
  ) => {
    try {
      const data = await getBooksRequest({
        sortedBy,
        searchText,
        categories,
        paginationIndex,
      });
      dispatch(setBooks(data));
      dispatch(
        setSearchQuerues({ sortedBy, searchText, categories, paginationIndex })
      );
    } catch (error: any) {
      console.error(error);
      dispatch(
        setBooksErrors(error.message || "Произошла ошибка при получении книг")
      );
    }
  }
);

export const booksPaginationThunk = createAsyncThunk(
  "books/paginationBooks",
  async (
    { sortedBy, searchText, categories, paginationIndex }: RequestBooksType,
    { dispatch }
  ) => {
    try {
      const data = await getBooksRequest({
        sortedBy,
        searchText,
        categories,
        paginationIndex,
      });
      dispatch(setMoreBooksItems(data));
      dispatch(
        setSearchQuerues({ sortedBy, searchText, categories, paginationIndex })
      );
    } catch (error: any) {
      console.error(error);
      dispatch(
        setBooksErrors(error.message || "Произошла ошибка при получении книг")
      );
    }
  }
);
