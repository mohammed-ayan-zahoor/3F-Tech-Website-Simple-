"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  ArrowRight, ChevronRight, ChevronLeft, CheckCircle2, Zap,
  Award, ShieldCheck, Monitor, Calculator,
  BrainCircuit, BookOpen, GraduationCap, Globe,
  Server, Cctv, Home as HomeIcon, Settings,
  Target, UserCheck, Handshake, Star, X, Search
} from "lucide-react";

export default function Home() {
  // Gallery Modal State
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const { scrollLeft, clientWidth } = galleryRef.current;
      const scrollAmount = clientWidth * 0.8;
      galleryRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center bg-[#f5f7fa] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#003366" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>

          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#111827] font-bold leading-tight">
                Empowering Skills.<br />
                <span className="text-gray-500">Building Careers.</span><br />
                Delivering Technology.
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                From computer education to advanced IT services — everything under one roof. We bridge the gap between learning and employment.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/courses" className="btn btn-primary px-8">Explore Courses</Link>
                <Link href="/contact" className="btn bg-white border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white px-8">Talk to Career Expert</Link>
              </div>
            </div>
            <div className="hidden lg:block relative h-[450px] rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                alt="Students learning in a modern classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Summary */}
        <section className="bg-white py-24">
          <div className="container grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                alt="3F Tech Solutions Classroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#111827]">About 3F Tech Solutions</h2>
              <p className="text-gray-600 leading-relaxed">
                3F Tech Solutions is a multi-disciplinary education and technology organization dedicated to skill development, academic excellence, and professional growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Govt. Oriented", text: "Industry recognized certifications.", icon: <CheckCircle2 size={24} className="text-[#003366]" /> },
                  { title: "Practical Training", text: "Hands-on learning approach.", icon: <Zap size={24} className="text-[#003366]" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#003366] font-bold hover:underline">
                Learn more about our mission <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section 1: Education */}
        <section className="bg-[#f5f7fa] py-24">
          <div className="container">
            <div className="text-center mb-12">
              <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Computer Courses", desc: "CCB, CCA, DCA, ADCA, Tally with GST, Programming & Web Dev.", icon: <Monitor size={32} /> },
                { title: "Proactive Abacus", desc: "Speed Math, Brain Development and National Competitions.", icon: <Calculator size={32} /> },
                { title: "Mnemonic Science", desc: "Memory Techniques, Concentration and Exam Performance Boost.", icon: <BrainCircuit size={32} /> },
                { title: "Academic Tuitions", desc: "Jr. KG to 12th Standard (CBSE, ICSE, State) - All Streams.", icon: <BookOpen size={32} /> }
              ].map((card, i) => (
                <div key={i} className="card hover:-translate-y-1 transition-transform group">
                  <div className="text-[#003366] mb-4 group-hover:scale-110 transition-transform inline-block">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{card.desc}</p>
                  <Link href="/courses" className="text-[#003366] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    View Details
                    <ChevronRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section 2: Degrees */}
        <section className="bg-white py-24">
          <div className="container">
            <div className="text-center mb-12">
              <span className="text-[#003366] font-bold tracking-widest uppercase text-sm">Higher Learning</span>
              <h2 className="text-4xl font-bold mt-2 text-[#111827]">Degree Programs</h2>
              <p className="text-gray-500 mt-2">UGC Approved Higher Education Pathways</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "BVoc Degree Programs", items: ["Skill-based Degrees", "Industry Aligned", "Practical Curriculum"], link: "/degrees" },
                { title: "Regular / Distance", items: ["BA | BCom | BSc", "MA | MCom | MSc", "Admission Guidance"], link: "/degrees" }
              ].map((program, i) => (
                <div key={i} className="bg-[#003366] text-white p-8 rounded-2xl relative shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 !text-white">{program.title}</h3>
                  <ul className="space-y-4 mb-8">
                    {program.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-white/50" />
                        <span className="opacity-90">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={program.link} className="block text-center w-full bg-white text-[#003366] font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Explore Programs
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section 3: IT Services */}
        <section className="bg-[#f5f7fa] py-24">
          <div className="container">
            <div className="text-center mb-16">
              <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Laptops & Sales", desc: "Premium Laptops, Customized Desktops & Expert Repairs.", icon: <Monitor size={32} /> },
                { title: "Web Development", desc: "Business Websites, Billing Systems & Custom Web Apps.", icon: <Globe size={32} /> },
                { title: "Networking", desc: "LAN/WAN Setup, Server Design & Data Maintenance.", icon: <Server size={32} /> },
                { title: "CCTV & Security", desc: "AI-powered Surveillance and Remote Monitoring.", icon: <Cctv size={32} /> },
                { title: "Home Automation", desc: "Smart Security & IoT Solutions for modern homes.", icon: <HomeIcon size={32} /> },
                { title: "Consultancy", desc: "Strategic IT mapping for business infrastructure.", icon: <Settings size={32} /> }
              ].map((service, i) => (
                <Link key={i} href="/it-services" className="bg-white border border-gray-100 p-8 rounded-xl hover:shadow-xl transition-all group">
                  <div className="text-[#003366] mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#111827]">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section 4: Careeer */}
        <section className="bg-white py-24">
          <div className="container">
            <div className="bg-[#003366] rounded-[3rem] p-12 overflow-hidden relative text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 !text-white">Career Services</h2>
                  <p className="text-white/70 text-lg mb-8">
                    We don't just teach; we shape careers. Our dedicated career cell helps students and professionals reach their potential.
                  </p>
                  <Link href="/career" className="btn btn-secondary px-8 py-4">
                    Book Counselling Session
                  </Link>
                </div>
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl skew-x-1">
                  <Image
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                    alt="Career"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white py-24 border-t border-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#111827]">Why Choose 3F Tech Solutions?</h2>
              <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "One-stop Hub", desc: "Education & IT services combined.", icon: <Target className="text-[#003366]" /> },
                { title: "Expert Faculty", desc: "Experienced teachers & engineers.", icon: <UserCheck className="text-[#003366]" /> },
                { title: "Practical Focus", desc: "Real-world projects and training.", icon: <Award className="text-[#003366]" /> },
                { title: "Career Growth", desc: "Strategic placement support.", icon: <Handshake className="text-[#003366]" /> }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 space-y-4 hover:bg-[#f5f7fa] rounded-3xl transition-colors">
                  <div className="w-16 h-16 bg-[#f5f7fa] rounded-full flex items-center justify-center mx-auto border-2 border-white shadow-sm">{item.icon}</div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials & Gallery */}
        <section className="py-24 bg-[#f5f7fa]">
          <div className="container overflow-hidden">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#111827]">Gallery & Success Stories</h2>
              <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="relative group/gallery">
              <div ref={galleryRef} className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
                {[
                  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
                  "https://images.unsplash.com/photo-1531482615713-2afd69097998",
                  "https://images.unsplash.com/photo-1543269865-cbf427effbad",
                  "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                ].map((img, i) => (
                  <div key={i} className="min-w-[300px] h-[400px] relative rounded-3xl overflow-hidden shadow-xl snap-center cursor-pointer group" onClick={() => setSelectedImage(img)}>
                    <Image
                      src={img}
                      alt="Gallery"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-[#003366]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Search className="text-white" size={40} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => scrollGallery("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#003366] opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-[#3b82f6] hover:text-white z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scrollGallery("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#003366] opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-[#3b82f6] hover:text-white z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#003366] py-20">
          <div className="container text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to start your journey?</h2>
            <p className="text-white/80 text-xl mb-10">We have everything you need to succeed in the digital age.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="btn bg-[#003366] text-white hover:bg-[#002244] px-12 py-4">Contact Us Today</Link>
              <Link href="/courses" className="btn bg-white text-[#003366] hover:bg-gray-100 px-12 py-4">Browse Courses</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Gallery Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full h-[80vh]">
            <Image
              src={selectedImage}
              alt="Gallery Full View"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button className="absolute -top-12 right-0 text-white"><X size={32} /></button>
          </div>
        </div>
      )}
    </div>
  );
}
