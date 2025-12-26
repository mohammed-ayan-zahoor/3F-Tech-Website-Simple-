"use client";

import Image from "next/image";
import Link from "next/link";
import { Monitor, Globe, Server, Cctv, Home as HomeIcon, Settings, ArrowRight } from "lucide-react";

export default function ITServicesPage() {
    const services = [
        { title: "Computer Sales & Services", desc: "Premium Laptops, Customized Desktops, Accessories & Expert AMC.", icon: <Monitor size={40} />, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
        { title: "Website & Web App Dev", desc: "Modern Business Websites, Billing/ERP Systems & Custom SaaS solutions.", icon: <Globe size={40} />, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
        { title: "Networking Architecture", desc: "Reliable LAN/WAN Setup, Secure Server Design and Cloud infrastructure.", icon: <Server size={40} />, img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8" },
        { title: "Smart Surveillance (CCTV)", desc: "Advanced AI-powered monitoring, night vision & remote access setup.", icon: <Cctv size={40} />, img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9" },
        { title: "Automated Solutions", desc: "Smart Home & Office Automation, Security & IoT device integration.", icon: <HomeIcon size={40} />, img: "https://images.unsplash.com/photo-1558002038-1055907df827" },
        { title: "Infrastructure Consultancy", desc: "Scaling advice, security audits and enterprise infrastructure planning.", icon: <Settings size={40} />, img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572" }
    ];

    return (
        <div className="bg-white py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#003366]">IT & Technology Services</h1>
                    <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Professional technology solutions to power your business and secure your environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="group bg-[#f5f7fa] rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="relative h-48">
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute bottom-4 left-6 text-white bg-[#003366] p-3 rounded-xl">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[#111827] mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                                <Link href="/contact" className="text-[#003366] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Request Quote
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-[#003366] rounded-[3rem] p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4 !text-white">Need a Custom Solution?</h2>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">Our engineers are ready to design a technical map tailored specifically for your business growth.</p>
                    <Link href="/contact" className="btn bg-white text-[#003366] px-10 py-4 hover:bg-gray-100 transition-colors">Talk to an IT Expert</Link>
                </div>
            </div>
        </div>
    );
}
