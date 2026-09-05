import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call (replace with actual endpoint in production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send data to a backend like:
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Contact Me
        </h2>

        {/* Form Status Message */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400">
            Failed to send message. Please try again later.
          </div>
        )}

        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          aria-label="Contact form"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-a855f7 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-a855f7 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-a855f7 focus:border-transparent text-white placeholder-gray-400 resize-y transition-all duration-300"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-a855f7 to-ec4899 hover:from-9333ea hover:to-f472b6 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <span>Send Message</span>
            )}
          </button>
        </form>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Let's Connect</h3>
          <p className="text-gray-400 mb-6">Feel free to reach out via email or connect with me on social platforms</p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/abhinavpadige" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-12 h-12 bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.05] rounded-lg"
            >
              <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.933 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.645 1.653.24 2.874.105 3.176.77-.84 1.235-1.91 1.235-3.22 0-4.602-2.802-5.625-5.475-5.92-.435-.37-.82-1.102-.82-2.22 0-.494.162-.88.365-.98a12.31 12.31 0 012.55-.19c1.285.096 2.475.31 3.44.39a12.16 12.16 0 016.184-.19c.203.1  .405.39.575.98.203.87.105 1.922.105 2.22 0 1.512-.425 2.712-.545 3.02-.135.242-.545.866-.123 1.605z"/>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com/in/abhinavpadige" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-12 h-12 bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.05] rounded-lg"
            >
              <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.545v6.286zM5.337 7.433c-1.344 0-2.442-1.098-2.442-2.442 0-1.344 1.098-2.442 2.442-2.442 1.344 0 2.442 1.098 2.442 2.442 0 1.344-1.098 2.442-2.442 2.442zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;