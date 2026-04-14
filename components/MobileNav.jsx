"use client";

import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";

const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" },
];

export function MobileNav() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false); // <-- control Sheet open state

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close sheet when route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    if (!mounted) return null;

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <SheetDescription className="sr-only">This is the main menu for navigation.</SheetDescription>
                </SheetHeader>

                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <h1 className="text-2xl md:text-4xl font-semibold">
                            Bhavesh Jethava<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            onClick={() => setOpen(false)} // <-- close menu on click
                            className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
