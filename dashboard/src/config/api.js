// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://stock-monitoring-production.up.railway.app'
  : 'http://localhost:3002';

const DASHBOARD_URL = process.env.NODE_ENV === 'production'
  ? 'https://rapid-stocks-dashboard.vercel.app'
  : 'http://localhost:3001';

export { API_BASE_URL, DASHBOARD_URL };
