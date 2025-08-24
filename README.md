# 🛡️ ByteForward - Advanced Cybersecurity Solutions

A modern, secure, and high-performance website for ByteForward, a cybersecurity business. Built with cutting-edge web technologies and deployed with a comprehensive CI/CD pipeline.

## ✨ Features

- **Modern Design**: Clean, professional cybersecurity-themed design with dark mode
- **Responsive Layout**: Mobile-first design that works on all devices
- **Security-First**: Comprehensive security headers and Content Security Policy
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Friendly**: Semantic HTML and meta tags for search engine optimization
- **CI/CD Pipeline**: Automated testing, building, and deployment
- **Multiple Deployment Options**: GitHub Pages and Cloudflare Pages support
- **Accessibility**: WCAG compliant with screen reader support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 8+
- Git
- GitHub account
- Cloudflare account (optional, for Cloudflare Pages deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/byteforward.git
   cd byteforward
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

Your website will be available at `http://localhost:3000`

## 🏗️ Build and Deploy

### Local Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Run tests
npm run test

# Run all quality checks and build
npm run optimize
```

## 🚢 Deployment Options

### Option 1: GitHub Pages (Automatic)

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Configure secrets** (if using Cloudflare features)
   - Go to repository Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `CLOUDFLARE_API_TOKEN`
     - `CLOUDFLARE_ACCOUNT_ID`
     - `CLOUDFLARE_ZONE_ID`

3. **Push to main branch**
   ```bash
   git push origin main
   ```

The GitHub Actions workflow will automatically build and deploy your site.

### Option 2: Cloudflare Pages

#### Method A: Automatic Deployment (Recommended)

1. **Connect repository to Cloudflare Pages**
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository

2. **Configure build settings**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: Add from `.env.example`

#### Method B: Manual Deployment via Wrangler

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   npm run deploy:cf
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Cloudflare (required for Cloudflare Pages)
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_ZONE_ID=your_zone_id

# Domain Configuration
DOMAIN=byteforward.com
STAGING_DOMAIN=staging.byteforward.com

# Additional configuration...
```

### Customization

#### Update Company Information

Edit the following files to customize for your business:

- `index.html` - Update company name, content, and contact information
- `assets/css/styles.css` - Modify colors, fonts, and styling
- `package.json` - Update project metadata
- `wrangler.toml` - Configure Cloudflare settings

#### Color Scheme

The website uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #00d4ff;      /* Main brand color */
  --secondary-color: #ff6b35;     /* Secondary accent */
  --accent-color: #00ff88;        /* Success/accent color */
  /* ... more variables in styles.css */
}
```

## 🔒 Security Features

### Implemented Security Measures

- **Content Security Policy (CSP)**: Prevents XSS attacks
- **Security Headers**: HSTS, X-Frame-Options, X-Content-Type-Options
- **Input Validation**: Client-side form validation
- **HTTPS Enforcement**: Automatic HTTPS redirects
- **Dependencies Scanning**: Automated vulnerability scanning

### Security Headers

The website implements comprehensive security headers:

```
Content-Security-Policy: default-src 'self'; ...
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Referrer-Policy: strict-origin-when-cross-origin
```

## 📊 CI/CD Pipeline

The GitHub Actions workflow includes:

### 🔍 Security & Quality Checks
- **Trivy Security Scanning**: Vulnerability detection
- **ESLint**: Code quality and style checking
- **Prettier**: Code formatting verification
- **Unit Tests**: Automated testing

### 🏗️ Build Process
- **Vite Build**: Optimized production build
- **Asset Optimization**: Minification and compression
- **Build Artifact Upload**: Stores build for deployment

### 🚀 Deployment
- **GitHub Pages**: Automatic deployment to GitHub Pages
- **Cloudflare Pages**: Deployment to Cloudflare's edge network
- **Cache Purging**: Automatic cache invalidation

### 📈 Performance & Monitoring
- **Lighthouse Audit**: Performance, accessibility, and SEO scoring
- **Security Headers Check**: Validates security configuration
- **Build Size Reporting**: Tracks bundle size changes

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test -- --coverage
```

### Test Structure

```
__tests__/
├── unit/
│   ├── components.test.js
│   └── utils.test.js
├── integration/
│   └── contact-form.test.js
└── e2e/
    └── user-journey.test.js
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (last 2 versions)

## 🎯 Performance Optimization

### Implemented Optimizations

- **Code Splitting**: Separate vendor and app bundles
- **Asset Optimization**: Image compression and lazy loading
- **Caching Strategy**: Long-term caching for static assets
- **CDN Delivery**: Global content delivery via Cloudflare
- **Bundle Analysis**: Build size monitoring

### Performance Metrics

Target scores (measured by Lighthouse):
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🐛 Troubleshooting

### Common Issues

#### Build Failures

1. **Node.js Version**: Ensure you're using Node.js 18+
2. **Dependencies**: Run `npm install` to ensure all dependencies are installed
3. **Environment Variables**: Check that all required variables are set

#### Deployment Issues

1. **GitHub Actions Permissions**: Ensure repository has appropriate permissions
2. **Secrets Configuration**: Verify all required secrets are set
3. **Branch Protection**: Check if main branch has protection rules

#### Performance Issues

1. **Large Bundle Size**: Run `npm run build` and check dist/ folder sizes
2. **Slow Loading**: Use browser dev tools to identify bottlenecks
3. **Cache Issues**: Clear browser cache or use incognito mode

### Getting Help

1. **Check Issues**: Look at existing GitHub issues
2. **Create Issue**: Create a detailed bug report
3. **Discussions**: Use GitHub Discussions for questions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all CI checks pass

## 📞 Support

- **Email**: contact@byteforward.com
- **Website**: https://byteforward.com
- **GitHub Issues**: https://github.com/your-username/byteforward/issues

## 🏆 Acknowledgments

- **Vite**: Fast build tool and dev server
- **Cloudflare**: Edge computing platform and CDN
- **GitHub Actions**: CI/CD platform
- **Inter Font**: Beautiful typography by Rasmus Andersson

---

**ByteForward** - Securing your digital future, one commit at a time. 🛡️
