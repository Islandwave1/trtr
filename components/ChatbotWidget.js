import { useState } from 'react';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {open ? 'Close Chat' : 'Chat'}
      </button>
      {open && (
        <div className="bg-white text-black p-4 mt-2 rounded-lg shadow-lg w-72">
          <p className="font-bold mb-2">AI Assistant</p>
          <p className="text-sm mb-2">How can we help?</p>
          <textarea className="w-full border p-2 mb-2" rows="3"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Send</button>
        </div>
      )}
    </div>
  );
}
