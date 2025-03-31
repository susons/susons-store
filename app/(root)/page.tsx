import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="Newest arrivals" />
    </>
  );
};

export const metadata: Metadata = {
  title: "Home",
  description: "Susons general store",
};

export default Homepage;
