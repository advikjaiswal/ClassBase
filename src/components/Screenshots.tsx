import React from "react";
// import Image from "next/image"; // Commented out until real images are used

export default function Screenshots() {
    return (
        <section id="screenshots" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Real Screenshots From the App</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A clean, student-friendly interface designed for focus and ease of use.
                    </p>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="group relative rounded-3xl overflow-hidden border border-gray-100 shadow-lg aspect-[9/16] bg-gray-50 hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gray-400 font-medium text-sm">Screenshot {item} Placeholder</span>
                            </div>
                            {/* 
                     Uncomment and replace with real images:
                     <Image 
                       src={`/screens/s${item}.png`} 
                       alt={`App Screenshot ${item}`} 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                    */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
