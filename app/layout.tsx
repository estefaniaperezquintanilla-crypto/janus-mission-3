'use client';

import { useEffect, useRef } from 'react';

export default function Mission3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.65;
    audio.play().catch(() => {});
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/mission3-theme.mp3"
        loop
        autoPlay
        preload="auto"
      />
      {children}
    </>
  );
}