# Stock Monitoring System

A comprehensive MERN stack application for stock trading and portfolio management with real-time dashboard capabilities.

![Stock Monitoring System](./image.png)

## 📊 Overview

This Stock Monitoring System is a full-stack web application that provides users with a complete trading platform including user authentication, portfolio management, order placement, and real-time stock monitoring. The application consists of three main components: a landing page, a trading dashboard, and a backend API.

## 🏗️ Architecture

```
Stock Monitoring System
├── Frontend (Landing Page)     - Port 3000
├── Dashboard (Trading App)     - Port 3001  
├── Backend (API Server)        - Port 3002
└── Database (MongoDB)          - Local/Cloud
```

## ✨ Features

### 🔐 Authentication System
- User registration and login
- JWT-based authentication
- Cookie-based session management
- Protected routes and middleware

### 📈 Trading Dashboard
- **Portfolio Management**: View holdings, positions, and portfolio summary
- **Order Management**: Place buy/sell orders with real-time updates
- **Watchlist**: Track favorite stocks and market movements
- **Charts & Analytics**: Interactive charts powered by Chart.js
- **Real-time Updates**: Live data updates for stock prices and portfolio

### 🎨 Modern UI/UX
- Responsive design with Bootstrap 5
- Material-UI components for enhanced user experience
- Dark/Light theme support
- Professional landing page with company information

### 🔧 Additional Features
- Order history and transaction tracking
- Real-time notifications with React Toastify
- Drag-and-drop buy window interface
- Educational content and pricing information

## 🛠️ Technology Stack

### Frontend Technologies
- **React 19.1.0** - Modern React with latest features
- **React Router DOM 7.7.1** - Client-side routing
- **Bootstrap 5.3.7** - Responsive CSS framework
- **Material-UI 7.2.0** - Premium React components
- **Chart.js 4.5.0** - Interactive charts and graphs
- **Axios 1.11.0** - HTTP client for API calls

### Backend Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Development server auto-restart
- **dotenv** - Environment variable management
- **Cookie Parser** - HTTP cookie parsing middleware

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (for version control)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/KRohanGit/Stock_Monitoring.git
cd "Stocks Project"
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
echo MONGO_URI=mongodb://localhost:27017/stocksdb > .env
echo TOKEN_KEY=your_jwt_secret_key_here >> .env
echo PORT=3002 >> .env

# Start the backend server
npm start
# or for development with auto-restart
npm run dev
```

### 3. Dashboard Setup
```bash
# Navigate to dashboard directory
cd ../dashboard

# Install dependencies
npm install

# Start the dashboard application
npm start
```

### 4. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start the frontend application
npm start
```

## 🔧 Environment Configuration

### Backend (.env file)
```env
MONGO_URI=mongodb://localhost:27017/stocksdb
TOKEN_KEY=your_super_secret_jwt_key_here
PORT=3002
NODE_ENV=development
```

### Port Configuration
- **Backend API**: `http://localhost:3002`
- **Trading Dashboard**: `http://localhost:3001`
- **Landing Page**: `http://localhost:3000`

## 📊 Database Schema

### User Model
```javascript
{
  email: String (required, unique),
  password: String (required, hashed),
  username: String (required),
  age: Number,
  createdAt: Date
}
```

### Holdings Model
```javascript
{
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String
}
```

### Positions Model
```javascript
{
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean
}
```

## 🔄 API Endpoints

### Authentication Routes
```
POST /auth/signup     - User registration
POST /auth/login      - User login
POST /auth            - Token verification
GET  /auth/users      - Get all users (development only)
```

### Stock Data Routes
```
GET  /allHoldings     - Get user holdings
GET  /allPositions    - Get user positions
POST /newOrder        - Place new order
GET  /allOrders       - Get order history
```

## 🎯 Usage Guide

### 1. Starting the Application
Always start in this order:
1. **Backend first** (port 3002) - Database and API server
2. **Dashboard** (port 3001) - Main trading application
3. **Frontend** (port 3000) - Landing page

### 2. User Registration Flow
1. Visit `http://localhost:3000` for the landing page
2. Click "Sign Up" or navigate to `http://localhost:3001/signup`
3. Fill in registration details
4. Upon successful registration, you'll be redirected to the dashboard

### 3. Trading Workflow
1. **Login** to access the dashboard
2. **View Portfolio** - Check holdings, positions, and summary
3. **Place Orders** - Click on stocks to open buy window
4. **Monitor Watchlist** - Track favorite stocks
5. **Review Orders** - Check order history and status

## 🧪 Testing

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Dashboard tests  
cd dashboard
npm test

# Frontend tests
cd frontend
npm test
```

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Dashboard navigation and components
- [ ] Order placement and confirmation
- [ ] Portfolio data display
- [ ] Responsive design on mobile/tablet
- [ ] Authentication flow and protected routes

## 🔒 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **CORS Configuration**: Controlled cross-origin requests
- **Input Validation**: Server-side validation for all inputs
- **Protected Routes**: Authentication middleware for sensitive endpoints

## 🎨 UI Components

### Key Components
- **Dashboard**: Main trading interface with sidebar navigation
- **Holdings**: Portfolio holdings display with real-time updates
- **Positions**: Current positions with P&L tracking
- **Orders**: Order placement and history management
- **Watchlist**: Stock monitoring and watchlist management
- **BuyActionWindow**: Modal for placing buy orders

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd frontend
npm run build

# Build dashboard
cd ../dashboard
npm run build

# Production environment variables
# Set NODE_ENV=production
# Configure production database URL
# Set secure: true for cookies in HTTPS
```

### Environment Variables for Production
```env
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/stocksdb
TOKEN_KEY=super_secure_production_key
PORT=3002
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rohan K**
- GitHub: [@KRohanGit](https://github.com/KRohanGit)
- Repository: [Stock_Monitoring](https://github.com/KRohanGit/Stock_Monitoring)

## 🐛 Known Issues

- Development warnings for webpack middleware (safe to ignore)
- Chart.js deprecation warnings (will be addressed in future updates)

## 📋 Roadmap

- [ ] Real-time stock price integration with external APIs
- [ ] Advanced charting with technical indicators
- [ ] Mobile app development
- [ ] Email notifications for trade confirmations
- [ ] Advanced portfolio analytics
- [ ] Multi-language support

## 🔍 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend is running on port 3002
2. **Authentication Issues**: Check JWT token configuration
3. **Database Connection**: Verify MongoDB is running and URI is correct
4. **Port Conflicts**: Make sure ports 3000, 3001, 3002 are available

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm start
```

---

**Happy Trading! 📈**
