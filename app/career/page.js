"use client";

import Image from "next/image";
import Link from "next/link";
import { UserCheck, Target, FileText, Handshake, CheckCircle2, ArrowRight } from "lucide-react";

export default function CareerPage() {
    return (
        <div className="bg-white py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#003366]">Career Consultancy & Growth</h1>
                    <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Navigating your path from education to the boardroom. Our experts help you find your true north.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[#111827]">Don't just find a job. Build a Career.</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The professional landscape is evolving faster than ever. 3F Tech Solutions provides a dedicated Career Cell that mentors students and professionals on how to stay relevant and competitive.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: "Personalized Counselling", text: "One-on-one sessions to understand your strengths and interests.", icon: <UserCheck /> },
                                { title: "Resume Building", text: "Crafting professional CVs that bypass ATS and catch recruiter eyes.", icon: <FileText /> },
                                { title: "Job Network", text: "Direct corporate tie-ups for interns and full-time employment.", icon: <Handshake /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-[#f5f7fa] rounded-xl flex items-center justify-center text-[#003366] shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/contact" className="btn btn-primary inline-flex px-10 py-4 shadow-xl shadow-[#003366]/20">
                            Book a Counselling Session
                        </Link>
                    </div>
                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1">
                        <Image
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                            alt="Career Counselling"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Process Section */}
                <div className="bg-[#003366] rounded-[4rem] px-12 py-20 text-white">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Our 4-Step Career Magic</h2>
                        <div className="w-20 h-1 bg-white/20 mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Our 4-Step Career Magic Cards */}
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your current skills and future aspirations." },
                            { step: "02", title: "Skill Map", desc: "Identifying the gap between you and your dream role." },
                            { step: "03", title: "Training", desc: "Expert intervention through our certified courses." },
                            { step: "04", title: "Placement", desc: "Connecting you with the right industry partners." }
                        ].map((item, i) => (
                            <div key={i} className="relative group p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-all duration-300">
                                <span className="text-8xl font-black text-white/5 absolute -top-6 -left-2 group-hover:text-white/10 transition-colors pointer-events-none">
                                    {item.step}
                                </span>
                                <h4 className="text-2xl font-bold mb-3 relative z-10 !text-white leading-tight">{item.title}</h4>
                                <p className="text-white/80 text-sm leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
