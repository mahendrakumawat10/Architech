import React, { useEffect, useState } from "react";

// All Projects
const allProjects = [
  {
    id: 1,
    image: "/projects/modernvilla.jpg",
    title: "Modern Villa",
    category: "architecture"
  },
  {
    id: 2,
    image: "/projects/living.jpg",
    title: "Cozy Living Room",
    category: "interiors"
  },
  {
    id: 3,
    image: "/projects/Park.jpg",
    title: "Urban Park Plan",
    category: "master-planning"
  },
  {
    id: 4,
    image: "/projects/Expo.jpg",
    title: "Art Expo Setup",
    category: "exhibition"
  },
  {
    id: 5,
    image: "/projects/Inspired.jpg",
    title: "Nature Inspired Design",
    category: "inspirations"
  },
  {
    id: 6,
    image: "/projects/Skyscraper.jpg",
    title: "Skyscraper Design",
    category: "architecture"
  },
  {
    id: 7,
    image: "/projects/Expo4.jpg",
    title: "Overview of Art Deco",
    category: "exhibition"
  },
  {
     id: 8,
    image: "/projects/arch2.jpg",
    title: "Black & White",
    category: "architecture"
  },
 {
    id: 9,
    image: "/projects/master3.jpg",
    title: "Conceptual master plan",
    category: "master-planning"
  },
  {
    id: 10,
    image: "/projects/arch4.jpg",
    title: "Dummy Project",
    category: "architecture"
  },
  {
    id: 11,
    image: "/projects/inter1.jpg",
    title: "Interiors design",
    category: "interiors"
  },
  {
    id: 12,
    image: "/projects/Inspired2.jpg",
    title: "Rocco Design",
    category: "inspirations"
  },
  
  {
    id: 13,
    image: "/projects/inter3.jpg",
    title: "turnkey Interior",
    category: "interiors"
  },
  {
    id: 14,
    image: "/projects/Expo2.jpg",
    title: "12 Contemporay Architecture",
    category: "exhibition"
  },
  {
    id: 15,
    image: "/projects/master2.jpg",
    title: "Pyramid-shaped",
    category: "master-planning"
  },
   {
    id: 16,
    image: "/projects/arch3.jpg",
    title: "7 Parallel Perspectives",
    category: "architecture"
  },
  
  {
    id: 17,
    image: "/projects/expo1.jpg",
    title: "Mysteriously Handcuffed",
    category: "exhibition"
  }, {
    id: 18,
    image: "/projects/master1.jpg",
    title: "Park with master-planning",
    category: "master-planning"
  },
 
  {
    id: 19,
    image: "/projects/Expo3.jpg",
    title: "hotel W Macau",
    category: "exhibition"
  },
  {
    id: 20,
    image: "/projects/arch1.jpg",
    title: "Skate Home",
    category: "architecture"
  },
  
  {
    id: 21,
    image: "/projects/Expo5.jpg",
    title: "Kreod Parametric design",
    category: "exhibition"
  },
  {
    id: 22,
    image: "/projects/Inspired1.jpg",
    title: "Chicago Arichiteture",
    category: "inspirations"
  },{
    id: 23,
    image: "/projects/inter2.jpg",
    title: "Design & Merchandising",
    category: "interiors"
  },
  
  

];

// Category List
const categoryList = [
  {
    key: "all",
    label: "All Projects"
  },
  {
    key: "architecture",
    label: "Architecture"
  },
  {
    key: "interiors",
    label: "Interiors"
  },
  {
    key: "master-planning",
    label: "Master Planning"
  },
  {
    key: "exhibition",
    label: "Exhibition"
  },
  {
    key: "inspirations",
    label: "Inspirations"
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-6 pt-24 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-64 lg:w-72 bg-gray-50 rounded-md p-6 shadow-md sticky top-24 self-start h-max">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <ul>
            {categoryList.map(({ key, label }) => (
              <li key={key}>
                <button
                  onClick={() => setSelectedCategory(key)}
                  className={`mb-3 block w-full text-left px-4 py-2 rounded text-lg ${selectedCategory === key
                      ? "bg-blue-100 font-semibold"
                      : "hover:bg-blue-50 text-gray-700"
                    }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white rounded-md shadow-md">
          <h1 className="text-3xl font-extrabold mb-8 text-gray-800 capitalize">
            {categoryList.find((c) => c.key === selectedCategory)?.label}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProjects.length ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 capitalize">
                      Category: {project.category}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects found for this category</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
