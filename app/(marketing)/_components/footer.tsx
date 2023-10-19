import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            <Logo />
            <div className="md:ml-auto w-full justify-betweed md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant={"ghost"} size={"sm"}>
                    Politique de confidentialité
                </Button>
                <Button variant={"ghost"} size={"sm"}>
                    Conditions d&apos;utilisation
                </Button>
            </div>
        </div>
    )
}