# PharmaVigour Operations - Enterprise Corporate Website

[![Status](https://img.shields.io/badge/Status-Production%20Ready-success.svg)]()
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue.svg)]()
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

## 1. Project Overview
The PharmaVigour Operations corporate website is an investor-ready, enterprise-grade web platform designed for the global life sciences and pharmaceutical retail chain industry. It serves as the primary digital touchpoint for enterprise clients, partners, and investors.

**Design System:** Enterprise SaaS, Healthcare AI, Glassmorphism, Minimal, Professional.

### Technology Stack
To ensure maximum performance, zero-dependency bloat, and long-term maintainability, this project is built on a pure, scalable architecture:
*   **Markup:** Semantic HTML5
*   **Styling:** Modular CSS3 (Custom Properties/Variables, Flexbox, Grid)
*   **Scripting:** Vanilla JavaScript (ES6+)
*   **Constraints:** Strictly NO Bootstrap, NO Tailwind, NO jQuery, NO Frontend Frameworks (React/Vue/Angular) in this current version.

---

## 2. Folder Structure
The repository follows a highly modular, component-driven architecture designed to facilitate a seamless future migration to React or backend rendering engines.

```text
pharmavigour-website/
│
├── index.html                  # Landing Page
├── about.html                  # Corporate Narrative & Leadership
├── solutions.html              # Enterprise Platform Capabilities
├── industries.html             # Vertical-specific Use Cases
├── investors.html              # Pitch, Market Size, Roadmap
├── contact.html                # Lead Generation & Support
├── privacy-policy.html         # Legal & Data Compliance
├── terms.html                  # Master Terms of Service
├── 404.html                    # Error Route Handling
│
├── components/                 # Reusable HTML Partials
│   ├── navbar.html
│   ├── footer.html
│   ├── loader.html
│   └── newsletter.html
│
├── assets/                     # Static Assets
│   ├── css/                    # Modular Stylesheets
│   │   ├── main.css            # Core tokens and reset
│   │   ├── components.css      # Reusable UI elements
│   │   ├── responsive.css      # Media queries
│   │   ├── animations.css      # Keyframes and transitions
│   │   └── utilities.css       # Layout and spacing helpers
│   │
│   ├── js/                     # Modular JavaScript
│   │   ├── main.js             # Global application controller
│   │   ├── navbar.js           # Navigation logic
│   │   ├── animations.js       # Intersection Observer setup
│   │   ├── forms.js            # Form validation/handling
│   │   └── theme.js            # UI state management
│   │
│   ├── images/                 # Image Assets (Categorized)
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── founders/
│   │   ├── backgrounds/
│   │   └── icons/
│   │
│   ├── fonts/                  # Local Font Files (if applicable)
│   └── videos/                 # Background/Explainer Videos
│
├── favicon.ico                 # Multi-resolution browser icon
├── robots.txt                  # SEO Crawler directives
├── sitemap.xml                 # Search Engine XML map
└── README.md                   # Project Documentation

```
## 3. Installation & Local Development
Because this project utilizes pure HTML/CSS/JS, no complex build tools (like Webpack or Vite) are required to run it locally. However, to bypass CORS restrictions when loading partials (or for general best practices), it should be run through a local web server.
### Option A: VS Code Live Server (Recommended)
 1. Open the pharmavigour-website folder in Visual Studio Code.
 2. Install the **Live Server** extension by Ritwick Dey.
 3. Right-click on index.html and select **"Open with Live Server"**.
### Option B: Node.js (http-server)
 1. Ensure Node.js is installed.
 2. Open your terminal in the project root.
 3. Run: npx http-server
 4. Open the provided localhost URL in your browser.
### Option C: Python
 1. Ensure Python is installed.
 2. Open your terminal in the project root.
 3. Run: python3 -m http.server 8000
 4. Visit http://localhost:8000 in your browser.
## 4. Deployment
This static architecture can be hosted on any high-performance CDN or static hosting provider such as AWS S3 + CloudFront, Vercel, Netlify, or GitHub Pages.
### Deploying to GitHub Pages
GitHub Pages is an excellent, cost-effective solution for hosting static enterprise sites.
 1. **Initialize Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial enterprise commit"
   
   ```
 2. **Push to GitHub:**
   Create a new repository on GitHub and push your local code.
   ```bash
   git branch -M main
   git remote add origin [https://github.com/your-org/pharmavigour-website.git](https://github.com/your-org/pharmavigour-website.git)
   git push -u origin main
   
   ```
 3. **Enable GitHub Pages:**
   * Go to your repository **Settings** on GitHub.
   * Navigate to the **Pages** section on the left sidebar.
   * Under **Build and deployment**, select **Deploy from a branch**.
   * Select the main branch and the / (root) folder.
   * Click **Save**. Your site will be published at https://your-org.github.io/pharmavigour-website/.
## 5. Custom Domain Configuration
To map your GitHub Pages deployment to your enterprise domain (e.g., www.pharmavigour.com):
 1. **Add Custom Domain in GitHub:**
   * Go to repository **Settings > Pages**.
   * Under **Custom domain**, enter your domain (e.g., www.pharmavigour.com) and click **Save**.
   * This automatically generates a CNAME file in your repository.
   * Check the **Enforce HTTPS** box.
 2. **Configure DNS Provider (GoDaddy, Route53, Cloudflare):**
   Set up the following records in your domain registrar's DNS settings:
   **For the Apex Domain (pharmavigour.com):**
   Create A records pointing to GitHub's IP addresses:
   * 185.199.108.153
   * 185.199.109.153
   * 185.199.110.153
   * 185.199.111.153
   **For the Subdomain (www.pharmavigour.com):**
   Create a CNAME record:
   * **Host/Name:** www
   * **Value/Target:** your-org.github.io.
## 6. Future Roadmap
This architecture has been specifically designed to accommodate future enterprise scaling:
 * **Phase 1: React Migration**
   Because the CSS is heavily modularized and class-driven, migrating to React/Next.js will only require translating HTML elements to JSX and porting .css files to CSS Modules or Styled Components.
 * **Phase 2: Backend & API Integration**
   Forms currently rely on secure third-party embeds (Google Forms). The structure is ready to replace these with native HTML forms communicating with RESTful APIs or GraphQL endpoints via Node.js/Python microservices.
 * **Phase 3: Client Portal Authentication**
   Integration of SSO/SAML providers (Okta, Auth0) directly into the navigation architecture for existing enterprise clients to log into the main SaaS platform.
*Confidential and Proprietary - PharmaVigour Operations*
``
