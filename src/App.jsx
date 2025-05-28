import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark);
    
  }

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time)    
  }
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
