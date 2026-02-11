"use client";

import { useState } from "react";
import { FadeUp } from "@/components/common/Motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,      // Match your template variable
          from_email: formData.email,     // Match your template variable
          message: formData.message,      // Match your template variable
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === 'OK') {
        setStatus('success');
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 10 seconds
        setTimeout(() => setStatus('idle'), 10000);
      }
    } catch (error: any) {
      console.error('Email send error:', error);
      setStatus('error');
      setErrorMessage(error?.text || 'Failed to send message. Please try again.');
    }
  };

  return (
    <FadeUp>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 160 }}
        className="
          relative p-8 md:p-10 rounded-2xl
          bg-white/5
          backdrop-blur-2xl
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          overflow-hidden
        "
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-500/20 opacity-20" />

        {/* Header */}
        <div className="relative mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Send a Message
          </h2>
          <p className="text-sm text-white/60">
            Let&apos;s talk about your idea, project, or collaboration.
          </p>
        </div>

        {/* Error Message */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-sm text-red-300">
              {errorMessage}
            </p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="relative space-y-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <label className="block text-sm font-medium text-white/70 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="John Doe"
              disabled={status === 'loading'}
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/30
                backdrop-blur-xl
                border border-white/10
                text-white
                placeholder:text-white/40
                focus:outline-none focus:border-white/50
                transition
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-white/70 mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="john@example.com"
              disabled={status === 'loading'}
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/30
                backdrop-blur-xl
                border border-white/10
                text-white
                placeholder:text-white/40
                focus:outline-none focus:border-white/50
                transition
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-sm font-medium text-white/70 mb-2">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about your project..."
              disabled={status === 'loading'}
              className="
                w-full px-4 py-3 rounded-xl
                bg-black/30
                backdrop-blur-xl
                border border-white/10
                text-white
                placeholder:text-white/40
                focus:outline-none focus:border-white/50
                transition resize-none
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: status === 'loading' ? 1 : 1.03 }}
            whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
            className="
              w-full mt-4 flex items-center justify-center gap-3
              px-6 py-4 rounded-xl
              bg-gradient-to-br from-black to-white
              text-white
              font-semibold
              shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              hover:bg-white/50
              transition
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {status === 'loading' ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </motion.button>

          {/* Success Message */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <p className="text-sm text-emerald-300">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}
        </form>
      </motion.div>
    </FadeUp>
  );
}