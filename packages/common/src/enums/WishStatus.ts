import z from "zod";

export const WishStatus = z.enum(["open", "pending", "delivering", "fulfilled"]);
