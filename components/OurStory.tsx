
import React from 'react';
import Section from './Section';
import TraditionalDivider from './TraditionalDivider';

const OurStory: React.FC = () => {
  return (
    <Section>
      <div className="text-center">
        <h2 className="font-tangerine text-6xl md:text-7xl text-red-900">Our Story</h2>
        <TraditionalDivider />
        <p className="font-cormorant text-lg md:text-xl text-stone-700 leading-relaxed max-w-2xl mx-auto">
          In the tapestry of life, our threads were woven together by fate. A chance meeting blossomed into a beautiful friendship, and soon, we discovered a love that felt as ancient and profound as the temples that grace our land.
          <br /><br />
          Join us as we celebrate the culmination of our journey and the beginning of our forever, bound by tradition, blessed by family, and built on a foundation of unwavering love.
        </p>
      </div>
    </Section>
  );
};

export default OurStory;
