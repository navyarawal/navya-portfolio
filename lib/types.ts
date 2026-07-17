import type { Accent } from "@/data/projects";

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  isPlaceholder?: boolean;
  documentHref?: string;
}

export type { Accent };
