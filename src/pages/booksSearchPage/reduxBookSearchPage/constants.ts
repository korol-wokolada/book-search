import { RequestBooksType } from "../../../api/types";
import { BooksRequestType } from "./types";

const initialState = {
  books: undefined as BooksRequestType | undefined,
  booksSearchQuerues: undefined as RequestBooksType | undefined,
  requestErrors: null as string | null,
};

export default initialState;
