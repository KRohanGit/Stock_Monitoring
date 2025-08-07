@echo off
echo 🚀 Stock Monitoring App - Quick Deploy Script
echo.

echo 📁 Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Backend installation failed
    pause
    exit /b 1
)

echo 📁 Installing dashboard dependencies...
cd ..\dashboard
call npm install
if %errorlevel% neq 0 (
    echo ❌ Dashboard installation failed
    pause
    exit /b 1
)

echo 🏗️ Building dashboard for production...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Dashboard build failed
    pause
    exit /b 1
)

cd ..
echo.
echo ✅ Project prepared for deployment!
echo.
echo 📋 Next steps:
echo 1. Commit and push changes to GitHub
echo 2. Go to railway.app or vercel.com
echo 3. Connect your GitHub repository
echo 4. Deploy!
echo.
echo 🌐 Your app will be live at a simple URL once deployed.
pause
