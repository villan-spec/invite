
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import Rsvp from './components/Rsvp';
import Blessings from './components/Blessings';
import MusicToggle from './components/MusicToggle';

const App: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.log("Audio play failed:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-[#FFF8E1] text-[#5D4037] relative overflow-x-hidden">
      <Hero offsetY={offsetY} />
      
      <main className="relative bg-gradient-to-b from-transparent via-[#FFF8E1] to-[#FFF8E1] z-10">
        <OurStory />
        <EventDetails />
        <Rsvp />
        <Blessings />
      </main>

      <footer className="text-center py-8 bg-[#FFF8E1]">
        <p className="font-cormorant">Made with love for Srinesh & Deepika Sri</p>
      </footer>
      
      {/* Background Music (Optional) */}
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
      <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
    </div>
  );
};

export default App;
