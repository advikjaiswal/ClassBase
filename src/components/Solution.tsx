import React from "react";
import { Video, FileText, Calculator, Upload, Users, BarChart3, GraduationCap, LayoutDashboard } from "lucide-react";

const features = [
    {
        icon: <Video className="w-6 h-6" />,
        title: "Upload Lectures Easily",
        description: "Supports YouTube Unlisted links and direct uploads. Organize by subject and chapter.",
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Advanced Quizzes",
        description: "Create MCQ, multi-correct, and numerical type questions with auto-grading.",
    },
    {
        icon: <Calculator className="w-6 h-6" />,
        title: "Built-in Scientific Calculator",
        description: "Students can use a fully featured calculator directly within the app during tests.",
    },
    {
        icon: <Upload className="w-6 h-6" />,
        title: "Material & PDF Sharing",
        description: "Share notes, assignments, and study materials instantly with your batches.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Student & Batch Management",
        description: "Organize students into batches. Control access to content easily.",
    },
    {
        icon: <LayoutDashboard className="w-6 h-6" />,
        title: "Teacher Dashboard",
        description: "A powerful admin panel to manage content, view stats, and control your app.",
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Analytics & Performance",
        description: "Track student performance, test scores, and attendance automatically.",
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Branded Mobile App",
        description: "Give students a premium learning experience with your own branded app.",
    },
];

export default function Solution() {
    return (
        <section id="features" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Features</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">Everything You Need. In One App.</h2>
                    <p className="text-lg text-gray-600">Built specifically for the needs of modern coaching institutes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-purple-100/50 hover:border-purple-100 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
