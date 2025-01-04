// FlashMessage.tsx
"use client"
import { useState, useEffect } from 'react';

interface FlashMessage {
  category: 'success' | 'error' | 'info';
  message: string;
}

export const FlashMessages = () => {
  const [messages, setMessages] = useState<FlashMessage[]>([]);

  // In a real application, you would likely get these messages from your state management solution
  // or from an API response. This is just a demonstration.
  useEffect(() => {
    // Example of setting a flash message
    // In practice, you would set this based on actual application events
    setMessages([
      { category: 'success', message: 'Operation completed successfully!' }
    ]);
  }, []);

  return (
    <div>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`alert alert-${msg.category} mb-4 p-2 rounded-lg ${
            msg.category === 'success' ? 'bg-red-100 text-green-700' :
            msg.category === 'error' ? 'bg-black-100 text-red-700' :
            'bg-blue-100 text-blue-700'
          }`}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
};

