"use server";

import { prisma } from "@/db/prisma";
import { convertToObj } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

export const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToObj(products);
};

// Get single product by slug

export const getProductBySlug = async (slug: string) => {
  return await prisma.product.findFirst({
    where: { slug },
  });
};
