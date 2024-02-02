import axios from "axios";

import { Book } from "../models/book";
import BooksService from "../interfaces/booksService";

import { API_URL, ENDPOINT_BOOKS } from "../config";

export default class ExternalBookService implements BooksService {
  getBookById = async (bookId: number): Promise<Book> => {
    const url = `${API_URL}${ENDPOINT_BOOKS}/${bookId}`;
    const response = await axios.get<Book>(url);

    return response.data;
  };
}
