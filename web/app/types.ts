
export interface SanityImageAsset {
  _ref: string;
  _type: "reference";
}

export interface SanityImage {
  _type: "image";
  asset: SanityImageAsset;
}

export interface PortableTextSpan {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}



export interface Event {
  title: string;
  location: string;
  date: string; // ISO 8601 string, e.g. "2025-04-16T20:00:00.000Z"
  body: string;
  image: SanityImage;
}

