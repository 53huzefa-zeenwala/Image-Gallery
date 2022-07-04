import React from "react";

const VideoCard = ({ video }) => {
  const tags = video.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <video width='380px' controls>
        <source src={video.videos.small.url} />
      </video>
      <div className="px-6 py-4">
        <div className="font-boldtext-purple-500 text-xl mb-3">
          Photo by John {video.user}
        </div>
        <ul>
        <li>
            <strong>Type:</strong> {video.type}
          </li>
          <li>
            <strong>Views:</strong> {video.views}
          </li>
          <li>
            <strong>Downloads:</strong> {video.downloads}
          </li>
          <li>
            <strong>Likes:</strong> {video.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
