export type ImagesResponse = {
  data: Data;
  meta: Meta;
};

export type Data = {
  id: number;
  attributes: DataAttributes;
};

export type DataAttributes = {
  createdAt: Date;
  updatedAt: Date;
  images: Images;
};

export type Images = {
  data: Datum[];
};

export type Datum = {
  id: number;
  attributes: DatumAttributes;
};

export type DatumAttributes = {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
};

export type Formats = {
  thumbnail: Thumbnail;
};

export type Thumbnail = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};

export type Meta = {};
