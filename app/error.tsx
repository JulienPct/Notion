"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={"/error.png"}
        height="300"
        width="300"
        alt="Erreur"
        className="dark:hidden"
      />
      <Image
        src={"/error-dark.png"}
        height="300"
        width="300"
        alt="Erreur"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">
        Quelque chose n&apos;a pas fonctionné !
      </h2>
      <Button asChild>
        <Link href="/documents">Retour</Link>
      </Button>
    </div>
  );
};

export default error;