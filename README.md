# 🛍️ MyShop - E-commerce Dashboard

A modern, responsive e-commerce dashboard built with **Next.js 15**, **React 19**, and **Tailwind CSS**. This project demonstrates a clean admin interface for managing products, orders, and store analytics.

## 🚀 Live Demo

[Live Demo](https://my-shop-task.vercel.app/)

## 🌟 Features

- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🔍 Product Search & Filtering** - Real-time product search with category filters
- **📊 Dashboard Analytics** - Overview of store performance and metrics
- **🛒 Product Management** - View, edit, and manage product catalog
- **📦 Order Management** - Handle customer orders and tracking
- **⚙️ Settings Panel** - Customize store settings and preferences
- **🎨 Modern UI/UX** - Clean, intuitive interface with smooth animations
- **🔄 Real-time Data** - Fetches live product data from DummyJSON API
- **📋 Category Navigation** - Browse products by categories (Smartphones, Laptops, Fragrances, Groceries)

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with Turbopack
- **Frontend:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **API:** [DummyJSON](https://dummyjson.com/) for product data
- **Language:** JavaScript (ES6+)

## 📁 Project Structure

```
myShop_task/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── CategoryFilter.jsx
│       ├── DashboardContent.jsx
│       ├── OrdersContent.jsx
│       ├── ProductCard.jsx
│       ├── SettingsContent.jsx
│       └── Sidebar.jsx
├── public/
│   └── [static assets]
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/SuhaniKapasiya/myShop_task.git

# Navigate to project directory
cd myShop_task

# Install dependencies
npm install
```

### Development
```bash
# Start development server with Turbopack
npm run dev

# The app will be available at http://localhost:3000
```

### Build & Deploy
```bash
# Create production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 💻 Usage

### Navigation
- **Dashboard**: Overview of store analytics and key metrics
- **Products**: Browse and manage product catalog with category filtering
- **Orders**: View and manage customer orders
- **Settings**: Configure store settings and preferences

### Features Demo
1. **Product Browsing**: Select categories from the right sidebar to filter products
2. **Search Functionality**: Use the search bar to find specific products
3. **Responsive Layout**: Sidebar automatically hides on mobile devices
4. **Interactive UI**: Hover effects and smooth transitions throughout the app

## 🎯 Key Components

### ProductCard
- Displays product information with thumbnail, title, and description
- Edit and Delete functionality buttons
- Responsive design with proper image handling

### Sidebar Navigation
- Dynamic navigation with active state highlighting
- Responsive behavior for mobile devices

### CategoryFilter
- Real-time category switching
- Visual feedback for selected categories

## 🔧 Configuration

### Environment Setup
The project uses Next.js 15 with the new App Router and Turbopack for faster development builds.

### Tailwind CSS
Custom Tailwind configuration for modern design system with responsive breakpoints.

## 📱 Responsive Design

- **Mobile**: < 768px - Single column layout, hidden sidebars
- **Tablet**: 768px - 1024px - Optimized grid layout
- **Desktop**: > 1024px - Full three-column layout with sidebars

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created as a demonstration for job application purposes.

## 👨‍💻 Developer

**Suhani Kapasiya**
- GitHub: [@SuhaniKapasiya](https://github.com/SuhaniKapasiya)

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) for providing the product API
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

*This project was developed as part of a technical assessment to demonstrate proficiency in modern React development, responsive design, and clean code practices.*