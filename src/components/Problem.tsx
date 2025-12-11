import React from "react";
import { XCircle } from "lucide-react";

const problems = [
    "Too many WhatsApp groups for materials and announcements",
    "Students lose track of lectures and notes",
    "No automated progress tracking",
    "No branded mobile presence",
    "Expensive LMS platforms charging per-student fees",
];

export default function Problem() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Most Coaching Institutes Struggle</h2>
                    <p className="text-lg text-gray-600">Managing a coaching business on WhatsApp and spreadsheeets is holding you back.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {problems.map((problem, index) => (
                        <div key={index} className="bg-red-50/50 border border-red-100 hover:border-red-200 p-6 rounded-2xl transition-all hover:shadow-sm group">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <XCircle className="text-red-500 group-hover:scale-110 transition-transform" size={24} />
                                </div>
                                <p className="text-gray-700 font-medium leading-relaxed">{problem}</p>
                            </div>
                        </div>
                    ))}
                    {/* Filler visual to make grid nice or keep even */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 p-6 rounded-2xl flex items-center justify-center text-center">
                        <p className="text-gray-400 text-sm font-semibold italic">Stop the chaos. <br />Start growing.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
