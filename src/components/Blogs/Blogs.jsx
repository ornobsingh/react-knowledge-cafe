import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

export default function Blogs({handleAddToBookmark, handleMarkAsRead}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {/* <h2 className="text-xl text-center">Blogs: {blogs.length}</h2> */}
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>
        ))}
      </div>
    </div>
  );
}
