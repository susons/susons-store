import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

const Homepage = () => {
  return (
    <>
      homepage<Button>button</Button>
    </>
  );
};

export const metadata: Metadata = {
  title: "Home",
  description: "Susons general store",
};

export default Homepage;
