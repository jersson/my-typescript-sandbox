import axios from "axios";

import { Book } from "../models/book";
import BooksService from "../interfaces/booksService";

export default class ExternalBookService implements BooksService {
  getBookById = async (bookId: number): Promise<Book> => {
    const response = await axios.get<Book>(
      `https://freetestapi.com/api/v1/books/${bookId}`
    );
    //TODO: Remove this magic string

    return response.data;
  };
}
