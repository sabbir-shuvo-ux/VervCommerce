import { z } from "zod";

export const CreateProductSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters." })
    .max(100, { message: "Title must be under 100 characters." }),

  price: z.coerce.number().min(1, "Price must be at least 1"),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),

  category: z.string().min(1, { message: "Category is required." }),

  imageUrl: z.string().url({ message: "Image URL must be a valid URL." }),
});

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;
