"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";
import { X, Loader2 } from "lucide-react"; // Using lucide-react for consistency

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not set up correctly.");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      "g-recaptcha-response": recaptchaToken,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        // <-- 1. CHANGED: Removed argument
        toast.success("Success! 🎉 Your message has been sent.");
        setName("");
        setEmail("");
        setMessage("");
        setRecaptchaToken(null);
        onClose();
      })
      .catch(() => {
        // <-- 2. CHANGED: Removed argument
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          ></div>

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              Have a suggestion or see a deal that needs updating? Let us know!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-center pt-2">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token) => setRecaptchaToken(token)}
                />
              </div>

              <button
                type="submit"
                disabled={!recaptchaToken || isSubmitting}
                className="w-full flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg text-base transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
