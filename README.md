# 🚀 Suhas Gondukupi - Portfolio Website

A modern, responsive portfolio website built with React.js, featuring smooth animations, professional design, and integrated contact form functionality.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and responsive layout
- ⚡ **Fast Performance** - Optimized with React and modern build tools
- 🎭 **Smooth Animations** - Framer Motion for engaging interactions
- 📱 **Mobile-First** - Fully responsive across all devices
- 📧 **Contact Form** - Integrated EmailJS for seamless communication
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🏆 **Project Showcase** - Interactive project displays with LinkedIn embeds
- 📊 **Skills Visualization** - Animated skills and technology stack

## 🛠 Tech Stack

**Frontend:**
- React.js 18.2.0
- Tailwind CSS
- Framer Motion
- Lucide React Icons

**Backend Services:**
- EmailJS (Contact Form)
- Vite (Build Tool)

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Suhas2002G/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

4. **Configure EmailJS (See setup section below)**

5. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📧 EmailJS Setup

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service

1. **Add Email Service:**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Connect your email account
   - Note down the **Service ID**

2. **Create Email Templates:**
   - Go to "Email Templates"
   - Create two templates:

   **Template 1: Contact Form (For you)**
   ```
   Subject: New Portfolio Contact - {{subject}}
   
   Name: {{name}}
   Email: {{email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

   **Template 2: Auto-Reply (For users)**
   ```
   Subject: Thank You for Reaching Out!
   
   Hi {{name}},
   
   I've received your message and will get back to you within 24 hours.
   
   Best regards,
   Suhas G
   ```

   - Note down the **Template IDs** for both templates

3. **Get Public Key:**
   - Go to "Account" → "API Keys"
   - Copy your **Public Key**

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_EMAILJS_SERVICE_ID=your_service_id_here
VITE_API_EMAILJS_TEMPLATE_ID=your_main_template_id_here
VITE_API_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 4: Test Email Functionality

1. Fill out the contact form on your website
2. Check your email for the test message
3. Verify the auto-reply is sent to the user

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── society-360.jpg
│   │   └── logistics-system.jpg
│   ├── exp-logos/
│   │   ├── ayc.jpg
│   │   └── vibgyor.jpeg
│   └── achievements/
│       ├── winner-jingle-byte.png
│       └── thunder-byte.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── MaintenancePage.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useTheme.js
│   └── App.jsx
├── .env
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/sections/Hero.jsx`):
   - Name, title, and description
   - Social media links
   - Profile image

2. **About Section** (`src/sections/About.jsx`):
   - Personal bio
   - Education background
   - Personal interests

3. **Projects** (`src/sections/Projects.jsx`):
   - Project details and descriptions
   - Technology stack
   - GitHub and demo links
   - LinkedIn embed URLs

4. **Experience** (`src/sections/Experience.jsx`):
   - Work experience
   - Company logos and details
   - Role descriptions

### Images

Add your images to the appropriate folders:

- Profile picture: `public/images/profile.jpg`
- Project screenshots: `public/images/`
- Company logos: `public/exp-logos/`
- Achievement certificates: `public/achievements/`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com/)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy

### Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

### Environment Variables in Production

Remember to add your environment variables in your hosting platform:

- `VITE_API_EMAILJS_SERVICE_ID`
- `VITE_API_EMAILJS_TEMPLATE_ID`
- `VITE_API_EMAILJS_PUBLIC_KEY`

## 🐛 Troubleshooting

### Common Issues

1. **EmailJS not working**
   - Verify environment variables are correctly set
   - Check template variables match the code
   - Test using EmailJS playground

2. **Build errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version: `node --version`

3. **Images not loading**
   - Verify file paths in the public folder
   - Check image file names and extensions

### Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup:

- 📧 Email: suhas8838@gmail.com
- 💼 LinkedIn: [Suhas Gondukupi](https://www.linkedin.com/in/suhas8838/)
- 🐛 GitHub Issues: [Create an issue](https://github.com/Suhas2002G/portfolio/issues)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide](https://lucide.dev/) - Icons
- [EmailJS](https://www.emailjs.com/) - Email services

---

**⭐ Don't forget to star this repository if you found it helpful!**

Built with ❤️ by [Suhas Gondukupi](https://github.com/Suhas2002G)
