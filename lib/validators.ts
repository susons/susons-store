import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

export const currency = z.string().refine(value => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))), "Price must have exactly 2 decimals")

// for inserting products
export const insertProductSchema = z.object({
    name: z.string().min(3, "Name must be atleast 3 characteurs"),
    slug: z.string().min(3, "Slug must be atleast 3 characteurs"),
    category: z.string().min(3, "Category must be atleast 3 characteurs"),
    brand: z.string().min(3, "Brand must be atleast 3 characteurs"),
    description: z.string().min(3, "Description must be atleast 3 characteurs"),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, " Product must have atleast 1 image"),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency
})