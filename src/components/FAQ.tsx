"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Can we use our own branding?",
        answer: "Yes! With the Custom Branding Edition, the app will have your institute's name, logo, and color scheme on the Play Store."
    },
    {
        question: "Do you support multiple batches and subjects?",
        answer: "Absolutely. You can create unlimited batches and subjects, and assign students to specific groups with controlled access."
    },
    {
        question: "How fast can it be deployed?",
        answer: "The Standard Plan can be ready within 24-48 hours. Custom Branded apps typically take 5-7 days for Play Store approval."
    },
    {
        question: "Do teachers need training?",
        answer: "The interface is designed to be extremely intuitive. Most teachers get comfortable within 10 minutes. We also provide a walkthrough guide."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-purple-200 bg-gray-50/30">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                {openIndex === index ? <Minus className="text-primary flex-shrink-0" /> : <Plus className="text-gray-400 flex-shrink-0" />}
                            </button>
                            <div
                                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 py-6 pt-0 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
