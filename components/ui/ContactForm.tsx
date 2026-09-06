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
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!formData.details.trim() || formData.details.length < 15) {
      newErrors.details = 'Please provide more details (minimum 15 characters)';
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
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error('Submission error:', err);
      const message = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again or email us directly.';
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 sm:p-12 text-center border border-border-subtle rounded-2xl bg-surface shadow-md">
        <div className="w-16 h-16 bg-accent/15 text-accent-dark dark:text-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-accent-dark dark:text-accent font-semibold block mb-2">
          Enquiry Transmitted
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-text-primary">
          Thank you, {formData.name.split(' ')[0]}!
        </h3>
        <p className="text-base text-text-secondary max-w-md mx-auto leading-relaxed mb-8">
          Our founders (Yash &amp; Rajat) have been notified. We will review your project requirements and get back to you in less than 24 hours.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              company: '',
              email: '',
              phone: '',
              serviceType: '',
              details: '',
            });
          }}
        >
          Send Another Message
        </Button>
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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 p-6 sm:p-10 rounded-2xl border border-border-subtle bg-surface shadow-xs">
      {serverError && (
        <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-2">
          <span>⚠️ {serverError}</span>
        </div>
      )}

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
            placeholder="Acme Inc / Healthcare"
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
          <option value="Website">Website &amp; Front-End Development</option>
          <option value="Landing Page">Landing Page &amp; Lead Funnel</option>
          <option value="AI Automation">Workflow &amp; Process Automation</option>
          <option value="AI Enablement">Digital Systems Consulting</option>
          <option value="Not Sure Yet">Not Sure Yet / Consultation</option>
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
          placeholder="Tell us about your business, current setup, or the operational problem that needs fixing..."
        />
        {errors.details && <span id="details-error" className="text-red-500 text-xs">{errors.details}</span>}
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto font-semibold">
          {isSubmitting ? 'Transmitting Enquiry...' : 'Send Enquiry ↗'}
        </Button>
        <span className="text-[11px] font-mono text-text-tertiary">
          🔒 Direct founder response in &lt;24h
        </span>
      </div>
    </form>
  );
}
