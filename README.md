# Im_frontend
# Influencer Platform Landing

## Getting Started

Follow the steps below to set up and run the project locally.

# InfluenceHub - Influencer Marketing Platform

A modern, full-featured influencer marketing platform built with Next.js, connecting brands, agencies, and influencers for seamless collaboration and campaign management.

## 🚀 Features

### For Brands & Agencies
- **Campaign Management**: Create, manage, and track multiple influencer campaigns
- **Smart Matching**: AI-powered algorithm to find the perfect influencers
- **ROI Analytics**: Comprehensive performance tracking and reporting
- **Brand Dashboard**: Centralized hub for all campaign activities
- **Payment Management**: Streamlined payment processing and invoicing

### For Influencers
- **Campaign Discovery**: Browse and apply to relevant brand campaigns
- **Portfolio Management**: Showcase your content and social media presence
- **Earnings Tracking**: Monitor payments and withdrawal history
- **Analytics Dashboard**: Detailed insights into your performance metrics
- **Collaboration Tools**: Direct messaging with brands and agencies

### Platform Features
- **Real-time Analytics**: Live performance tracking and insights
- **Multi-platform Support**: Instagram, YouTube, TikTok, Twitter integration
- **Secure Payments**: Multiple payment methods including UPI and bank transfers
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Advanced Filtering**: Smart search and filtering for campaigns and influencers

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **State Management**: React Context (expandable to Redux/Zustand)

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/influencehub.git
   cd influencehub
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your environment variables:
   \`\`\`env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   # Add other required environment variables
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
influencehub/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Dashboard pages
│   │   ├── home/               # Dashboard home
│   │   ├── explore-campaigns/  # Campaign discovery
│   │   ├── my-collaborations/  # Active collaborations
│   │   ├── earnings/           # Payment tracking
│   │   ├── analytics/          # Performance analytics
│   │   ├── messages/           # Communication hub
│   │   ├── my-profile/         # Profile management
│   │   ├── support/            # Help & support
│   │   └── settings/           # Account settings
│   ├── login/                  # Authentication pages
│   │   ├── brand/             # Brand login
│   │   └── influencer/        # Influencer login
│   ├── signup/                 # Registration pages
│   │   ├── brand/             # Brand registration
│   │   └── influencer/        # Influencer registration
│   ├── select-role/           # Role selection
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Landing page
├── components/                 # Reusable components
│   ├── ui/                    # shadcn/ui components
│   └── sidebar.tsx            # Dashboard sidebar
├── lib/                       # Utility functions
│   └── utils.ts              # Common utilities
├── hooks/                     # Custom React hooks
│   ├── use-mobile.ts         # Mobile detection
│   └── use-toast.ts          # Toast notifications
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.mjs           # Next.js configuration
└── package.json              # Dependencies
\`\`\`

## 🎨 Design System

The project uses a comprehensive design system built on:

- **Colors**: Custom gradient combinations (purple-orange, teal-orange, blue-purple)
- **Typography**: Geist Sans and Geist Mono fonts
- **Components**: shadcn/ui component library
- **Animations**: Smooth transitions and micro-interactions with Framer Motion
- **Responsive**: Mobile-first design approach

## 🔐 Authentication Flow

1. **Role Selection**: Users choose between Brand/Agency or Influencer
2. **Registration**: Comprehensive signup forms with validation
3. **Login**: Secure authentication with form validation
4. **Dashboard Access**: Role-based dashboard with personalized features

## 📱 Key Pages

### Landing Page
- Hero section with animated mobile mockup
- Feature showcase with interactive cards
- Role-specific benefits sections
- Contact form with validation

### Dashboard
- **Home**: Overview with key metrics and quick actions
- **Campaigns**: Browse, filter, and apply to campaigns
- **Collaborations**: Track active partnerships and submissions
- **Analytics**: Detailed performance insights and charts
- **Messages**: Real-time communication with brands/influencers
- **Profile**: Comprehensive profile management
- **Earnings**: Payment tracking and withdrawal management

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Environment Variables
\`\`\`env
# App Configuration
NEXT_PUBLIC_APP_URL=your-app-url

# Database (when implemented)
DATABASE_URL=your-database-url

# Authentication (when implemented)
NEXTAUTH_SECRET=your-auth-secret
NEXTAUTH_URL=your-app-url

# Payment Integration (when implemented)
STRIPE_SECRET_KEY=your-stripe-key
RAZORPAY_KEY_ID=your-razorpay-key

# Social Media APIs (when implemented)
INSTAGRAM_CLIENT_ID=your-instagram-client-id
YOUTUBE_API_KEY=your-youtube-api-key
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use meaningful component and variable names
- Implement proper error handling

### Component Structure
- Keep components small and focused
- Use custom hooks for complex logic
- Implement proper loading and error states
- Follow accessibility best practices

### Performance
- Optimize images and assets
- Implement proper caching strategies
- Use React.memo for expensive components
- Lazy load components when appropriate

## 🐛 Known Issues

- [ ] Mobile navigation needs improvement
- [ ] Chart components are placeholders (need real implementation)
- [ ] File upload functionality needs backend integration
- [ ] Real-time messaging requires WebSocket implementation

## 🗺️ Roadmap

### Phase 1 (Current)
- [x] Landing page and authentication
- [x] Dashboard UI and navigation
- [x] Form validation and user flows
- [x] Responsive design implementation

### Phase 2 (Next)
- [ ] Backend API integration
- [ ] Database schema and models
- [ ] Real authentication system
- [ ] File upload functionality

### Phase 3 (Future)
- [ ] Payment gateway integration
- [ ] Social media API connections
- [ ] Real-time messaging system
- [ ] Advanced analytics and reporting

### Phase 4 (Advanced)
- [ ] AI-powered matching algorithm
- [ ] Mobile app development
- [ ] Advanced campaign management
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon library

## 📞 Support

For support, email support@influencehub.com or join our Slack channel.

## 🔗 Links

- [Live Demo](https://influencehub-demo.vercel.app)
- [Documentation](https://docs.influencehub.com)
- [API Reference](https://api.influencehub.com/docs)
- [Design System](https://design.influencehub.com)

---

Made with ❤️ by the InfluenceHub Team
\`\`\`

This README provides a comprehensive overview of the InfluenceHub project, including:

1. **Project Overview**: Clear description of what the platform does
2. **Features**: Detailed breakdown for different user types
3. **Tech Stack**: All technologies used
4. **Installation**: Step-by-step setup instructions
5. **Project Structure**: Clear file organization
6. **Design System**: Information about the UI/UX approach
7. **Authentication Flow**: How users interact with the system
8. **Key Pages**: Overview of main application sections
9. **Deployment**: Instructions for going live
10. **Contributing**: Guidelines for contributors
11. **Roadmap**: Future development plans
12. **Support**: How to get help

The README is structured to be helpful for developers, contributors, and stakeholders who want to understand and work with the project.

