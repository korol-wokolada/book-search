import React from "react";
import "./style.css";
import { BookType } from "../../pages/booksSearchPage/reduxBookSearchPage/types";

export default function BookCard(props: BookType) {
  const { volumeInfo } = props;

  return (
    <div className="card">
      <div
        className="book-image"
        style={{
          backgroundImage: `url(${volumeInfo?.imageLinks?.smallThumbnail})`,
        }}></div>
      <p className="book-categorie">
        {volumeInfo.categories?.map((categorie) => categorie)}
      </p>
      <p className="book-name">{volumeInfo.title}</p>
      <p className="book-author">{volumeInfo.authors?.map((name) => name)}</p>
    </div>
  );
}
