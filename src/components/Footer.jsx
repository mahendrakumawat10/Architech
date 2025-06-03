import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="bg-gray-600 text-white pt-6 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        <span className="text-orange-600">M</span>odern
                        <span className="text-orange-600">Ar</span>
                    </h2>
                    <p className="text-gray-400">
                        Designing innovative and sustainable spaces that inspire living and working better.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className=" text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="text-gray-300">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>

                        <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
                        <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <p className="text-gray-300">Email: architecter@gmail.com</p>
                    <p className="text-gray-300">Phone: +91 98765 43210</p>
                    <p className="text-gray-300 mb-4">Address: Jaipur, India</p>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-full hover:bg-pink-200 text-pink-400"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-full hover:bg-blue-200 text-blue-600"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-full hover:bg-blue-200 text-blue-400"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-full hover:bg-red-200 text-red-500"
                        >
                            <FaYoutube />
                        </a>

                    </div>

                </div>

            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-10 p-5 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} ArchiStudio. All rights reserved.
            </div>
        </footer>
    )
}
