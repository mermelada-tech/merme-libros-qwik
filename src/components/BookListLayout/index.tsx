import { component$, useContext } from '@builder.io/qwik';
import { ReadListContext } from "~/root";

export const BookListLayout = component$(() => {
  const readListContext = useContext(ReadListContext);
  const { isToggleOpen } = readListContext;
  return (
    <aside
      hidden={!isToggleOpen.value}
      class="fixed z-50 right-0 top-20 h-1/2 w-1/2 border-8 border-pink-700 bg-neutral-900 overflow-y-auto"
    >
      <p class="text-white font-bold text-lg mt-4 text-center">
        You have no books in your list
      </p>
    </aside>
  );
});