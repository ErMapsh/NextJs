import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import axios from "axios";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

export default function blog() {
  const [blogs, setblogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:3000/api/blogs");
    setblogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  return (
    <div className={styles.blogs}>
      <h2>Popular Blogs</h2>
      {blogs.map((item) => {
        return (
          <div className={styles.blogitem} key={item.title}>
            <Link 
                href={`blogs/${item.slug}`}>
              <h3>{item.title}</h3>
            </Link>
            <p>{item.content.substr(0,140)}</p>
          </div>
        );
      })}
    </div>
  );
}
