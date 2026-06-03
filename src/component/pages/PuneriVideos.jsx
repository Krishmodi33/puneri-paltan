import { useState } from "react";
import { useSelector } from "react-redux";

const PuneriTvVideos = ({ videos = [] }) => {
  const getYoutubeId = (url) => {
    if (!url) return null;

    const regExp =
      /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

    const match = url.match(regExp);

    return match && match[1].length === 11 ? match[1] : null;
  };

  const getYoutubeThumbnail = (url) => {
    const videoId = getYoutubeId(url);

    return videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "/logo.gif";
  };

  return (
    <div
      className="max-w-7xl
    mx-auto

    px-4
    sm:px-6
    lg:px-8

    grid
    grid-cols-1
    md:grid-cols-2

    gap-6
    md:gap-8
    lg:gap-14"
    >
      {videos?.map((video, index) => (
        <a
          key={video.id || index}
          href={video.url}
          target="_blank"
          rel="noreferrer"
          className="group block cursor-pointer"
        >
          {/* IMAGE */}
          <div className="relative overflow-hidden bg-black">
            <img
              src={getYoutubeThumbnail(video.url)}
              alt={video.name}
              className="
                w-full
                h-[220px]
sm:h-[260px]
md:h-[300px]
lg:h-[320px]
                object-cover
                transition-all
                duration-500
                group-hover:scale-105
              "
            />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="
                 w-14
h-14
sm:w-16
sm:h-16
md:w-20
md:h-20
lg:w-24
lg:h-24
                  rounded-full
                  bg-[#18064f]/80
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >
                <span
                  className="text-white text-2xl
sm:text-3xl
lg:text-4xl"
                >
                  ▶
                </span>
              </div>
            </div>
          </div>

          {/* TITLE */}
          <div
            className="relative bg-[#ff5a00] px-4
sm:px-6
lg:px-8

py-3
sm:py-4"
          >
            <h3
              className="
                text-white
                italic
                text-base
sm:text-lg
md:text-xl
lg:text-2xl

leading-snug

pr-8
sm:pr-12
              "
            >
              {video.name}
            </h3>

            <div
              className="
                absolute
                right-4
                top-0
                h-full
                flex
                gap-2
                items-center
              "
            >
              <div className="w-2 h-full bg-white skew-x-[-15deg]"></div>
              <div className="w-2 h-full bg-white skew-x-[-15deg]"></div>
            </div>
          </div>
        </a>
      ))}

      {!videos?.length && (
        <div
          className=" col-span-full
    text-center
    text-xl
    sm:text-2xl
    lg:text-3xl
    font-bold
    text-black"
        >
          No Videos Found
        </div>
      )}
    </div>
  );
};

export default PuneriTvVideos;
