import axios from "axios";
import { RequestBooksType } from "./types";

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
  withCredentials: false,
});

export async function getBooksRequest({
  searchText,
  categories,
  sortedBy,
  paginationIndex,
}: RequestBooksType) {
  if (categories === "All") {
    categories = "";
  }
  if (typeof paginationIndex === "undefined") {
    paginationIndex = 0;
  }
  return instance
    .get(
      `volumes?q=${searchText}+subject:${categories}&maxResults=30&orderBy=${sortedBy}&startIndex=${paginationIndex}&key=AIzaSyDx-qCPj1SNGP55UdCOsePlmPCBi7KWNGc`
    )
    .then((res) => {
      console.log(res);
      return res.data;
    });
}
