import z from "zod";

/**
 * Make A Zod Schema with the ID field added
 */
export function withID<T extends z.ZodRawShape>(schema: T) {
  return z.object(schema).extend({
    _id: z.string().optional(),
  });
}

/**
 * Include createdAt and updatedAt fields in a Zod Schema
 */
export function withTimestamps<T extends z.ZodRawShape>(schema: T) {
  return z.object(schema).extend({
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date(),
  });
}
