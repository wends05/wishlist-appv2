import { Graffle } from "graffle";

export const Date = Graffle.Scalars.create("Date", {
  // Convert from API string -> JS Date object
  decode: (value: string) => new globalThis.Date(value),

  // Convert from JS Date object -> API string
  encode: (value: globalThis.Date) => value.toISOString(),
});

export const JSON = Graffle.Scalars.create("JSON", {
  decode: (value: unknown): any => value,
  encode: (value: unknown): any => value,
});
