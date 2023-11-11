import initialState from "./constants";

export type BooksPageInitialStateType = typeof initialState;

export type BooksRequestType = {
  kind: string | null;
  totalItems: number | null;
  items: Array<BookType>;
};

export type BookType = {
  id: string | null;
  volumeInfo: {
    authors: Array<string> | null;
    imageLinks: {
      smallThumbnail: string | undefined;
    };
    categories: Array<string> | null;
    title: string | null;
  };
};
