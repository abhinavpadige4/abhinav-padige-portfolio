import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setSubmitStatus(null); // Reset status on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call (replace with actual backend integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // In a real app, you would send data to a backend here
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Contact
        </h2>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30 text-green-400">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/20 rounded-lg border border-red-500/30 text-red-400">
            Failed to send message. Please try again later.
          </div>
        )}

        <div className="glass-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-y"
                placeholder="Your message..."
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-4 rounded-lg transition-transform duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Connect With Me
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="h-6 w-6 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77a5.07 5.07 0 00-4.5-4.75A5.07 5.07 0 0012.1 1c-.26.22-.51.43-.75.62a4.49 4.49 0 00-5.81 0A5.07 5.07 0 006.5 4.77a5.07 5.07 0 00-4.5 4.75c0 5.46 3.3 6.61 6.44 7A3.37 3.37 0 0018.14 15.13V22m-7-5l-3 3m0 0l3 3m3-3-3-3m3 3V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="h-6 w-6 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// FILE: README.md
# Abhinav Padige - Personal Portfolio

A modern, dark-themed personal portfolio website showcasing Abhinav Padige's skills as an AI Engineer and Full Stack Developer. Built with React, TypeScript, Tailwind CSS, and Vite, featuring glassmorphism design, smooth animations, and responsive layout.

## ✨ Features

- **Dark Theme with Gradients**: Sophisticated purple-to-pink gradient accents on a dark background
- **Glassmorphism Design**: Semi-transparent cards with backdrop blur for a modern, premium feel
- **Smooth Animations**: Subtle hover effects, transitions, and interactive elements
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Contact Form**: Functional form with simulated submission and status feedback
- **Social Links**: Direct links to GitHub and LinkedIn profiles
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Heroicons (via inline SVG)
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── EducationSection.jsx
│   ├── ProjectsSection.jsx
│   └── ContactSection.jsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-abhinav-padige.git
   cd portfolio-abhinav-padige
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

## 🌐 Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect the Vite setup and deploy it
4. Your site will be live at `https://your-project-name.vercel.app`

## 🎨 Design System

### Colors
- Primary Gradient: `from-purple-500 to-pink-500` (`#a855f7` to `#ec4899`)
- Background: `bg-gray-900` (`#111827`)
- Glass Cards: `bg-white/10` with `backdrop-blur-sm`
- Borders: `border-gray-700` (`#374151`)
- Text: `text-white` (`#ffffff`) with muted variants

### Components
All sections use consistent styling:
- Glassmorphism cards: `bg-white/10 backdrop-blur-sm border border-gray-700 rounded-lg`
- Gradient text: `bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`
- Hover effects: `hover:scale-[1.02] transition-transform duration-200`
- Focus states: `focus:ring-2 focus:ring-purple-500 focus:border-transparent`

## 📧 Contact

For inquiries or collaboration opportunities, please use the contact form on the website or reach out via:
- **GitHub**: [https://github.com/yourusername](https://github.com/yourusername)
- **LinkedIn**: [https://linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with ❤️ using React and Tailwind CSS
- Icons sourced from Heroicons

---

*© 2023 Abhinav Padige. All rights reserved.*
EOF
</think># FILE: src/components/ContactSection.jsx
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setSubmitStatus(null); // Reset status on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call (replace with actual backend integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // In a real app, you would send data to a backend here
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Contact
        </h2>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30 text-green-400">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/20 rounded-lg border border-red-500/30 text-red-400">
            Failed to send message. Please try again later.
          </div>
        )}

        <div className="glass-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-y"
                placeholder="Your message..."
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-4 rounded-lg transition-transform duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Connect With Me
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="h-6 w-6 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77a5.07 5.07 0 00-4.5-4.75A5.07 5.07 0 0012.1 1c-.26.22-.51.43-.75.62a4.49 4.49 0 00-5.81 0A5.07 5.07 0 006.5 4.77a5.07 5.07 0 00-4.5 4.75c0 5.46 3.3 6.61 6.44 7A3.37 3.37 0 0018.14 15.13V22m-7-5l-3 3m0 0l3 3m3-3-3-3m3 3V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="h-6 w-6 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// FILE: README.md
# Abhinav Padige - Personal Portfolio

A modern, dark-themed personal portfolio website showcasing Abhinav Padige's skills as an AI Engineer and Full Stack Developer. Built with React, TypeScript, Tailwind CSS, and Vite, featuring glassmorphism design, smooth animations, and responsive layout.

## ✨ Features

- **Dark Theme with Gradients**: Sophisticated purple-to-pink gradient accents on a dark background
- **Glassmorphism Design**: Semi-transparent cards with backdrop blur for a modern, premium feel
- **Smooth Animations**: Subtle hover effects, transitions, and interactive elements
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Contact Form**: Functional form with simulated submission and status feedback
- **Social Links**: Direct links to GitHub and LinkedIn profiles
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Heroicons (via inline SVG)
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── EducationSection.jsx
│   ├── ProjectsSection.jsx
│   └── ContactSection.jsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-abhinav-padige.git
   cd portfolio-abhinav-padige
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

## 🌐 Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect the Vite setup and deploy it
4. Your site will be live at `https://your-project-name.vercel.app`

## 🎨 Design System

### Colors
- Primary Gradient: `from-purple-500 to-pink-500` (`#a855f7` to `#ec4899`)
- Background: `bg-gray-900` (`#111827`)
- Glass Cards: `bg-white/10` with `backdrop-blur-sm`
- Borders: `border-gray-700` (`#374151`)
- Text: `text-white` (`#ffffff`) with muted variants

### Components
All sections use consistent styling:
- Glassmorphism cards: `bg-white/10 backdrop-blur-sm border border-gray-700 rounded-lg`
- Gradient text: `bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`
- Hover effects: `hover:scale-[1.02] transition-transform duration-200`
- Focus states: `focus:ring-2 focus:ring-purple-500 focus:border-transparent`

## 📧 Contact

For inquiries or collaboration opportunities, please use the contact form on the website or reach out via:
- **GitHub**: [https://github.com/yourusername](https://github.com/yourusername)
- **LinkedIn**: [https://linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with ❤️ using React and Tailwind CSS
- Icons sourced from Heroicons

---

*© 2023 Abhinav Padige. All rights reserved.*
EOF