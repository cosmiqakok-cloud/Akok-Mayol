import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  GraduationCap,
  ShieldCheck,
  Clock,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Cybersecurity Collaboration',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill out all required fields before submitting.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);

    // Simulate sending with clean client feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#080d16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Initiate Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Interested in discussing cybersecurity, software engineering, collaborative research, or academic opportunities? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Verification */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Contact Card */}
            <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 space-y-6">
              <h3 className="text-lg font-semibold text-white pb-3 border-b border-slate-800">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Callout */}
                <div className="p-4 rounded-lg bg-slate-950/80 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Primary Email</span>
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="block text-base sm:text-lg font-mono font-bold text-white hover:text-emerald-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>

                  <p className="text-[11px] text-slate-400">
                    Direct communications are monitored and answered promptly.
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Location</span>
                    <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                    <p className="text-xs text-slate-400">East Africa (UTC+2)</p>
                  </div>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Institution</span>
                    <p className="text-sm font-semibold text-white">{personalInfo.university}</p>
                    <p className="text-xs text-slate-400">{personalInfo.department}</p>
                  </div>
                </div>
              </div>

              {/* Response Time Indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Typical Response: Within 24 hours</span>
              </div>
            </div>

            {/* Security Guarantee Note */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-300 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Security & Privacy Assurance</span>
                <span>Messages sent here are handled with full confidentiality and will never be shared with third parties.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/90 p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Message Prepared!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. Your inquiry has been formatted.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#05080e] border border-slate-800 text-left text-xs font-mono text-slate-300 space-y-1 max-w-md mx-auto">
                    <div className="text-emerald-400 font-semibold">// Transmission Summary:</div>
                    <div>To: {personalInfo.email}</div>
                    <div>From: {formData.email}</div>
                    <div>Subject: {formData.subject}</div>
                    <div className="pt-2 text-slate-400 truncate">Preview: "{formData.message}"</div>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleOpenMailClient}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Default Email App</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: 'Cybersecurity Collaboration',
                          message: '',
                        });
                      }}
                      className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-semibold text-white">Send a Direct Message</h3>
                    <span className="text-xs font-mono text-slate-400">* Required fields</span>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-mono">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-slate-300 block">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 bg-[#05080e] border border-slate-800 rounded-lg text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-slate-300 block">
                        Your Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 bg-[#05080e] border border-slate-800 rounded-lg text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-slate-300 block">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Topic of discussion..."
                      className="w-full px-3.5 py-2.5 bg-[#05080e] border border-slate-800 rounded-lg text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-slate-300 block">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message, project idea, or question here..."
                      className="w-full px-3.5 py-2.5 bg-[#05080e] border border-slate-800 rounded-lg text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 disabled:opacity-60 rounded-lg shadow-md hover:shadow-emerald-500/20 transition-all duration-150 inline-flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                      Direct to {personalInfo.email}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
