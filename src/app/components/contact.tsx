"use client"
import { useState, FormEvent } from 'react';

interface FormData {
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit_contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setFormData({ email: '', message: '' });
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-4">
        <label 
          htmlFor="email"
          className="block text-sm font-medium mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      
      <div className="form-group mb-4">
        <label 
          htmlFor="message"
          className="block text-sm font-medium mb-2"
        >
          Message:
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2 border rounded-lg"
          required
          rows={4}
        />
      </div>
      
      <button 
        type="submit"
        className="btn-submit bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>
  );
};