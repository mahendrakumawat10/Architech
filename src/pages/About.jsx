import React from 'react';
import { FaLinkedin } from "react-icons/fa";

export default function About() {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-20">
            {/* Header Section */}
            <section className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-1">About Us</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Creative Studio | Passionate Architects | Visionaries of Space and Form
                </p>
            </section>


            {/* About Us Section */}
            <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch mb-20 px-4">
                <div className="bg-gray-50 p-6 shadow-lg rounded flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold mb-2 text-red-900">About Us</h2>
                    <p className="text-gray-500 leading-relaxed">
                        At <strong className="text-red-400">ModernAr</strong>, we are a collective of passionate architects and designers dedicated to creating thoughtful, functional, and inspiring spaces. Our mission is to elevate everyday environments through architecture that balances form, function, and emotion.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed">
                        From contemporary residences to large-scale urban planning, we approach every project with innovation, collaboration, and a deep respect for cultural and environmental context.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src="/aboutme.jpg"
                        alt="ModernAr Studio Team"
                        className="rounded-lg shadow-lg object-cover w-full h-full max-h-[350px] min-h-[300px] transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </section>




            {/* Our Team Section */}
            <section className="py-8 bg-gray-100 rounded-lg mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-black">Our Team</h2>
                    <p className="text-gray-400 max-w-xl mx-auto ">
                        Meet the creative minds who help turn architectural visions into reality.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-3  max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                    {/* Team Member 1 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer ">
                        <img
                            src="/public/team/team1.jpg"
                            alt="Team Member 1"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-5"
                        />
                        <h3 className="text-xl font-semibold r">Neha Sharma</h3>
                        <p className="text-sm text-gray-400 mb-2 ">Lead Designer & Architects </p>
                        <p className="text-gray-700 text-sm mb-2 italic ">
                            Lead Designer with a keen eye for modern minimalism and functionality.
                        </p>
                        <div className='flex justify-center '>
                            <a href="https://www.linkedin.com/checkpoint/lg/login?trk=guest_homepage-basic_google-one-tap-submit" className="flex items-center gap-2 text-blue-600 hover:underline">
                                <FaLinkedin />
                                <span>Linkedin</span>
                            </a>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <img
                            src="/public/team/team2.jpg"
                            alt="Team Member 2"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center">Mahi Sokal</h3>
                        <p className="text-sm text-gray-400 mb-2">Interior Specialist</p>
                        <p className="text-gray-700 text-sm mb-4 italic">
                            Interior Specialist focused on creating human-centered, aesthetic spaces.
                        </p>
                        <div className='flex justify-center '>
                            <a href="https://www.linkedin.com/checkpoint/lg/login?trk=guest_homepage-basic_google-one-tap-submit" className="flex items-center gap-2 text-blue-600 hover:underline">
                                <FaLinkedin />
                                <span>Linkedin</span>
                            </a>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                        <img
                            src="/public/team/team3.jpg"
                            alt="Team Member 3"
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center">Pinky Desai</h3>
                        <p className="text-sm text-gray-400 mb-2">Project Manager</p>
                        <p className="text-gray-700 text-sm mb-4 italic">
                            Project Manager who ensures seamless execution from start to finish.
                        </p>
                        <div className='flex justify-center '>
                            <a href="https://www.linkedin.com/checkpoint/lg/login?trk=guest_homepage-basic_google-one-tap-submit" className="flex items-center gap-2 text-blue-600 hover:underline">
                                <FaLinkedin />
                                <span>Linkedin</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Mission + Vision Side by Side */}
            <section >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow">
                        <h2 className="text-3xl font-bold mb-4 text-red-800">Mission</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            To design meaningful spaces that inspire, uplift, and enhance the human experience — blending innovation,
                            cultural identity, and sustainability in every line we draw.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow">
                        <h2 className="text-3xl font-bold mb-4 text-red-800">Vision</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            To be recognized as a leader in architectural excellence by crafting iconic spaces that define
                            tomorrow’s living — where design meets purpose, and people feel truly connected to the built environment.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
