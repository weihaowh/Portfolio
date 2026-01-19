# Portfolio Website

A modern, responsive portfolio website to showcase your projects and skills. Features a stunning dark theme with glassmorphism effects, smooth animations, and an engaging user experience.

## 🌐 Live Demo

Visit the live site: [https://weihaowh.github.io/weihaowh](https://weihaowh.github.io/weihaowh)

## ✨ Features

- **Modern Design**: Dark theme with vibrant gradient accents and glassmorphism effects
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Engaging micro-interactions and scroll animations
- **SEO Optimized**: Semantic HTML and meta tags for better search engine visibility
- **Easy to Customize**: Well-organized code with clear sections

## 🚀 Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal background and introduction
3. **Projects** - Showcase of featured projects with images and descriptions
4. **Skills** - Technology stack and tools
5. **Contact** - Social links and contact information

## 📁 Project Structure

```
weihaowh/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and design system
├── script.js           # JavaScript functionality
├── images/             # Project images and assets
│   ├── project-1.png
│   ├── project-2.png
│   └── project-3.png
└── README.md           # This file
```

## 🛠️ Customization Guide

### 1. Update Personal Information

**In `index.html`:**
- Replace "Your Name" with your actual name (lines 9, 33, 207)
- Update the meta description (line 6)
- Change the hero subtitle to match your role (line 34)
- Update the hero description with your personal pitch (lines 35-38)

### 2. Update About Section

**In `index.html` (lines 56-78):**
- Modify the about text to tell your story
- Replace the emoji (👨‍💻) with your own photo if desired

### 3. Add Your Projects

**For each project in `index.html` (lines 90-186):**
1. Replace the project image in the `images/` folder
2. Update the project title
3. Modify the project description
4. Change the technology tags
5. Add your actual demo and GitHub links

**To add more projects:**
- Copy one of the existing `<article class="project-card fade-in">` blocks
- Update all the content
- Add the corresponding image to the `images/` folder

### 4. Update Skills

**In `index.html` (lines 198-228):**
- Modify the skill items to match your technology stack
- Add or remove skill categories as needed
- Update individual skill items within each category

### 5. Update Contact Links

**In `index.html` (lines 242-257):**
- Replace `your.email@example.com` with your email
- Update GitHub, LinkedIn, and Twitter URLs
- You can add more social links or remove unused ones

### 6. Customize Colors and Styling

**In `styles.css` (lines 5-36):**
- Modify CSS variables to change colors, spacing, or fonts
- The gradient colors can be customized in the `:root` section
- Change typography by updating the Google Fonts import in `index.html`

## 🌟 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: **weihaowh**
4. Make it public
5. DO NOT initialize with README, .gitignore, or license (you already have these files)
6. Click "Create repository"

### Step 2: Push Your Code

Open PowerShell in your project directory (`C:\Users\sun-w\Desktop\APP`) and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/weihaowh.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top menu)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and "/ (root)"
6. Click "Save"

### Step 4: Access Your Website

After a few minutes, your site will be live at:
```
https://yourusername.github.io/weihaowh
```

Replace `yourusername` with your actual GitHub username.

## 🔄 Updating Your Portfolio

Whenever you make changes to your portfolio:

```powershell
git add .
git commit -m "Description of your changes"
git push
```

GitHub Pages will automatically update your site within a few minutes.

## 📱 Testing Locally

To test your website locally before deploying:

### Option 1: Using Python
```powershell
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 2: Using Node.js
```powershell
# Install http-server globally (one time)
npm install -g http-server

# Run the server
http-server

# Then visit: http://localhost:8080
```

### Option 3: Using VS Code
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🎨 Design Credits

- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- **Color Palette**: Custom gradient-based design system
- **Icons**: Emoji (easily replaceable with Font Awesome or similar)

## 📝 License

Feel free to use this template for your own portfolio! No attribution required.

## 💡 Tips for Success

1. **Keep it updated**: Regularly add new projects and update your skills
2. **Use real images**: Replace placeholder images with actual project screenshots
3. **Write compelling descriptions**: Make your projects stand out with clear, engaging descriptions
4. **Optimize images**: Compress images to improve page load speed
5. **Test responsiveness**: Check your site on different devices and screen sizes
6. **Get feedback**: Share with friends or colleagues for honest feedback

## 🐛 Troubleshooting

**Issue: Website not showing up on GitHub Pages**
- Wait 5-10 minutes after enabling GitHub Pages
- Check that you selected the correct branch (main) and directory (root)
- Ensure your repository is public

**Issue: Images not loading**
- Check that image paths are correct (relative paths)
- Ensure images are in the `images/` folder
- Verify image file names match exactly (case-sensitive)

**Issue: Styles not applying**
- Clear your browser cache
- Check that `styles.css` is in the same directory as `index.html`
- Verify the CSS file link in `index.html` is correct

---

Built with ❤️ | Happy Coding! 🚀
