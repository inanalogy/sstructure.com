# Smart Structure - Static Website

A modern, bilingual (English/Arabic) static website for Smart Structure, showcasing their expertise in specialized structural engineering including space frame, tensile fabric structures, and skylights.

## 🌟 Features

- **Bilingual Support**: Complete English and Arabic language support with easy toggle
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Portfolio Showcase**: Display of international projects across the Middle East
- **Contact Forms**: Inquiry and contact forms ready for integration with backend services
- **Fast Loading**: Optimized static site with lazy loading for images
- **SEO Friendly**: Semantic HTML with proper meta tags

## 📄 Pages

1. **Home** - Landing page with hero section and service overview
2. **About** - Company history, founder profile, mission, and expertise
3. **Services** - Detailed services including Design, Manufacturing, Supply, Erection, and Project Coordination
4. **Portfolio** - Showcase of completed projects with details
5. **Contact** - Contact information and inquiry form

## 🎨 Design

- **Color Scheme**:
  - Primary: `#2b2e35`
  - Secondary: `#31343c`
  - Accent: `#f39c12`
- **Typography**: Segoe UI with fallbacks
- **Icons**: Font Awesome 6.4.0
- **Layout**: CSS Grid and Flexbox

## 🚀 Quick Start

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/inanalogy/sstructure.com.git
cd sstructure.com
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python3 -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js (http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

This site is configured for GitHub Pages. It will automatically deploy when you push to the main branch.

**Live Site**: `https://inanalogy.github.io/sstructure.com/`

## 📁 Project Structure

```
sstructure.com/
├── index.html           # Home page
├── about.html           # About page
├── services.html        # Services page
├── portfolio.html       # Portfolio page
├── contact.html         # Contact page
├── assets/
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/
│       ├── logo.png     # Company logo
│       ├── project*.jpg # Portfolio images
│       └── projects/    # Detailed project images
└── README.md
```

## 🌐 Language Support

The website includes full bilingual support:

- **English**: Default language
- **Arabic**: Complete RTL (Right-to-Left) support

Language preference is saved in browser localStorage and persists across sessions.

## 📝 Customization

### Adding New Projects

1. Add project images to `assets/images/projects/`
2. Update `portfolio.html` with new project details
3. Follow the existing HTML structure for consistency

### Modifying Colors

Update CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #2b2e35;
    --secondary-color: #31343c;
    --accent-color: #f39c12;
    /* ... */
}
```

### Contact Form Integration

The contact form is currently set up for client-side validation. To make it functional:

1. **Option 1**: Use Formspree (recommended for static sites)
   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action in `contact.html`

2. **Option 2**: Use your own backend API
   - Update the `handleContactSubmit()` function in `assets/js/main.js`
   - Add your API endpoint

3. **Option 3**: Use Netlify Forms (if hosting on Netlify)
   - Add `netlify` attribute to the form tag

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## 📞 Contact Information

**Smart Structure**
- Address: Sheck Zayed District, 6 of October, Giza, Egypt
- Phone: +20100.122.1800
- Email: smart@sstructure.com
- Website: https://sstructure.com

## 📄 License

This project is created for Smart Structure. All rights reserved.

## 🤝 Contributing

This is a private project for Smart Structure. For any updates or modifications, please contact the project maintainer.

---

Built with ❤️ for Smart Structure | © 2025 All rights reserved