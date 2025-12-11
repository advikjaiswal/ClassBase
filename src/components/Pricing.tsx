import React from "react";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Simple Pricing</h2>
                    <p className="text-lg text-gray-600">Transparent costs. No hidden fees. Grow without limits.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Starter Plan */}
                    <div className="relative p-8 rounded-3xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Starter Plan</h3>
                            <p className="text-gray-500 mt-2">Perfect for growing institutes.</p>
                        </div>
                        <div className="mb-8">
                            <p className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-gray-900">₹29,999</span>
                                <span className="text-gray-500 font-medium">setup</span>
                            </p>
                            <p className="text-gray-600 mt-2">+ ₹1,499 / month hosting & updates</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Complete LMS Features",
                                "Teacher Dashboard",
                                "Unlimited Students",
                                "Standard Quiz Features",
                                "No Per-Student Fees"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <Check size={20} className="text-primary" /> {feat}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://wa.me/919868260790?text=I%20want%20to%20start%20with%20the%20Starter%20Plan"
                            className="w-full py-4 text-center rounded-xl border border-gray-200 text-gray-900 font-semibold hover:border-primary hover:text-primary transition-colors"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Custom Branding Edition */}
                    <div className="relative p-8 rounded-3xl border border-primary/20 bg-purple-50 hover:shadow-xl transition-all duration-300 flex flex-col ring-1 ring-primary/10">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            MOST POPULAR
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900">Custom Branding</h3>
                            <p className="text-gray-500 mt-2">Your own white-label apps.</p>
                        </div>
                        <div className="mb-8">
                            <p className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-gray-900">₹75,000+</span>
                                <span className="text-gray-500 font-medium">one-time</span>
                            </p>
                            <p className="text-gray-600 mt-2">Tailored to your needs</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Everything in Starter",
                                "Your Own Play Store App",
                                "Custom Loogo & Branding",
                                "Priority Support",
                                "Advanced Analytics",
                                "No Per-Student Fees"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-900 font-medium">
                                    <Check size={20} className="text-primary" /> {feat}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="https://wa.me/919868260790?text=I%20want%20the%20Custom%20Branding%20Edition"
                            className="w-full py-4 text-center rounded-xl bg-primary text-white font-bold hover:bg-primary-hover shadow-lg shadow-purple-200 transition-all"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
