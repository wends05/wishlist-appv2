import type { Types } from "mongoose";

export type DocumentType<T> = Omit<T, "_id"> & {
  _id: Types.ObjectId;
};
