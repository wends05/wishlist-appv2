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
export function withTimestamps<T extends z.ZodObject>(schema: T) {
  return schema.extend({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  });
}

/**
 * Omits the ID field from a Zod Schema and c
 */
