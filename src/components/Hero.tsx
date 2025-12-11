import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-primary text-sm font-semibold mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Already deployed for real students
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6 animate-in slide-in-from-bottom-5 fade-in duration-1000 fill-mode-both delay-100">
                            A Complete <span className="text-primary">Branded LMS App</span> for Coaching Institutes
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in slide-in-from-bottom-6 fade-in duration-1000 fill-mode-both delay-200">
                            Upload lectures, create quizzes, track student progress, and manage your entire institute in one app.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in slide-in-from-bottom-8 fade-in duration-1000 fill-mode-both delay-300">
                            <a
                                href="https://wa.me/919868260790?text=I%E2%80%99m%20interested%20in%20ClassBase%20demo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-200/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Book a Free Demo <ArrowRight size={20} />
                            </a>
                            <Link
                                href="#screenshots"
                                className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-purple-100 hover:bg-purple-50 rounded-xl font-semibold transition-all flex items-center justify-center"
                            >
                                View Screenshots
                            </Link>
                        </div>
                    </div>

                    {/* Screenshot Mockup */}
                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-500">
                        <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[640px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-900/5">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-2xl z-20"></div>

                            {/* Placeholder Content representing App UI */}
                            <div className="w-full h-full bg-white flex flex-col pt-10">
                                {/* App Header */}
                                <div className="px-5 py-3 flex justify-between items-center border-b border-gray-50">
                                    <div className="h-4 w-6 bg-gray-200 rounded"></div>
                                    <div className="h-4 w-24 bg-purple-100 rounded-full"></div>
                                    <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
                                </div>

                                {/* Scrollable Content */}
                                <div className="flex-1 p-5 space-y-4 overflow-hidden bg-gray-50/50">
                                    <div className="h-32 w-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-sm p-4 relative overflow-hidden">
                                        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-4 translate-y-4">
                                            <div className="w-24 h-24 bg-white rounded-full blur-xl"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <div className="h-4 w-20 bg-gray-200 rounded"></div>
                                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                                        </div>
                                        <div className="h-20 w-full bg-white rounded-xl shadow-sm border border-gray-100"></div>
                                        <div className="h-20 w-full bg-white rounded-xl shadow-sm border border-gray-100"></div>
                                        <div className="h-20 w-full bg-white rounded-xl shadow-sm border border-gray-100"></div>
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="h-16 bg-white border-t border-gray-100 grid grid-cols-4 items-center px-4">
                                    <div className="h-6 w-6 bg-purple-500 mx-auto rounded-full"></div>
                                    <div className="h-6 w-6 bg-gray-200 mx-auto rounded-full"></div>
                                    <div className="h-6 w-6 bg-gray-200 mx-auto rounded-full"></div>
                                    <div className="h-6 w-6 bg-gray-200 mx-auto rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 1 */}
                        <div className="absolute top-32 -left-12 bg-white/90 backdrop-blur rounded-xl p-4 shadow-xl border border-purple-50 animate-bounce duration-3000">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Video Upload</p>
                                    <p className="text-sm font-bold text-gray-900">Complete</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element 2 */}
                        <div className="absolute bottom-40 -right-8 bg-white/90 backdrop-blur rounded-xl p-4 shadow-xl border border-purple-50 animate-bounce duration-[4000ms]">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-primary font-bold">A+</div>
                                <div>
                                    <p className="text-xs text-gray-500">Student Progress</p>
                                    <p className="text-sm font-bold text-gray-900">All Tracked</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
