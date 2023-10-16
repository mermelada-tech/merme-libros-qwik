import type { QRL } from "@builder.io/qwik";
import {
  type Signal,
  component$,
  createContextId,
  useSignal,
  useContextProvider,
  $,
  useStore,
} from "@builder.io/qwik";
import { books } from "./data/books";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import "./global.css";

type Book = {
  title: string;
  cover: string;
  author: {
    name: string;
  };
  year: number;
};

type BookList = {
  books: Book[];
  readList: Book[];
};

type ReadListContextType = {
  bookList: BookList;
  isToggleOpen: Signal<boolean>;
  addBookToList: QRL<(book: Book) => void>;
  removeBookFromList: QRL<(book: Book) => void>;
};

export const ReadListContext =
  createContextId<ReadListContextType>("ReadListContext");

export default component$(() => {
  const isToggleOpen = useSignal(false);
  const bookList = useStore<BookList>({
    books: books,
    readList: [],
  });
  const bookStore = useStore<ReadListContextType>({
    bookList,
    isToggleOpen,
    addBookToList: $((book: Book) => {
      isToggleOpen.value = true;
      bookList.books = bookList.books.filter(
        (b: Book) => b.title !== book.title
      );
      bookList.readList = [...bookList.readList, book];
    }),
    removeBookFromList: $((book: Book) => {
      isToggleOpen.value = false;
      bookList.readList = bookList.readList.filter(
        (b: Book) => b.title !== book.title
      );
      bookList.books = [...bookList.books, book];
    }),
  });

  useContextProvider(ReadListContext, bookStore);
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
