import BookCard from "../../components/bookCard/BookCard";
import "./style.css";
import { useAppDispatch, useAppSelector } from "../../redux";
import { booksPaginationThunk } from "./reduxBookSearchPage/thunk";

export default function BookSearch() {
  const dispatch = useAppDispatch();
  const { books, booksSearchQuerues, requestErrors } = useAppSelector(
    (state) => state.books
  );

  const showMoreBooksHandler = () => {
    if (
      booksSearchQuerues &&
      books?.items &&
      books?.items.length !== books?.totalItems
    ) {
      const newQueries = {
        ...booksSearchQuerues,
        paginationIndex: books?.items.length + 1,
      };
      dispatch(booksPaginationThunk(newQueries));
    } else {
      alert("No more Books");
      return;
    }
  };

  return (
    <>
      {requestErrors !== null ? (
        <h2 className="books-page-errors">{requestErrors}</h2>
      ) : (
        <div className="books-wrapper">
          {books?.totalItems && (
            <h2 className="books-page-caption">
              Found {books?.totalItems} results
            </h2>
          )}

          <div className="cards-wrapper">
            {books?.items?.map((item, index) => (
              <BookCard {...item} key={item.id + String(index)} />
            ))}
          </div>

          {books?.items && (
            <button
              onClick={showMoreBooksHandler}
              className="pagination-button">
              Show more
            </button>
          )}
        </div>
      )}
    </>
  );
}
