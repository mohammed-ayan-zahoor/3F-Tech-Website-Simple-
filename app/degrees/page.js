"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

export default function DegreesPage() {
    return (
        <div className="bg-[#f5f7fa] py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#003366]">Higher Education & Degrees</h1>
                    <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        UGC Approved Pathways for your academic and professional elevation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* BVoc Degrees */}
                    <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col">
                        <div className="h-64 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                                alt="B.Voc Degree Programs"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute top-6 left-6 bg-[#003366] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">New Age Choice</div>
                        </div>
                        <div className="p-10 flex flex-col flex-grow">
                            <div className="w-16 h-16 bg-[#003366] rounded-2xl flex items-center justify-center text-white mb-6">
                                <GraduationCap size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-[#111827] mb-6">B.Voc Degree Programs</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Work-integrated degree programs that focus on developing technical skills along with professional education. Perfectly aligned with New Education Policy (NEP).
                            </p>
                            <ul className="space-y-4 mb-10 border-t border-gray-50 pt-8">
                                {["Skill-based Degrees", "Multiple Entry & Exit Points", "Industry Aligned Training", "UGC Recognized Credentials"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <CheckCircle2 size={20} className="text-[#3b82f6]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="mt-auto btn btn-primary w-full text-center flex justify-center items-center gap-2 group">
                                Download Brochure
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Traditional & Distance */}
                    <div className="bg-[#003366] rounded-[2.5rem] shadow-xl overflow-hidden text-white flex flex-col">
                        <div className="h-64 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8"
                                alt="Online Learning"
                                fill
                                className="object-cover opacity-80"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute top-6 left-6 bg-white text-[#003366] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">Flexible Learning</div>
                        </div>
                        <div className="p-10 flex flex-col flex-grow">
                            <div className="w-16 h-16 bg-[#003366] rounded-2xl flex items-center justify-center text-white mb-6">
                                <GraduationCap size={32} />
                            </div>
                            <h2 className="text-3xl font-bold mb-6 !text-white">Regular & Distance Education</h2>
                            <p className="text-white/70 mb-8 leading-relaxed">
                                Empowering students to complete their degrees without pausing their careers. We provide admission guidance for BA, BCom, BSc, MA, MCom, and MSc.
                            </p>
                            <ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
                                {["UGC-DEB Approved Universities", "Online Examinations Available", "Weekend Contact Classes", "Comprehensive Study Material"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                                        <CheckCircle2 size={20} className="text-[#3b82f6]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="mt-auto btn bg-white text-[#003366] hover:bg-gray-100 w-full text-center flex justify-center items-center gap-2 group font-bold">
                                Check Eligibility
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
