import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "./style.css";
import { useAppDispatch } from "../../redux";
import { getBooksThunk } from "../../pages/booksSearchPage/reduxBookSearchPage/thunk";

export type BookSearchFormValues = {
  searchText: string;
  categories: string;
  sortedBy: string;
  paginationIndex: number | undefined;
};

export default function SearchForm() {
  const dispatch = useAppDispatch();

  const { control, register, handleSubmit } = useForm<BookSearchFormValues>({
    defaultValues: {
      sortedBy: "relevance",
      categories: "",
    },
  });

  const onSubmit: SubmitHandler<BookSearchFormValues> = (data) => {
    dispatch(getBooksThunk(data));
  };

  return (
    <form className="wrapper-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="form-input"
        placeholder="Введите название книги"
        id="searchInput"
        {...register("searchText")}></input>

      <div className="select-wrapper">
        <label htmlFor="categories" className="label">
          Categories
        </label>

        <Controller
          name="categories"
          control={control}
          render={({ field }) => (
            <select className="form-select" id="categories" {...field}>
              <option value="All">All</option>

              <option value="Art">Art</option>

              <option value="Biography">Biography</option>

              <option value="Computers">Computers</option>

              <option value="Medical">Medical</option>

              <option value="Poetry">Poetry</option>

              <option value="History">History</option>
            </select>
          )}
        />

        <label htmlFor="sortedBy" className="label">
          Sorting by
        </label>

        <Controller
          name="sortedBy"
          control={control}
          render={({ field }) => (
            <select className="form-select" id="sortedBy" {...field}>
              <option value="relevance">relevance</option>

              <option value="newest">newest</option>
            </select>
          )}
        />
      </div>
    </form>
  );
}
