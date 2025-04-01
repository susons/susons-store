"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-center items-center">
        <Image
          className="mr-4"
          src="/images/logo.svg"
          alt="Not found"
          width={48}
          height={48}
          priority
        />{" "}
        {APP_NAME}
      </div>
      <div className="p-6 w-1/3 rounded-lg shadow-mb text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => router.push("/")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
