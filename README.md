# Bethany Jep Portfolio

A modern, playful portfolio website with animations, interactive elements, and a responsive design.

## Features

- Modern and clean design with soft pastel colors
- Animated typing effect on the hero section
- Surprise me button with fun facts and confetti animation
- Fully responsive design for all device sizes
- Interactive content carousel
- Blog section with categorized posts and random thought generator
- DevRel page showcasing professional work
- Volunteering page highlighting community impact
- Design playground featuring creative projects
- About page with creative sticky-note fun facts and animation effects
- Contact form with client-side validation

## Pages

1. **Home** - Landing page with overview of all sections
2. **DevRel** - Developer Relations work and projects
3. **Volunteering** - Community service and impact projects  
4. **Designs** - Creative design work and process
5. **Blog** - Thoughts, articles, and insights
6. **About** - Personal information, fun facts, and current interests
7. **Contact** - Get in touch form

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)
- TypedJS for animated typing effect

## Structure

- `index.html` - Main HTML structure
- `css/style.css` - All styling and responsive design rules
- `js/script.js` - JavaScript functionality including animations
- `images/` - Contains background pattern and any other images

## Customization Guide

### Updating Content

1. **Personal Information**: Update your name, tagline, and descriptions in the `index.html` file.

2. **Portfolio Sections**: Add your projects, work examples, and content to each section:
   - DevRel section
   - NGO Work section
   - Designs section
   - Blog section
   - About section

3. **Social Links**: Update the footer links with your actual social media profiles.

### Styling Customization

1. **Color Scheme**: Modify the color variables in the `:root` section of the CSS file:
   ```css
   :root {
     --primary-color: #ff9a9e; /* Light pink */
     --secondary-color: #67d8de; /* Teal accent */
     --dark-color: #2d3748;
     --light-color: #f7fafc;
     --background-color: #ffffff;
     --accent-color: #ffeaa7; /* Light yellow for accents */
   }
   ```

2. **Typography**: Change the fonts by updating the Google Fonts import in the `<head>` section of the HTML file and updating the font variables in the CSS:
   ```css
   :root {
     --heading-font: 'Your-Heading-Font', serif;
     --body-font: 'Your-Body-Font', sans-serif;
   }
   ```

3. **Background**: Replace the background pattern SVG in the images folder.

### Adding Projects

Add your projects to each section by following this structure:

```html
<div class="project-card">
  <img src="path/to/project-image.jpg" alt="Project Name">
  <h3>Project Name</h3>
  <p>Project description goes here. Explain what you did, technologies used, and outcomes.</p>
  <div class="project-links">
    <a href="#" target="_blank">View Project</a>
    <a href="#" target="_blank">View Code</a>
  </div>
</div>
```

## Browser Compatibility

This portfolio is designed to work on all modern browsers including:
- Chrome/Edge (latest versions)
- Firefox (latest version)
- Safari (latest version)
- Mobile browsers

## Development

### Local Development

1. Clone the repository
2. Open the folder in your preferred code editor
3. To preview, open the `index.html` file in your browser

### Deployment

The portfolio can be deployed to any web hosting service such as:
- GitHub Pages
- Netlify
- Vercel
- Any standard web hosting service

No build tools or special setup required - this is a simple HTML, CSS, and JavaScript site.

## Credits

- Fonts: Google Fonts (Playfair Display, Poppins, Caveat)
- Icons: Font Awesome
- Animations: Typed.js

## License

This project is open-source and available under the MIT License.

---

Made with ❤️ by Bethany Jep