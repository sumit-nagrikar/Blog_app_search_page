import React from 'react';

const BlogCard = ({ title, body }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default BlogCard;
