"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 border-b border-white/10
        ${isSticky ? "bg-black/70 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-8 xl:py-9"}
      `}>
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-2xl md:text-3xl font-semibold">
                        Bhavesh Jethava<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;