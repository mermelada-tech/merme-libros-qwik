import { $, component$ } from "@builder.io/qwik";
import type { ImageTransformerProps } from "qwik-image";
import { Image, useImageProvider } from "qwik-image";

export interface CustomImageProps {
  cover: string;
  title: string;
  height: number;
  width: number;
}

export const CustomImage = component$<CustomImageProps>(
  ({ cover, title, height, width }) => {
    const imageTransformer$ = $(
      ({ src, width, height }: ImageTransformerProps): string => {
        // Here you can set your favorite image loaders service
        return `https://cdn.builder.io/api/v1/${src}?h=${height}&w=${width}&format=webp`;
      }
    );

    // Global Provider (required)
    useImageProvider({
      // You can set this prop to overwrite default values [3840, 1920, 1280, 960, 640]
      resolutions: [1920],
      imageTransformer$,
    });
    return (
      <Image
        layout="fixed"
        objectFit="cover"
        width={width}
        height={height}
        src={cover}
        alt={title}
        placeholder={title}
      />
    );
  }
);
