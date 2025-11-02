
import React from 'react';
import Section from './Section';
import TraditionalDivider from './TraditionalDivider';
import { CalendarIcon, LocationIcon, ClockIcon } from './icons/Icons';

const EventDetails: React.FC = () => {
  return (
    <div className="bg-green-900 bg-opacity-10">
      <Section>
        <div className="text-center">
          <h2 className="font-tangerine text-6xl md:text-7xl text-red-900">The Auspicious Day</h2>
          <TraditionalDivider />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 text-stone-800">
            <div className="flex flex-col items-center">
              <CalendarIcon className="w-12 h-12 text-yellow-700 mb-4" />
              <h3 className="font-cormorant font-bold text-2xl">Date</h3>
              <p className="text-lg mt-1">12th February 2026</p>
            </div>
            <div className="flex flex-col items-center">
              <LocationIcon className="w-12 h-12 text-yellow-700 mb-4" />
              <h3 className="font-cormorant font-bold text-2xl">Venue</h3>
              <p className="text-lg mt-1">[Grand Temple Hall, Chennai]</p>
            </div>
            <div className="flex flex-col items-center">
              <ClockIcon className="w-12 h-12 text-yellow-700 mb-4" />
              <h3 className="font-cormorant font-bold text-2xl">Time</h3>
              <p className="text-lg mt-1">[Muhurtham at 9:00 AM]</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default EventDetails;
