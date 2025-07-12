# Portfolio Website - Junior Software Developer

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing the skills and projects of a Junior Software Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling navigation and animated components
- **Project Showcase**: Carousel-style project display with detailed information
- **Skills Visualization**: Progress bars and categorized skill display
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with optimized animations

## 🛠️ Technologies Used

- **Frontend**: React 18, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Styling**: Custom CSS with Tailwind utilities
- **Build Tool**: Create React App

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd my-protfolio-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills section
│   ├── Projects.js     # Projects showcase
│   ├── Experience.js   # Experience section
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer component
├── App.js              # Main App component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  },
  accent: {
    // Your accent color palette
  }
}
```

### Content Updates

1. **Personal Information**: Update personal details in each component
2. **Projects**: Modify the projects array in `Projects.js`
3. **Skills**: Update skills and proficiency levels in `Skills.js`
4. **Contact Info**: Update contact information in `Contact.js` and `Footer.js`

### Images

Replace placeholder images with your own:
- Profile photo in `About.js`
- Project images in `Projects.js`
- Background images as needed

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Key Sections

### Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Social media links

### About Section
- Professional background
- Personal values and approach
- Profile image placeholder

### Skills Section
- Categorized skills with progress bars
- Technology icons
- Additional capabilities

### Projects Section
- Interactive carousel
- Project details and technologies
- Live demo and code links

### Experience Section
- Education and certifications
- Projects and internships
- Achievements and competitions

### Contact Section
- Functional contact form
- Contact information
- Social media links

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Custom colors, fonts, animations
    }
  }
}
```

### Animations

Framer Motion is used for smooth animations. Animation configurations can be found in each component.

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure your domain

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repository-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Made with ❤️ using React and Tailwind CSS** 