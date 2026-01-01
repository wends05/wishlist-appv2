import z from "zod";

export const SignUpSchema = z
  .object({
    username: z.string().min(4),
    email: z.email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string()
  })
  .refine((val) => val.password === val.confirmPassword, {
    path: ["confirmPassword"],
    error: "Password and Confirm Password should be the same",
  });

export type SignUpSchema = z.infer<typeof SignUpSchema>;
