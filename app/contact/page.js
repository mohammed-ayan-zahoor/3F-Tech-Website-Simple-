"use client";

import EnquiryForm from "@/components/EnquiryForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="py-20 bg-[#f5f7fa]">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#003366]">Contact Us</h1>
                    <div className="w-20 h-1 bg-[#003366] mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Have questions about our programs or services? We're here to help you build your future.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-[#3b82f6]">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#003366]">Visit Us</h3>
                        <p className="text-gray-500 text-sm">Main Market Road, Opp. SBI, District Center, Area Pin-00000</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-[#3b82f6]">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#003366]">Call Us</h3>
                        <p className="text-gray-500 text-sm">+91 9488842786</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-[#3b82f6]">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-[#003366]">Email Us</h3>
                        <p className="text-gray-500 text-sm">info@3ftech.in</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <EnquiryForm />
                </div>
            </div>
        </div>
    );
}
