# 🚀 Deployment Guide for Stock Monitoring App

## Overview
This guide will help you deploy your full-stack stock monitoring application to the web with a simple URL.

## 🌐 Recommended Deployment Strategy

### Option 1: Railway (Recommended - Free Tier Available)
Railway can host both your backend and frontend with automatic deployments from GitHub.

#### Steps:
1. **Create Railway Account**: Go to [railway.app](https://railway.app) and sign up
2. **Connect GitHub**: Link your GitHub account
3. **Deploy Backend**:
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your `Stock_Monitoring` repository
   - Railway will auto-detect it's a Node.js app
   - Set environment variables in Railway dashboard:
     ```
     MONGO_URL=mongodb+srv://Rohan-Krovvidi:Rohan0838@stockversecluster.e56kgjb.mongodb.net/stockverse?retryWrites=true&w=majority&appName=StockVerseCluster
     TOKEN_KEY=your_secret_jwt_key_here_make_it_strong_and_unique
     PORT=3002
     ```
   - Railway will automatically deploy your backend

4. **Deploy Frontend (Dashboard)**:
   - Create a new service in the same project
   - Deploy the dashboard folder
   - Update the API_BASE_URL in `dashboard/src/config/api.js` to point to your Railway backend URL

### Option 2: Vercel + Railway
- **Backend on Railway**: Follow backend steps above
- **Frontend on Vercel**: 
  - Go to [vercel.com](https://vercel.com)
  - Import your GitHub repository
  - Set root directory to `dashboard`
  - Deploy

### Option 3: Netlify + Railway
- **Backend on Railway**: Follow backend steps above  
- **Frontend on Netlify**:
  - Go to [netlify.com](https://netlify.com)
  - Import from GitHub
  - Set build directory to `dashboard`
  - Build command: `npm run build`
  - Publish directory: `dashboard/build`

## 📁 Project Structure for Deployment
```
Stock_Monitoring/
├── backend/           # Express.js API server
├── dashboard/         # React dashboard app  
├── frontend/          # React landing page
├── railway.json       # Railway config
├── Procfile          # Process configuration
└── package.json      # Root package.json with deployment scripts
```

## 🔧 Pre-Deployment Checklist

### 1. Environment Variables
Make sure these are set in your hosting platform:
- `MONGO_URL` - Your MongoDB connection string
- `TOKEN_KEY` - JWT secret key
- `PORT` - Port for backend (usually 3002)

### 2. CORS Configuration
Update CORS origins in `backend/index.js` to include your production URLs:
```javascript
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001", 
    "https://your-frontend-url.vercel.app",
    "https://your-dashboard-url.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
```

### 3. API Configuration
Update `dashboard/src/config/api.js`:
```javascript
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.railway.app'
  : 'http://localhost:3002';
```

## 🚀 Quick Deploy Commands

### For Railway:
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy from terminal
railway deploy
```

### For Vercel (Frontend):
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy dashboard
cd dashboard
vercel --prod
```

## 🌟 Expected URLs After Deployment

After successful deployment, you'll have:
- **Landing Page**: `https://your-app.vercel.app`
- **Dashboard**: `https://your-dashboard.netlify.app` 
- **Backend API**: `https://your-backend.railway.app`

## 🔍 Testing Your Deployment

1. **Backend Health Check**: Visit `https://your-backend-url/health`
2. **Authentication Test**: Try logging in through the dashboard
3. **Stock Data**: Check if holdings, orders, and positions load correctly

## 🛠️ Troubleshooting

### Common Issues:
1. **CORS Errors**: Update CORS origins in backend
2. **Database Connection**: Verify MongoDB URL in environment variables
3. **Build Failures**: Check Node.js version compatibility
4. **API Calls Failing**: Update API_BASE_URL in frontend config

### Environment Variables Check:
```bash
# In Railway dashboard, verify:
MONGO_URL=mongodb+srv://...
TOKEN_KEY=your_secret_key
PORT=3002
```

## 💡 Pro Tips

1. **Custom Domain**: Both Railway and Vercel support custom domains
2. **SSL Certificates**: Automatically provided by hosting platforms
3. **Monitoring**: Use Railway/Vercel dashboards to monitor app performance
4. **Logs**: Check deployment logs for debugging issues

## 📞 Support

If you encounter issues:
1. Check the hosting platform's documentation
2. Review deployment logs in the dashboard
3. Verify all environment variables are set correctly
4. Test locally first with `npm run start:backend` and `npm run start:dashboard`

---

🎉 **Your stock monitoring app will be live at a simple URL once deployed!**
