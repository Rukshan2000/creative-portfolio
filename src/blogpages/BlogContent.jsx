import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../data/BlogData';
import projectImage from "../assest/project.jpg";


const BlogContent = () => {
    const { id } = useParams();
    const blogPost = blogData.find(post => post.id === parseInt(id));

    return (
        <section className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            {blogPost ? (
                <>
                    <h1 className="mb-8 text-3xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-4xl">{blogPost.title}</h1>
                    <img className="object-cover object-center w-full mb-8 rounded-xl" src={blogPost.image} alt={blogPost.title} />
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                </>
            ) : (
                <p>Blog post not found.</p>
            )}
        </section>
    );
};

export default BlogContent;
