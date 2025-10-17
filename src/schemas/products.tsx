import {z} from "zod";

export const productSchema = z.object({
    id: z.coerce.number().int(),
    name: z.string().min(1, {error: "Name is required"}),
    slug: z.string().min(1, {error: "Slug is required"}).regex(/^[a-z0-9-]+$/, {error: "Only latin letters"}),
    description: z.string().optional(),
    image: z.string().optional(),
    price: z.coerce.number().nonnegative({error: "Price is required and must be non negative"}),
    is_active: z.boolean(),
    is_favorite: z.boolean(),
    sort: z.coerce.number().int().nonnegative({error: "Must be a positive integer"}),
    category_id: z.coerce.number().int().min(1, {error: "Category ID is required"})
})

export type Product = z.infer<typeof productSchema>;