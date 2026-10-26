"use client";

import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function TechBusinessVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section id="tech-business" className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subhead */}
        <div className="max-w-4xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#111827] tracking-tight leading-[1.12]">
            And If You&apos;re Building A Tech Business...
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-bold uppercase text-gray-500 tracking-wide mt-2">
            Why Build The Future From A Space That Feels Like The Past?
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black border border-black/10 aspect-[16/9] group">
          <video
            ref={videoRef}
            src="/video.mp4"
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Floating Play Overlay (shows when paused / before initial play) */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/35 backdrop-blur-[1px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black/45 z-10"
              aria-label="Play video"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#4E6B17] hover:bg-[#3d5512] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-white" />
              </div>
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-widest mt-3 opacity-90">
                Watch Presentation
              </span>
            </div>
          )}
        </div>

        {/* Narrative Below Video */}
        <div className="mt-8 sm:mt-10 max-w-4xl space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            Awo Tech Mall is designed around technology, collaboration and modern business.
          </p>
          <p>
            With tech-enabled co-working spaces, high-speed connectivity and an environment built around innovation, your workspace becomes part of your business identity.
          </p>
          <div className="pt-1">
            <p className="font-extrabold text-[#111827] text-lg sm:text-xl">
              Because the way your business operates matters.
            </p>
            <p className="text-gray-600 pt-0.5">
              And increasingly, where you operate matters too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
