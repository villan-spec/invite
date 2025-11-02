
import React, { useState } from 'react';
import Section from './Section';
import TraditionalDivider from './TraditionalDivider';

interface Blessing {
  name: string;
  message: string;
}

const Blessings: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [blessings, setBlessings] = useState<Blessing[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      setBlessings([...blessings, { name, message }]);
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="bg-green-900 bg-opacity-10">
      <Section>
        <div className="text-center">
          <h2 className="font-tangerine text-6xl md:text-7xl text-red-900">Your Blessings</h2>
          <TraditionalDivider />
          <p className="mb-8 max-w-xl mx-auto text-lg text-stone-700">
            Your blessings mean the world to us 💛
            <br />
            Please leave a wish for our new beginning.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left mb-12">
            <div>
              <label htmlFor="blessing-name" className="block text-stone-700 font-bold mb-1">Your Name</label>
              <input type="text" id="blessing-name" value={name} onChange={e => setName(e.target.value)} required className="w-full px-4 py-2 border border-yellow-700 rounded-md bg-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
            </div>
            <div>
              <label htmlFor="blessing-message" className="block text-stone-700 font-bold mb-1">Your Message</label>
              <textarea id="blessing-message" value={message} onChange={e => setMessage(e.target.value)} required rows={4} className="w-full px-4 py-2 border border-yellow-700 rounded-md bg-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105 shadow-md">
              Leave a Blessing
            </button>
          </form>

          <div className="space-y-6 max-w-2xl mx-auto">
            {blessings.map((blessing, index) => (
              <div key={index} className="bg-amber-50 p-4 rounded-lg shadow-md text-left border-l-4 border-yellow-600">
                <p className="text-stone-700 italic">"{blessing.message}"</p>
                <p className="text-right font-bold text-red-900 mt-2">- {blessing.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blessings;
