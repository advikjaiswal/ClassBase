import React from "react";
import { Quote } from "lucide-react";

export default function Testimonial() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted Results</h2>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center text-center relative">
                    <Quote className="text-purple-100 absolute top-8 left-8 w-16 h-16" />

                    <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed z-10 relative">
                        &quot;Already deployed in production for coaching students. The response has been fantastic. It simplified our entire lecture delivery process.&quot;
                    </p>

                    <div className="mt-8 z-10">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                        <h4 className="font-bold text-gray-900">Director</h4>
                        <p className="text-sm text-gray-500">Leading Coaching Institute, New Delhi</p>
                    </div>

                    <div className="mt-8 text-sm text-gray-400">
                        Additional testimonials coming soon.
                    </div>
                </div>
            </div>
        </section>
    );
}
