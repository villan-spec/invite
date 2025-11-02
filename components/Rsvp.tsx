
import React, { useState, useEffect } from 'react';
import Section from './Section';
import TraditionalDivider from './TraditionalDivider';
import { WhatsAppIcon, PhoneIcon } from './icons/Icons';

const Rsvp: React.FC = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    // Generate QR code URL from the current window location
    const currentUrl = window.location.href;
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server.
    console.log({ name, attending, message });
    setSubmitted(true);
  };

  return (
    <Section>
      <div className="text-center">
        <h2 className="font-tangerine text-6xl md:text-7xl text-red-900">Kindly RSVP</h2>
        <TraditionalDivider />
        <p className="mb-8 max-w-xl mx-auto text-lg text-stone-700">Your presence is our greatest gift. Please let us know if you can make it.</p>
        
        {submitted ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-lg" role="alert">
            <p className="font-bold">Thank You!</p>
            <p>Your response has been recorded. We look forward to celebrating with you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left">
            <div>
              <label htmlFor="name" className="block text-stone-700 font-bold mb-1">Full Name</label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full px-4 py-2 border border-yellow-700 rounded-md bg-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-600" />
            </div>
            <div>
              <label className="block text-stone-700 font-bold mb-1">Will you be attending?</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="attending" value="yes" onChange={e => setAttending(e.target.value)} required className="text-yellow-700 focus:ring-yellow-600" />
                  <span className="ml-2">Joyfully Attending</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="attending" value="no" onChange={e => setAttending(e.target.value)} required className="text-yellow-700 focus:ring-yellow-600" />
                  <span className="ml-2">Regretfully Decline</span>
                </label>
              </div>
            </div>
            <button type="submit" className="w-full bg-red-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105 shadow-md">
              Send RSVP
            </button>
          </form>
        )}

        <div className="mt-12">
            <h3 className="font-cormorant font-bold text-2xl text-stone-800 mb-4">Or Contact Us Directly</h3>
            <div className="flex justify-center items-center gap-6">
                <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 transition-transform transform hover:scale-110">
                    <WhatsAppIcon className="w-8 h-8"/>
                    <span className="font-bold">WhatsApp</span>
                </a>
                <a href="tel:+910000000000" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110">
                    <PhoneIcon className="w-8 h-8"/>
                    <span className="font-bold">Call Us</span>
                </a>
            </div>
        </div>

        <div className="mt-16">
          <h3 className="font-cormorant font-bold text-2xl text-stone-800 mb-4">Share this Invitation</h3>
          {qrCodeUrl && <img src={qrCodeUrl} alt="Wedding Invitation QR Code" className="mx-auto border-4 border-yellow-700 p-2 rounded-lg" />}
        </div>
      </div>
    </Section>
  );
};

export default Rsvp;
