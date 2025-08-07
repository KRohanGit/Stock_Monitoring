// API Configuration - Environment-based URLs
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_API_URL || 'https://stock-monitoring-production.up.railway.app'
  : 'http://localhost:3002';

const DASHBOARD_URL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_DASHBOARD_URL || 'https://your-dashboard-url.vercel.app'
  : 'http://localhost:3001';

export { API_BASE_URL, DASHBOARD_URL };
