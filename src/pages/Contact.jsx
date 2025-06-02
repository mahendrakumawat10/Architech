import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        
        {/* Left: Contact Details */}
        <div className="bg-gray-50 p-6 rounded-md shadow-md min-h-[600px]">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Office</h2>
          <address className="not-italic mb-8 text-gray-700 space-y-1">
            <p>123 Architecture St.</p>
            <p>Design City, Jaipur, India</p>
            <p>Phone: +91-987 654 3210</p>
            <p>Email: architect@gmail.com</p>
          </address>

          <div className="w-full h-80 rounded-md overflow-hidden">
            
             <strong className="text-lg font-semibold  text-red-400"> Click on the map to view our office location: </strong>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019862959029!2d-122.41941508468147!3d37.774929279759085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8f11f4d7%3A0x6db5d1c350bf9cae!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1685012345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md mt-3  shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md min-h-[600px]">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-900">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-900">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-4 rounded-md hover:bg-orange-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
