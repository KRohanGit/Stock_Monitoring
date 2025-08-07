# 🚀 Deployment Configuration Guide

## Current Deployment Status

### ✅ Backend (Railway)
- **URL**: https://stock-monitoring-production.up.railway.app
- **Status**: Deployed and running
- **Health Check**: https://stock-monitoring-production.up.railway.app/health

### 🔄 Frontend (Vercel) - Needs Update
- **Dashboard URL**: https://stock-monitoring-xi.vercel.app (needs verification)
- **Deployment**: https://vercel.com/rohans-projects-5d3452ab/stock-monitoring/4JTifCBRMw27zmJs3QxogMpEW1vD

## 📋 Next Steps to Complete Deployment

### 1. Update Vercel Environment Variables
Go to your Vercel project settings and add:
```
REACT_APP_API_URL=https://stock-monitoring-production.up.railway.app
```

### 2. Get Your Actual Vercel URL
- Check your Vercel dashboard for the actual production URL
- It should be something like: `https://stock-monitoring-[hash].vercel.app`

### 3. Test the Connection
Once redeployed, test these endpoints:
- ✅ Backend Health: https://stock-monitoring-production.up.railway.app/health
- 🔄 Frontend Login: [Your Vercel URL]/login
- 🔄 Frontend Dashboard: [Your Vercel URL]/

### 4. Update CORS (If Needed)
If you get CORS errors, update the backend's `index.js` file with your actual Vercel URL.

## 🔧 Quick Fixes

### If Authentication Doesn't Work:
1. Ensure cookies are enabled in production
2. Check that CORS credentials are set to true
3. Verify the JWT token configuration

### If API Calls Fail:
1. Check browser console for CORS errors
2. Verify the `REACT_APP_API_URL` environment variable
3. Test backend endpoints directly

## 📱 Final URLs
Once everything is working:
- **Your Live Website**: [Your Vercel URL]
- **Backend API**: https://stock-monitoring-production.up.railway.app

## 🛠️ Local Development
To continue developing locally:
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Dashboard
cd dashboard
npm start
```

The app will run on:
- Backend: http://localhost:3002
- Dashboard: http://localhost:3001
