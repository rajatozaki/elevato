'use client';

import { useState } from 'react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  details: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    details: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.details.trim() || formData.details.length < 20) {
      newErrors.details = 'Please provide more details (minimum 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form Submitted:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-12 text-center border border-border-subtle rounded-2xl bg-white shadow-sm">
        <div className="w-16 h-16 bg-accent-glow rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold mb-4">Thank you</h3>
        <p className="text-lg text-text-secondary">We will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-text-primary">Name <span className="text-red-500">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(
              "w-full px-4 py-3 bg-white border rounded-lg text-text-primary outline-none transition-colors",
              errors.name ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent"
            )}
          />
          {errors.name && <span id="name-error" className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium text-text-primary">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-border-subtle rounded-lg text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-text-primary">Email <span className="text-red-500">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(
              "w-full px-4 py-3 bg-white border rounded-lg text-text-primary outline-none transition-colors",
              errors.email ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent"
            )}
          />
          {errors.email && <span id="email-error" className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-text-primary">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-border-subtle rounded-lg text-text-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="serviceType" className="text-sm font-medium text-text-primary">Service Type <span className="text-red-500">*</span></label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
          className={cn(
            "w-full px-4 py-3 bg-white border rounded-lg text-text-primary outline-none transition-colors appearance-none",
            errors.serviceType ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent"
          )}
        >
          <option value="" disabled>Select a service...</option>
          <option value="Website">Website</option>
          <option value="Landing Page">Landing Page</option>
          <option value="AI Automation">AI Automation</option>
          <option value="AI Enablement">AI Enablement</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
        {errors.serviceType && <span id="serviceType-error" className="text-red-500 text-sm">{errors.serviceType}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="details" className="text-sm font-medium text-text-primary">Project Details <span className="text-red-500">*</span></label>
        <textarea
          id="details"
          name="details"
          rows={5}
          value={formData.details}
          onChange={handleChange}
          aria-describedby={errors.details ? 'details-error' : undefined}
          className={cn(
            "w-full px-4 py-3 bg-white border rounded-lg text-text-primary outline-none transition-colors resize-y",
            errors.details ? "border-red-500 focus:ring-1 focus:ring-red-500" : "border-border-subtle focus:border-accent focus:ring-1 focus:ring-accent"
          )}
          placeholder="Tell us about what you want to build..."
        />
        {errors.details && <span id="details-error" className="text-red-500 text-sm">{errors.details}</span>}
      </div>

      <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
      </Button>
    </form>
  );
}
