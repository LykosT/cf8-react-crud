import {z} from zod;

const API_URL = import.meta.env.VITE_API_URL;
const tenantId = import.meta.env.VITE_TENANT_ID;

export const productSchema = z.object({
    id: z.coerce.number().int(),
    name: z.string().min(1, {error: "Name is required"}),
    slug: z.string().min(1, {error: "Slug is required"}).regex(/^[a-z0-9-]+$/, {error: "Only latin letters"}),

})