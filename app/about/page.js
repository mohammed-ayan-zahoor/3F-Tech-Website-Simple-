"use client";

import Image from "next/image";
import { CheckCircle2, Zap, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-20 bg-[#003366] text-white">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">About 3F Tech Solutions</h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        A multi-disciplinary organization dedicated to skill development, academic excellence, and professional growth.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="Team working"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#111827]">Our Mission & Vision</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            At 3F Tech Solutions, we believe that education and technology are the two most powerful tools to change lives. Our mission is to provide high-quality, practical-oriented training that bridges the gap between traditional learning and global industrial demands.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-xl">Our Vision</h4>
                                <p className="text-sm text-gray-500">To be the most trusted one-stop hub for skill advancement and technological services in the region.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-xl">Global Standards</h4>
                                <p className="text-sm text-gray-500">Integrating world-class methodologies like Mnemonic Science and Proactive Abacus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-[#f5f7fa]">
                <div className="container text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#003366]">What Makes Us Unique?</h2>
                    <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Practical First", text: "We focus 80% on hands-on practical execution and only 20% on theory.", icon: <Zap /> },
                        { title: "Industry Mentors", text: "Learn from professionals who are currently working in the IT sector.", icon: <UserCheck /> },
                        { title: "Certification", text: "Govt. oriented certificates that carry weight in your professional portfolio.", icon: <Award /> },
                        { title: "Long-term Support", text: "Our relationship doesn't end with a course; we support you throughout your career.", icon: <ShieldCheck /> }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-600 mb-4">{item.icon}</div>
                            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

// Icons for the About page
function Target(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
    );
}

function Globe(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
    );
}

function UserCheck(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>
    );
}
