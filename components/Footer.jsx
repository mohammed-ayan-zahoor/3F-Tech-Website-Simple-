"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5 pb-12 mb-8">
                <div className="space-y-6">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold leading-none">3F TECH</span>
                        <span className="text-xs text-gray-400 font-semibold mt-1 uppercase tracking-widest">Solutions</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                        Empowering skills and building careers through technology-driven education and professional services since inception.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 !text-white uppercase text-xs tracking-widest">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-white/50">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 !text-white uppercase text-xs tracking-widest">Our Courses</h4>
                    <ul className="space-y-3 text-sm text-white/50">
                        <li><Link href="/courses" className="hover:text-white transition-colors">Computer Hardware</Link></li>
                        <li><Link href="/courses" className="hover:text-white transition-colors">Web Development</Link></li>
                        <li><Link href="/courses" className="hover:text-white transition-colors">Abacus Training</Link></li>
                        <li><Link href="/courses" className="hover:text-white transition-colors">Academic Tuitions</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 !text-white uppercase text-xs tracking-widest">Our Services</h4>
                    <ul className="space-y-3 text-sm text-white/50">
                        <li><Link href="/it-services" className="hover:text-white transition-colors">Laptops & AMC</Link></li>
                        <li><Link href="/it-services" className="hover:text-white transition-colors">CCTV Monitoring</Link></li>
                        <li><Link href="/career" className="hover:text-white transition-colors">Career Consultancy</Link></li>
                        <li><Link href="/it-services" className="hover:text-white transition-colors">Web Apps</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container flex flex-wrap justify-between items-center gap-4 text-xs text-white/30">
                <p>© 2025 3F Tech Solutions. All rights reserved.</p>
                <div className="flex gap-4 items-center">
                    <a href="#" className="hover:text-white transition-colors"><Facebook size={16} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Instagram size={16} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
                    <span className="ml-4 cursor-pointer hover:text-white">Privacy Policy</span>
                    <span className="ml-2 cursor-pointer hover:text-white">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
