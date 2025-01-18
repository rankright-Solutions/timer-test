import React from 'react';

interface VideoSectionProps {
  videoId: string;
}

const VideoSection = ({ videoId }: VideoSectionProps) => {
  return (
    <div className="mt-8 w-full max-w-3xl mx-auto px-4 sm:px-0">
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoSection;