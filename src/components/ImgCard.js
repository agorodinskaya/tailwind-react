import React from "react";

const imgCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-indigo-500 text-xl mb-2">
          {image.user}
        </div>
        <ul>
          <li>
            <span className="text-pink-500 font-black">Downloads : </span>
            {image.downloads}
          </li>
          <li>
            <span className="text-pink-500 font-black">Likes : </span>
            {image.likes}
          </li>
          <li>
            <span className="text-pink-500 font-black">Viewed : </span>
            {image.views}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default imgCard;
