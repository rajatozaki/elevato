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
    
    // Ready for API route or webhook
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Form Submitted:', formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-10 md:p-14 text-center border border-border-subtle rounded-2xl bg-surface shadow-lg">
        <div className="w-16 h-16 bg-accent/15 text-accent-dark dark:text-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-text-primary">Enquiry Received</h3>
        <p className="text-base md:text-lg text-text-secondary">
          Thank you for reaching out. We will review your project requirements and get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClasses = (hasError?: boolean) => cn(
    "w-full px-4 py-3 rounded-lg text-text-primary bg-surface border outline-none transition-all duration-200 text-sm",
    hasError 
      ? "border-red-500 focus:ring-2 focus:ring-red-500/20" 
      : "border-border-subtle focus:border-accent focus:ring-2 focus:ring-accent/20"
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6 sm:p-10 rounded-2xl border border-border-subtle bg-surface shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider font-semibold text-text-primary">
            Name <span className="text-accent-dark dark:text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleChange}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputClasses(!!errors.name)}
          />
          {errors.name && <span id="name-error" className="text-red-500 text-xs">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-xs font-mono uppercase tracking-wider font-semibold text-text-primary">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Health / Real Estate"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses()}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider font-semibold text-text-primary">
            Email <span className="text-accent-dark dark:text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClasses(!!errors.email)}
          />
          {errors.email && <span id="email-error" className="text-red-500 text-xs">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider font-semibold text-text-primary">
            Phone <span className="text-text-tertiary font-normal text-[11px]">(Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses()}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="serviceType" className="text-xs font-mono uppercase tracking-wider font-semibold text-text-primary">
          What do you need help with? <span className="text-accent-dark dark:text-accent">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
          className={inputClasses(!!errors.serviceType)}
        >
          <option value="" disabled>Select service area...</option>
          <option value="Website">Website Development</option>
          <option value="Landing Page">Landing Page &amp; Lead Funnel</option>
          <option value="AI Automation">AI Automation</option>
          <option value="AI Enablement">AI Enablement</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
        {errors.serviceType && <span id="serviceType-error" className="text-red-500 text-xs">{errors.serviceType}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="details" className="text-xs font-mono uppercase tracking-wider font-semibold text-text-primary">
          Project Details <span className="text-accent-dark dark:text-accent">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          value={formData.details}
          onChange={handleChange}
          aria-describedby={errors.details ? 'details-error' : undefined}
          className={inputClasses(!!errors.details)}
          placeholder="Tell us about your current digital setup and what is slowing your business down..."
        />
        {errors.details && <span id="details-error" className="text-red-500 text-xs">{errors.details}</span>}
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
        </Button>
      </div>
    </form>
  );
}
