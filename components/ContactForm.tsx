'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      e.preventDefault();
    } else {
      // Let the form submit naturally to FormSubmit
      setSubmitted(true);
    }
  };

  return (
    <form
      action="https://formsubmit.co/ibrahimsamad507@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="_subject" value="New Portfolio Contact!" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      {submitted && (
        <div className="p-4 bg-[#00ff00]/10 border-2 border-[#00ff00] terminal-text font-mono text-sm">
          {'>'} SUCCESS: Message transmitted successfully!
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-bold text-white/70 mb-2 font-mono uppercase">
          {'>'} Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-black border focus:ring-1 focus:ring-[#00ff00] focus:border-[#00ff00] outline-none text-white placeholder-white/30 transition-all font-mono ${
            errors.name ? 'border-red-500' : 'border-[#00ff00]/30'
          }`}
          placeholder="your_name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500 font-mono">{'>'} ERROR: {errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold text-white/70 mb-2 font-mono uppercase">
          {'>'} Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-black border focus:ring-1 focus:ring-[#00ff00] focus:border-[#00ff00] outline-none text-white placeholder-white/30 transition-all font-mono ${
            errors.email ? 'border-red-500' : 'border-[#00ff00]/30'
          }`}
          placeholder="your.email@domain.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500 font-mono">{'>'} ERROR: {errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-white/70 mb-2 font-mono uppercase">
          {'>'} Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 bg-black border focus:ring-1 focus:ring-[#00ff00] focus:border-[#00ff00] outline-none resize-none text-white placeholder-white/30 transition-all font-mono ${
            errors.message ? 'border-red-500' : 'border-[#00ff00]/30'
          }`}
          placeholder="enter_your_message_here..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-500 font-mono">{'>'} ERROR: {errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full hacker-btn px-6 py-4 text-sm"
      >
        {'>'} TRANSMIT_MESSAGE
      </button>
    </form>
  );
}
