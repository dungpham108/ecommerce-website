import React from "react";
import { useEffect, useState } from "react";
import { blogs as blogData } from "../assets/data"; // Dữ liệu blog
import ItemBlog from "./ItemBlog";

const BlogList = () => {
  const [displayedBlogs, setDisplayedBlogs] = useState([]);

  useEffect(() => {
    const slicedBlogs = blogData.slice(0, 4);
    setDisplayedBlogs(slicedBlogs);
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedBlogs.map((blog, index) => (
          <ItemBlog
            key={index}
            title={blog.title}
            category={blog.category}
            image={blog.image}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;
