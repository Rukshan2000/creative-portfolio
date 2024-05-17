// Blog.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogData } from '../data/BlogData'; // Import the blogData array
import projectImage from "../assest/project.jpg";

const Blog = () => {
    const navigate = useNavigate();

    const handleReadMoreClick = (id) => {
        navigate(`/blog/${id}`); // Navigate to the specific blog content page
    };

    return (
        <section className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                {blogData.map(project => (
                    <div key={project.id} className="p-6">
                        <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={project.image} alt={project.title} />
                        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-2xl">{project.title}</h1>
                        {/* Since the blogData doesn't have description, you can render the content here */}
                        <div className="mt-4">
                            <button 
                                onClick={() => handleReadMoreClick(project.id)}
                                className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                                title="read more"
                            >
                                Read More »
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
