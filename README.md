# Abhinav Padige - Personal Portfolio Website

A modern, dark-themed portfolio website showcasing Abhinav Padige's expertise as an AI Engineer and Full Stack Developer. Built with React, TypeScript, Tailwind CSS, and Vite, featuring glassmorphism design, smooth animations, and responsive layout.

## 🚀 Features

- **Dark Theme with Gradients**: Sophisticated purple-to-pink gradient accents on a dark background
- **Glassmorphism Design**: Semi-transparent cards with backdrop blur for a modern, premium feel
- **Smooth Animations**: Subtle hover effects, scale transitions, and focus states
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Interactive Contact Form**: Functional form with validation and status feedback
- **Social Media Integration**: Direct links to GitHub and LinkedIn profiles
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
│   ├── ContactSection.jsx
│   ├── AboutSection.jsx
│   ├── EducationSection.jsx
│   ├── HeroSection.jsx
│   ├── SkillsSection.jsx
│   └── ProjectsSection.jsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd abhinav-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

This project is configured for easy deployment to Vercel:

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel will automatically detect the Vite/React setup and deploy
4. Custom domain can be configured in Vercel settings

## 🎨 Design System

### Colors
- **Primary Gradient**: `from-purple-600 to-pink-600` (hover: `from-purple-500 to-pink-500`)
- **Background**: `bg-gray-900` (dark theme)
- **Glassmorphism**: `bg-white/10 backdrop-blur-sm border border-white/20`
- **Text**: `text-white` primary, `text-gray-300/400` secondary
- **Accents**: Purple (`#a855f7`) and pink gradients throughout

### Components
- **Cards**: `rounded-lg bg-white/10 backdrop-blur-sm border border-white/20`
- **Buttons**: Gradient background with hover scale and focus rings
- **Inputs**: Dark background with subtle borders and focus rings
- **Transitions**: `transition-all duration-300` for smooth interactions

## 📱 Responsive Breakpoints

- **Mobile**: < 640px - Single column layout
- **Tablet**: 640px - 1024px - Adaptive grid spacing
- **Desktop**: > 1024px - Full grid layout with max-width containers

## 🤝 Contact

- **GitHub**: [https://github.com/abhinavpadige](https://github.com/abhinavpadige)
- **LinkedIn**: [https://linkedin.com/in/abhinavpadige](https://linkedin.com/in/abhinavpadige)
- **Email**: Available through the contact form

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with ❤️ using React and Tailwind CSS
- Deployed on Vercel for optimal performance
```

Note: Replace `<repository-url>` with your actual GitHub repository URL when publishing. The contact form currently simulates submission - for production use, connect to a backend service or use a form handling service like Formspree, Getform, or Vercel Serverless Functions.