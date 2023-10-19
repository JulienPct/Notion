"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Vos idées, documents et plans. Unifiés. Bienvenue sur{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion est l&apos;espace de travail connecté <br />
        où l&apos;on travaille mieux et plus vite.
      </h3>
      <Button>
        Entrer dans Notion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
