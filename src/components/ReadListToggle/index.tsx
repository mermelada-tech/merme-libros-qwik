import { component$, useContext } from '@builder.io/qwik';
import { ToggleContext } from '~/root';

export const ReadListToggle = component$(() => {
  const toggle = useContext(ToggleContext);
  return (
    <button
      type="button"
      class="fixed z-50 top-4 h-10 right-0 mt-4 mr-4 text-white text-sm font-medium uppercase bg-pink-500 py-2 px-4 rounded-lg hover:bg-gradient-to-br from-pink-200 to-pink-900"
      onClick$={() => toggle.value = !toggle.value}
    >
      Books List
    </button>
  );
});