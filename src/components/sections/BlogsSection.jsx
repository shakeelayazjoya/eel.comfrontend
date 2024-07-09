import React from "react";
import person from "../../assets/icone/person.jpg";
import gallary from "../../assets/icone/gallary.jpg";
import tab from "../../assets/icone/tab.jpg";
import "./BlogsSection.css"; // Import CSS for hover effects

const BlogsSection = () => {
  // Updated data for blogs with new images
  const blogs = [
    {
      id: 1,
      imgSrc: person, // Use imported image
      heading: "Blog Post 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui consectetur, vitae faucibus mauris semper.",
    },
    {
      id: 2,
      imgSrc: gallary, // Use imported image
      heading: "Blog Post 2",
      text: "Phasellus id ultricies neque, eget suscipit nisi. Fusce venenatis nulla sed massa scelerisque blandit. Donec ultrices justo et justo pellentesque, quis interdum nunc consectetur.",
    },
    {
      id: 3,
      imgSrc: tab, // Use imported image
      heading: "Blog Post 3",
      text: "Praesent in justo et orci consequat eleifend a sed nisi. Mauris consectetur, nulla ac tincidunt egestas, mi lectus semper urna, nec vehicula felis magna vel lorem.",
    },
  ];

  return (
    <div className="sm_container mx-auto py-7">
      <h2 className="font-bold text-2xl mb-4">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={blog.imgSrc}
              alt={blog.heading}
              className="w-full h-40 object-cover object-center blog-img"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{blog.heading}</h3>
              <p className="text-gray-700">{blog.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
