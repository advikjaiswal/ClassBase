import React from "react";
import { ArrowRight, Smartphone } from "lucide-react";

export default function CallToAction() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
                    {/* Background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-medium mb-8">
                            <Smartphone size={16} /> Mobile First Learning
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Ready to Get Your Institute App?
                        </h2>
                        <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto">
                            Join the digital revolution. Give your students the best learning experience today.
                        </p>

                        <a
                            href="https://wa.me/919868260790?text=I%E2%80%99m%20ready%20to%20get%20my%20app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg shadow-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1"
                        >
                            Book a Free Demo <ArrowRight size={20} />
                        </a>

                        <p className="mt-8 text-sm text-purple-200/80">
                            No credit card required. Free consultation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
