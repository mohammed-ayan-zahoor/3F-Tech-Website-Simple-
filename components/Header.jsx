"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail, MessageCircle, Search, Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            alert(`Searching for: ${searchQuery}\n(In a real app, this would filter courses or redirect to a search page)`);
            setSearchQuery("");
        }
    };

    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="bg-[#003366] text-white py-2 text-sm">
                <div className="container flex flex-wrap justify-between items-center gap-4">
                    <div className="flex gap-4">
                        <a href="tel:+919488842786" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                            <Phone size={14} />
                            Call: +91 9488842786
                        </a>
                        <a href="mailto:3ftechsolutions@gmail.com" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                            <Mail size={14} />
                            Email: 3ftechsolutions@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a href="https://wa.me/919488842786" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 flex items-center gap-1 transition-colors">
                            <MessageCircle size={14} /> WhatsApp
                        </a>

                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`bg-white py-4 border-b sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
                <div className="container flex justify-between items-center">
                    <Link href="/" className="flex flex-col">
                        <span className="text-2xl font-bold text-[#003366] leading-none tracking-tight">3F TECH SOLUTIONS</span>
                        <span className="text-xs text-gray-500 font-semibold tracking-widest mt-1 uppercase">Education | Technology | Careers</span>
                    </Link>
                    <ul className="hidden lg:flex gap-6 text-sm font-semibold text-gray-700">
                        <li><Link href="/" className={`transition-colors hover:text-[#003366] ${pathname === "/" ? "text-[#3b82f6]" : ""}`}>Home</Link></li>
                        <li><Link href="/about" className={`transition-colors hover:text-[#003366] ${pathname === "/about" ? "text-[#3b82f6]" : ""}`}>About Us</Link></li>
                        <li><Link href="/courses" className={`transition-colors hover:text-[#003366] ${pathname === "/courses" ? "text-[#3b82f6]" : ""}`}>Courses</Link></li>
                        <li><Link href="/it-services" className={`transition-colors hover:text-[#003366] ${pathname === "/it-services" ? "text-[#3b82f6]" : ""}`}>IT Services</Link></li>
                        <li><Link href="/career" className={`transition-colors hover:text-[#003366] ${pathname === "/career" ? "text-[#3b82f6]" : ""}`}>Career Services</Link></li>
                        <li><Link href="/degrees" className={`transition-colors hover:text-[#003366] ${pathname === "/degrees" ? "text-[#3b82f6]" : ""}`}>Degrees</Link></li>
                        <li><Link href="/contact" className={`transition-colors hover:text-[#003366] ${pathname === "/contact" ? "text-[#3b82f6]" : ""}`}>Contact</Link></li>
                    </ul>
                    <button className="lg:hidden text-[#003366]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 py-4" : "max-h-0"}`}>
                    <ul className="container flex flex-col gap-4 text-sm font-semibold text-gray-700">
                        <li><Link href="/" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-[#003366] ${pathname === "/" ? "text-[#3b82f6]" : ""}`}>Home</Link></li>
                        <li><Link href="/about" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-[#003366] ${pathname === "/about" ? "text-[#3b82f6]" : ""}`}>About Us</Link></li>
                        <li><Link href="/courses" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-[#003366] ${pathname === "/courses" ? "text-[#3b82f6]" : ""}`}>Courses</Link></li>
                        <li><Link href="/it-services" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-[#003366] ${pathname === "/it-services" ? "text-[#3b82f6]" : ""}`}>IT Services</Link></li>
                        <li><Link href="/career" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-[#003366] ${pathname === "/career" ? "text-[#3b82f6]" : ""}`}>Career Services</Link></li>
                        <li><Link href="/degrees" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-[#003366] ${pathname === "/degrees" ? "text-[#3b82f6]" : ""}`}>Degrees</Link></li>
                        <li><Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-[#003366] ${pathname === "/contact" ? "text-[#3b82f6]" : ""}`}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
