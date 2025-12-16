import React from "react";
import { Play } from "lucide-react";

export default function DemoVideo() {
    return (
        <section id="demo" className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Watch the App in Action</h2>
                    <p className="text-gray-400 text-lg">See how easy it is to manage your institute with ClassBase.</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-800 group cursor-pointer">
                        <video
                            src="/demo-video.mp4"
                            controls
                            className="w-full h-full object-cover"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
