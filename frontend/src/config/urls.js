// URL Configuration
const DASHBOARD_URL = process.env.NODE_ENV === 'production'
  ? 'https://rapid-stocks-dashboard.vercel.app'
  : 'http://localhost:3001';

export { DASHBOARD_URL };
