import { BookSearchFormValues } from "../components/searchForm/SearchForm";

export type RequestBooksType = BookSearchFormValues & {
  paginationIndex: number | undefined;
};
