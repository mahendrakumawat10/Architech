import React from 'react';

const services = [
    {
        id: 1,
        Image: '/services/architecture.jpg',
        title: 'Architectural Design',
        description: 'Innovative and functional building designs.',

    },
    {
        id: 2,
        Image: '/services/interior.jpg',
        title: 'Interior Design',
        description: 'Beautiful, functional interiors tailored to lifestyle.',
    },
    {
        id: 3,
        Image: '/services/urban.jpg',
        title: 'Urban Planning',
        description: 'Smart layouts for sustainable cities and communities.',
    },
    {
        id: 4,
        Image: '/services/landscape.jpg',
        title: 'Landscape Architecture',
        description: 'Creating harmonious outdoor spaces that enhance nature.',
    },
    {
        id: 5,
        Image: '/services/consulting.jpg',
        title: 'Consulting Services',
        description: 'Expert advice to guide your architectural projects.',
    },
    {
        id: 6,
        Image: '/services/sustainability.jpg',
        title: 'Sustainability Consulting',
        description: 'Implementing eco-friendly practices in design and construction.',
    },
    {
        id: 7,
        Image: '/services/project-management.jpg',
        title: 'Project Management',
        description: 'Ensuring projects are delivered on time and within budget.',
    },
    {
        id: 8,
        Image: '/services/renovation.jpg',
        title: 'Renovation Services',
        description: 'Transforming existing spaces into modern, functional areas.',
    },
    
   
]

export default function Services() {
    return (
        <div className="bg-white px-4 md:px-6 py-16 min-h-screen ">
            {/* Services Section */}
            <section className="mb-16 max-w-7xl mx-auto">
                <div className='mb-10 text-center' >
                    <h2 className="text-4xl font-bold  text-black">Our Services</h2>
                    <p className="text-gray-400  mt-2 max-w-3xl mx-auto">
                        We offer a range of architectural services designed to bring your vision to life with creativity and precision.
                    </p>
                </div>


                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Service Cards */}
                    {services.map(
                        (d, id) => (
                            <div key={id} className="rounded-lg shadow hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">

                                <img src={d.Image} alt="Architectural Design" className="w-full object-cover" style={{ aspectRatio: '4 / 3' }} />

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold">{d.title}</h3>

                                    <p className="text-gray-400 text-sm">{d.description}</p>
                                </div>

                            </div>
                        )
                    )}


                 
                </div>
            </section>
        </div>
    );
}
