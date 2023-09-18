import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Book } from "~/components/Book";
import { books } from "~/data/books";
import { BookListLayout } from "~/components/BookListLayout";
import { ReadListToggle } from "~/components/ReadListToggle";


export default component$(() => {
  return (
    <div class="grid grid-cols-3 place-content-center md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {books.map((book) => (
        <Book key={book.title} book={book} />
      ))}
    <ReadListToggle />
    <BookListLayout />
    </div>
    
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
