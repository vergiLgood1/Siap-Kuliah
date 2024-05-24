import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins ({
    subsets: ["latin"],
    weight: ["400", '600']
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                src="/assets/icons/logo.svg"
                width='30'
                height='30'
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/assets/icons/logodark.svg"
                width='30'
                height='30'
                alt="Logo"
                className="hidden dark:block"
            />
            <p className= {cn("font-semibold", font.className)}>
                Siapkuliah
            </p>
        </div>
    )
}