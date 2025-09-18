import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(5, { message: 'Username minimal 5 karakter' }),
  password: z.string().min(8, { message: 'Password minimal harus 8 karakter' }),
});

export type LoginForm = z.infer<typeof loginSchema>;