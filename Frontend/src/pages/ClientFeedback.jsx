import React, { useState, useRef } from 'react';
import GlobalCard from '../components/ui/GlobalCard';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  category: '',
  message: '',
};

const categories = [
  { value: '', label: 'Select a category...' },
  { value: 'bug_report', label: 'Bug Report' },
  { value: 'feature_request', label: 'Feature Request' },
  { value: 'general_comment', label: 'General Comment' },
  { value: 'usability_issue', label: 'Usability Issue' },
  { value: 'other', label: 'Other' },
];

const ClientFeedback = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const confirmationRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!value) newErrors[key] = 'Required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => {
      confirmationRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    // Simulate sending data
    console.log('Form submitted (simulated). Data:', form);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#F0F0FF] font-inter">
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Client Feedback</h1>
          <p className="text-base text-[#A0A0C0]">We appreciate your input! Please use the form below to send us your comments, suggestions, or report any issues.</p>
        </div>
        <GlobalCard>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 font-medium text-[#A0A0C0]">Name <span className="text-[#FF5E7D]">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-md bg-white/5 border border-[#3A3D5A] text-[#F0F0FF] text-base focus:outline-none focus:border-[#5D8EFF] transition ${errors.name ? 'border-[#FF5E7D]' : ''}`}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-medium text-[#A0A0C0]">Email <span className="text-[#FF5E7D]">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-md bg-white/5 border border-[#3A3D5A] text-[#F0F0FF] text-base focus:outline-none focus:border-[#5D8EFF] transition ${errors.email ? 'border-[#FF5E7D]' : ''}`}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="block mb-2 font-medium text-[#A0A0C0]">Subject <span className="text-[#FF5E7D]">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-md bg-white/5 border border-[#3A3D5A] text-[#F0F0FF] text-base focus:outline-none focus:border-[#5D8EFF] transition ${errors.subject ? 'border-[#FF5E7D]' : ''}`}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="category" className="block mb-2 font-medium text-[#A0A0C0]">Feedback Category <span className="text-[#FF5E7D]">*</span></label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-md bg-white/5 border border-[#3A3D5A] text-[#F0F0FF] text-base focus:outline-none focus:border-[#5D8EFF] transition ${errors.category ? 'border-[#FF5E7D]' : ''}`}
                >
                  {categories.map(opt => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ''} hidden={opt.value === '' && form.category !== ''}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 font-medium text-[#A0A0C0]">Message <span className="text-[#FF5E7D]">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-md bg-white/5 border border-[#3A3D5A] text-[#F0F0FF] text-base focus:outline-none focus:border-[#5D8EFF] transition ${errors.message ? 'border-[#FF5E7D]' : ''}`}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline w-full flex items-center justify-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-900/20 font-semibold py-3 px-6 rounded-lg transition"
              >
                <i className="fas fa-paper-plane"></i> Submit Feedback
              </button>
            </form>
          ) : (
            <div ref={confirmationRef} className="p-6 bg-[#2ECC71] text-white rounded-lg text-center text-lg flex flex-col items-center gap-2">
              <i className="fas fa-check-circle text-2xl mb-2"></i>
              Thank you for your feedback! We have received your submission.
            </div>
          )}
        </GlobalCard>
      </div>
    </div>
  );
};

export default ClientFeedback;
