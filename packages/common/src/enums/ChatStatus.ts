import z from "zod";

export const ChatStatus = z.enum(["ACCEPTED", "PENDING", "CLOSED"]);
