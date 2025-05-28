import { MdBookmarkBorder } from "react-icons/md";

export default function Blog({ blog, handleAddToBookmark, handleMarkAsRead }) {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-12">
      <img className="w-full rounded-xl" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 my-3">
          <img className="w-12" src={author_img} alt="" />
          <div>
            <h3 className="text-xl font font-semibold">{author}</h3>
            <p className="text-xs text-gray-600">{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span className="text-gray-600">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-3xl cursor-pointer"
          >
            <MdBookmarkBorder />
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-semibold leading-8">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="" className="text-gray-600">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button onClick={()=> handleMarkAsRead(reading_time)} className="text-purple-600 underline text-xs cursor-pointer">Mark As Read</button>
    </div>
  );
}
