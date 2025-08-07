import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { API_BASE_URL } from "../config/api";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [,] = useCookies([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        console.log("Checking authentication...");
        const { data } = await axios.post(
          `${API_BASE_URL}/auth`,
          {},
          { withCredentials: true }
        );
        console.log("Auth verification response:", data);
        const { status, user } = data;
        if (status) {
          setIsAuthenticated(true);
          console.log("User authenticated:", user);
        } else {
          console.log("Auth failed, redirecting to login");
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth verification failed:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    
    // Small delay to ensure cookie is set after navigation
    const timer = setTimeout(verifyCookie, 100);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
