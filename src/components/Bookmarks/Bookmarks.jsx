import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks, readingTime }) {
  return (
    <div className="md:w-1/3 ">
      <div className="text-xl font-semibold p-4 mx-4 border-b-2 border-slate-500">
        <h2>Reading Time: {readingTime}</h2>
      </div>

      <h3 className="p-4">Bookmarked Blogs: {bookmarks.length}</h3>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}
