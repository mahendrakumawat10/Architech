import React, { useState } from "react";

// Blog Data
const postData = [
  {
    id: 1,
    image: "/blogs/blog1.jpg",
    title: "Sustainable Architecture: Building for the Future",
    category: "sustainable-design",
    description:
      "Explore innovative sustainable designs that reduce environmental impact while enhancing aesthetic and functionality in architecture.",
    date: "May 25, 2025",
  },
  {
    id: 2,
    image: "/blogs/blog2.jpg",
    title: "Modern Residential Architecture Trends in 2025",
    category: "residential",
    description:
      "Discover the latest trends in residential architecture, focusing on minimalism, open spaces, and eco-friendly materials.",
    date: "Jan 10, 2025",
  },
  {
    id: 3,
    image: "/blogs/blog3.jpg",
    title: "Urban Planning: Designing Cities for People",
    category: "urban-planning",
    description:
      "Learn how urban planners are transforming cities into livable, sustainable environments that prioritize human well-being.",
    date: "March 10, 2025",
  },
  {
    id: 4,
    image: "/blogs/blog4.jpg",
    title: "Interior Architecture: Blending Comfort with Style",
    category: "interior-architecture",
    description:
      "Explore how interior architecture combines comfort, style, and function to create beautiful living and working spaces.",
    date: "Feb 14, 2025",
  },
  {
    id: 5,
    image: "/blogs/blog5.jpg",
    title: "Eco-friendly Materials Transforming Construction",
    category: "sustainable-design",
    description:
      "Discover eco-friendly building materials that are shaping the future of sustainable construction and design.",
    date: "May 25, 2025",
  },
];

// Category List
const categories = [
  "all",
  "residential",
  "commercial",
  "sustainable-design",
  "urban-planning",
  "interior-architecture",
];

// Format category text for display
const formatCategory = (cat) =>
  cat.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "all"
      ? postData
      : postData.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-16 px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-60 bg-white p-6 rounded shadow sticky top-24 self-start h-max">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Categories</h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2 rounded text-lg transition ${
                    selectedCategory === cat
                      ? "bg-blue-100 text-blue-800 font-semibold"
                      : "hover:bg-blue-50 text-gray-700"
                  }`}
                >
                  {formatCategory(cat)}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-white rounded shadow">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            {selectedCategory === "all"
              ? "All Blog Posts"
              : formatCategory(selectedCategory)}
          </h1>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 flex-grow mb-2">
                      {post.description}
                    </p>
                    <div className="mt-auto text-sm text-blue-600 font-medium capitalize">
                      {formatCategory(post.category)}
                    </div>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No blog posts found.</p>
          )}
        </main>
      </div>
    </div>
  );
}
