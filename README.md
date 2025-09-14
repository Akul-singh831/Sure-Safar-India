# Sure Safar India 🛡️

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.6-38B2AC.svg?logo=tailwind-css)
![i18n](https://img.shields.io/badge/i18n-Multilingual-yellow.svg)
![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-black.svg?logo=vercel)
![Deployment Status](https://img.shields.io/github/deployments/Akul-singh831/safeguard_india/Production?label=vercel&logo=vercel)

A comprehensive platform for national security and safety in India, providing an integrated suite of tools for emergency response, tourist safety, security monitoring, and multilingual onboarding.

## 🌟 Features

### 1. Unified Landing Experience

- Modern and responsive homepage showcasing the platform's capabilities
- Interactive map displaying safety coverage across India
- Technology showcase section highlighting AI and machine learning features
- Trust indicators showing platform reliability metrics

### 2. Responder Command Dashboard

- Real-time incident monitoring and response coordination
- Interactive map interface for geographical visualization of incidents
- AI-powered incident analysis and recommendation system
- Communication panel for coordinating responder actions
- Analytics dashboard for monitoring response metrics

### 3. Multilingual Onboarding Hub

- Support for multiple languages (English, Hindi, Punjabi, Telugu)
- Step-by-step onboarding process with progress tracking
- Country-specific flows for international visitors
- KYC verification integration
- Cultural orientation for tourists
- Interactive tutorial for platform features
- Family sharing capabilities for group travelers
- Travel itinerary planning and management

### 4. Integration Partnership Portal

- API documentation for third-party integrations
- Partnership tier system with different access levels
- Secure partner login section
- Integration showcase of successful implementations
- Downloadable resources for developers
- Success stories from existing partnerships

### 5. Trust and Security Center

- Comprehensive compliance framework documentation
- Blockchain security features explanation
- Downloadable security resources and whitepapers
- Security certification details

### 6. Cross-Platform Features

- Responsive design for all device sizes
- Multilingual support with 4 languages
- Accessibility compliance
- Dark/light mode support
- Error boundary implementation for robust error handling

## 🔧 Technologies Used

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.0.0
- **Styling**: TailwindCSS 3.4.6
- **Routing**: React Router 6.30.1
- **State Management**: Redux Toolkit 2.9.0
- **Form Management**: React Hook Form 7.62.0
- **Data Visualization**: D3.js 7.9.0, Recharts 2.15.4
- **Internationalization**: i18next, react-i18next
- **HTTP Client**: Axios 1.12.1
- **UI Components**: Custom components with Radix UI primitives
- **Animation**: Framer Motion 10.18.0
- **Date Handling**: date-fns 4.1.0
- **AI Integration**: Google Generative AI SDK

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Akul-singh831/safeguard_india.git
   cd safeguard_india
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key
   VITE_MAPS_API_KEY=your_maps_api_key
   VITE_API_BASE_URL=your_api_base_url
   ```

4. Start the development server

   ```bash
   pnpm run dev
   ```

5. Open your browser and navigate to [http://localhost:4028](http://localhost:4028)

### Production Build

```bash
pnpm run build
```

This will generate optimized production files in the `build` directory.

### Preview Production Build

```bash
pnpm run serve
```

## 📝 Environment Variables

The following environment variables are required for deployment:

| Variable | Description |
|----------|-------------|
| `VITE_GEMINI_API_KEY` | API key for Google Gemini AI features |
| `VITE_MAPS_API_KEY` | API key for map integrations (if used) |
| `VITE_API_BASE_URL` | Base URL for backend API endpoints (if used) |

## 🌐 Vercel Deployment

This project is configured for easy deployment to Vercel. Follow these steps to deploy:

1. Fork or push this repository to your GitHub account
2. Connect your GitHub repository to Vercel:
   - Sign in to [Vercel](https://vercel.com)
   - Click "Import Project" and select "Import Git Repository"
   - Select your repository and click "Import"
3. Configure the following environment variables during setup:
   - Go to Project Settings > Environment Variables
   - Add a new variable named `VITE_GEMINI_API_KEY` with the value `AIzaSyCsRlCpuzpBjlKmo_JPf1f8WRrgBixYBcw` (or your current API key)
   - Add any other required API keys as needed
4. Ensure the "Build and Output Settings" are configured properly:
   - Build Command: `pnpm run build`
   - Output Directory: `build` (not the default `dist`)
   - The provided `vercel.json` file already specifies these settings
5. Click "Deploy" and wait for the deployment to complete
6. Your site will be available at `https://safeguard-india-[username].vercel.app`

> **Note**: If you encounter the "No Output Directory named 'dist' found" error, make sure the Output Directory is set to `build` in your project settings or use the `vercel.json` configuration file provided in this repository.

## 🗣️ Internationalization

The platform supports the following languages:

- English (en)
- Hindi (hi)
- Punjabi (pa)
- Telugu (te)

To add a new language:

1. Create a new translation file in `src/locales/[language-code]/translation.json`
2. Import and add the translation in `src/i18n.js`

## 🧪 Testing

```bash
# Run tests
pnpm test
```

## 📚 Project Structure

```text
safeguard_india/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # Reusable components
│   ├── locales/         # i18n translation files
│   ├── pages/           # Page components
│   │   ├── homepage-unified-landing-experience/
│   │   ├── responder-command-dashboard/
│   │   ├── integration-partnership-portal/
│   │   ├── trust-security-center/
│   │   ├── multilingual-onboarding-hub/
│   │   └── NotFound.jsx
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   ├── i18n.js          # i18n configuration
│   ├── index.jsx        # Entry point
│   └── Routes.jsx       # Route definitions
├── .env                 # Environment variables (not in repo)
├── package.json         # Project dependencies
├── vite.config.mjs      # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md            # Project documentation
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👥 Authors

- **Akul Singh** - *Initial work* - [Akul-singh831](https://github.com/Akul-singh831)

## 🙏 Acknowledgments

- Ministry of Tourism, Government of India
- National Security agencies for their guidance
- Open source community for the amazing tools and libraries
