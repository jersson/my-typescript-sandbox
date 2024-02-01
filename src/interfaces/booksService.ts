import { Book } from "@/models/book";

export default interface BooksService {
  getBookById: (bookId: number) => Promise<Book>;
}
