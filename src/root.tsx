import { type Signal, component$, createContextId, useSignal, useContextProvider } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import "./global.css";

export const ToggleContext = createContextId<Signal<boolean>>('ToggleContext');

export default component$(() => {
  const toggle = useSignal(false);
  useContextProvider(ToggleContext, toggle);
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
