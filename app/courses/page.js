"use client";

import Image from "next/image";
import Link from "next/link";
import { Monitor, Calculator, BrainCircuit, BookOpen, CheckCircle2, ArrowRight } from "lucide-react";

export default function CoursesPage() {
    const courseList = [
        {
            title: "Computer Education",
            desc: "Comprehensive training from basics to advanced levels.",
            icon: <Monitor size={40} />,
            details: ["CCB, CCA, DCA, ADCA", "Tally Prime with GST", "Programming (C, C++, Java, Python)", "Web Development (HTML, CSS, JS)"],
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },
        {
            title: "Proactive Abacus",
            desc: "Unlocking the power of the human brain through speed math.",
            icon: <Calculator size={40} />,
            details: ["Speed Calculation Techniques", "Concentration Improvement", "National Level Competitions", "Mental Math Mastery"],
            img: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98"
        },
        {
            title: "Mnemonic Science",
            desc: "Scientific memory techniques for students and professionals.",
            icon: <BrainCircuit size={40} />,
            details: ["Memory Retention Mastery", "Exam Performance Boost", "Creative Visualization", "Speed Reading Skills"],
            img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8"
        },
        {
            title: "Academic Tuitions",
            desc: "Quality education for all standards and streams.",
            icon: <BookOpen size={40} />,
            details: ["Jr. KG to 12th Standard", "CBSE / ICSE / State Boards", "Science, Commerce, Arts", "Small Batch Sizes"],
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
        }
    ];

    return (
        <div className="bg-[#f5f7fa] py-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#003366]">Our Educational Programs</h1>
                    <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Choose from a wide range of skill-based and academic courses designed by industry experts.
                    </p>
                </div>

                <div className="space-y-12">
                    {courseList.map((course, i) => (
                        <div key={i} className={`bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            <div className="lg:w-1/2 relative min-h-[300px]">
                                <Image
                                    src={course.img}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <div className="text-[#003366] mb-4">{course.icon}</div>
                                <h2 className="text-3xl font-bold text-[#111827] mb-4">{course.title}</h2>
                                <p className="text-gray-600 mb-8">{course.desc}</p>
                                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                    {course.details.map((detail, idx) => (
                                        <div key={idx} className="flex gap-2 items-center text-sm font-medium text-gray-700">
                                            <CheckCircle2 size={16} className="text-[#3b82f6] shrink-0" />
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/contact"
                                    className="btn btn-primary self-start flex items-center gap-2 group"
                                >
                                    Enroll Today
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
