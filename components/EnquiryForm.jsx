"use client";

import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function EnquiryForm({ initialService = "Select an option" }) {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        service: initialService,
        message: ""
    });
    const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: null });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const services = ["Computer Courses", "IT Services", "Degree Programs", "Career Consultancy"];

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.mobile || formData.service === "Select an option") {
            setFormStatus({ ...formStatus, error: "Please fill in all required fields." });
            return;
        }
        setFormStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus({ loading: false, success: true, error: null });
                setFormData({ name: "", mobile: "", service: "Select an option", message: "" });
            } else {
                const data = await response.json();
                const errorMessage = data.error ? `${data.message}: ${data.error}` : data.message;
                throw new Error(errorMessage || 'Something went wrong');
            }
        } catch (error) {
            setFormStatus({ loading: false, success: false, error: error.message });
        }
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-[#003366]">Send an Enquiry</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Full Name *</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#3b82f6] transition-colors text-black placeholder:text-black"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Mobile Number *</label>
                        <input
                            type="tel"
                            placeholder="Mobile"
                            required
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#3b82f6] transition-colors text-black placeholder:text-black"
                        />
                    </div>
                </div>

                <div className="space-y-1 relative">
                    <label className="text-xs font-bold text-gray-500 uppercase">Course / Service *</label>
                    <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full bg-gray-50 border ${isDropdownOpen ? 'border-[#3b82f6] ring-2 ring-[#3b82f6]/10' : 'border-gray-200'} rounded-lg px-4 py-3 cursor-pointer flex justify-between items-center transition-all text-black`}
                    >
                        <span className={formData.service === "Select an option" ? "text-black/60" : "text-black"}>
                            {formData.service}
                        </span>
                        <ChevronRight size={18} className={`text-[#3b82f6] transition-transform duration-300 ${isDropdownOpen ? 'rotate-90' : ''}`} />
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl z-[60] overflow-hidden">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => {
                                        setFormData({ ...formData, service });
                                        setIsDropdownOpen(false);
                                    }}
                                    className="px-4 py-3 hover:bg-[#3b82f6] hover:text-white transition-colors cursor-pointer text-black text-sm font-medium border-b border-gray-50 last:border-b-0"
                                >
                                    {service}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                    <textarea
                        placeholder="How can we help?"
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#3b82f6] transition-colors resize-none text-black placeholder:text-black"
                    ></textarea>
                </div>

                {formStatus.error && <p className="text-red-500 text-sm font-medium">{formStatus.error}</p>}
                {formStatus.success && <p className="text-blue-600 text-sm font-bold bg-blue-50 p-4 rounded-lg border border-blue-100">Message sent successfully! We'll contact you soon.</p>}

                <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full btn btn-primary py-4 mt-4 shadow-lg shadow-[#003366]/20 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                    {formStatus.loading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                        </>
                    ) : (
                        <>
                            Get Free Consultation
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
