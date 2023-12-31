import { component$ } from "@builder.io/qwik";
import { CustomImage } from "../CustomImage";

export interface BookProps {
  book: {
    title: string;
    cover: string;
    genre: string;
    author: {
      name: string;
    };
    year: number;
  };
}

export const Book = component$<BookProps>(({ book }) => {
  const { title, author, year } = book;
  return (
    <div class="flex flex-col items-center bg-white rounded-lg">
      <div class="relative">
        <CustomImage
          cover="./images/17245.jpg"
          title={title}
          height={315}
          width={475}
        />
      </div>
      <div class="flex flex-col justify-between gap-2 p-4 leading-normal">
        <h3 class="text-gray-900 font-medium text-lg">{title}</h3>
        <p class="text-gray-500">{author.name}</p>
        <p class="text-gray-500">{year}</p>
        <button
          type="submit"
          class="inline-flex items-center uppercase text-white w-32 bg-pink-500 py-2 px-4 rounded-lg hover:bg-gradient-to-br from-pink-200 to-pink-900"
        >
          Add to list
        </button>
      </div>
    </div>
  );
});
