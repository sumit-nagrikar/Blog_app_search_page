import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BlogCard from '../components/BlogCard';
import FilterBar from '../components/FilterBar';
import axios from 'axios';

const SearchPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch blogs on mount
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setBlogs(response.data);
            setFilteredBlogs(response.data);
            
            setCategories(['Tech', 'Lifestyle', 'Health', 'Education']);
        });
    }, []);

    const handleSearch = () => {
        const results = blogs.filter((blog) =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBlogs(results);
    };

    const handleFilter = (category) => {
        if (!category) {
            setFilteredBlogs(blogs);
        } else {
            setFilteredBlogs(blogs.filter((_, idx) => idx % categories.length === categories.indexOf(category)));
        }
    };

    return (
        <div className="search-container">
        <h1 className="search-title">Search Blogs</h1>
      
        {/* Search Bar */}
        <div className="search-bar">
          <SearchBar value={searchTerm} onChange={setSearchTerm} onSearch={handleSearch} />
        </div>
      
        {/* Filter Dropdown */}
        <div className="filter-dropdown">
          <FilterBar categories={categories} onFilter={handleFilter} />
        </div>
      
        {/* Blog Cards */}
        <div className="blog-container">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} title={blog.title} body={blog.body} />
            ))
          ) : (
            <p className="no-blogs-message">No blogs found!</p>
          )}
        </div>
      </div>
      
      );      
    }

export default SearchPage;
