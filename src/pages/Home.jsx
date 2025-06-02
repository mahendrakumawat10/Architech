import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[80vh] text-white"
                style={{ backgroundImage: "url('/herobg.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center max-w-2xl px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Designing Spaces That Inspire</h1>
                        <p className="text-lg mb-6">Modern. Sustainable. Visionary.</p>
                        <Link
                            to="/projects"
                            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 inline-block"
                        >
                            Explore Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-8  bg-gray-100 mb-20 rounded-lg">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-5">
                    {/* Text */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            <strong className="text-orange-400">ModernAr</strong> is a dynamic, design-driven studio located in Delhi NCR, India. We focus on delivering unique, functional, and affordable results through continuous research and experimentation. Our core expertise spans four verticals: Master Planning and Architecture, Interior Design, Landscape, and Design-Build, supported by complete allied engineering design consultancy.
                        </p>
                        <Link
                            to="/about"
                            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-block"
                        >
                            Read More...
                        </Link>
                    </div>

                    {/* Image */}
                    <div>
                        <img
                            src="/about1.jpg"
                            alt="ModernAr studio workspace with architectural models"
                            className="w-full h-auto max-h-[500px] rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-10 text-center">
                        <div className="p-6 shadow-lg rounded-lg border hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-4">Architectural Design</h3>
                            <p className="text-gray-600">Innovative building designs tailored to client needs, budget, and space.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg border hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-4">Interior Design</h3>
                            <p className="text-gray-600">Functional and stylish interiors that complement your identity and lifestyle.</p>
                        </div>
                        <div className="p-6 shadow-lg rounded-lg border hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-4">Urban Planning</h3>
                            <p className="text-gray-600">Sustainable and efficient layouts for community living and urban infrastructure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* client  Section */}
            <section className="py-8 bg-gray-100 rounded-lg mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-black">What Our Client Say...</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Hear directly from our happy clients and collaborators who’ve experienced our work firsthand.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-3  max-w-7xl mx-auto px-4">
                    {/* Client 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <img
                            src="/public/client/client1.jpg"
                            alt="Client 1"
                            className="w-28 h-28 mx-auto rounded-full object-cover mb-5"
                        />
                        <p className="text-gray-600 text-sm text-center italic">
                            "Exceptional service and attention to detail! The team truly brought our vision to life."
                        </p>
                        <h3 className="text-md mt-4 font-semibold text-center">Nikita Rao</h3>
                        <p className="text-gray-400 text-xs text-center">
                            Business Owner, Ahmedabad
                        </p>
                    </div>


                    {/* Client 2  */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <img
                            src="/public/client/client2.jpg"
                            alt="Client 2"
                            className="w-28 h-28 mx-auto rounded-full object-cover mb-5 "
                        />
                        <p className="text-gray-600 text-sm text-center italic">
                            "Creative, reliable, and professional throughout the entire project. Highly recommended!"
                        </p>
                        <h3 className="text-md font-semibold text-center mt-4">Prem Patel</h3>
                        <p className="text-gray-400 text-xs text-center">
                            Interior Blogger, Jaipur
                        </p>
                    </div>

                    {/* Client 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <img
                            src="/public/client/client3.jpg"
                            alt="Client 3"
                            className="w-28 h-28 mx-auto rounded-full object-cover mb-5"
                        />
                        <p className="text-gray-600 text-sm text-center italic">
                            "They transformed our space beautifully and efficiently. Couldn’t be happier!"
                        </p>
                        <h3 className="text-md font-semibold text-center mt-4">Anita Sokal</h3>
                        <p className="text-xs text-center text-gray-400">Architectural Consultant, Mumbai</p>
                    </div>

                </div>
            </section>


            {/* CTA Section */}
            <section
                className="relative bg-cover bg-center text-white py-16 px-6"
                style={{ backgroundImage: "url('/contact.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to bring your vision to life?</h2>
                    <p className="mb-6">Let’s collaborate on your next architectural masterpiece.</p>
                    <Link
                        to="/contact"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded transition duration-300 inline-block"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
