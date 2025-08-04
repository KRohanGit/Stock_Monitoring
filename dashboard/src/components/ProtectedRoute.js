import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        console.log("No token found, redirecting to login");
        navigate("/login");
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.post(
          "https://stock-monitoring-production.up.railway.app/auth",
          {},
          { withCredentials: true }
        );
        console.log("Auth verification response:", data);
        const { status, user } = data;
        if (status) {
          setUsername(user);
          setIsAuthenticated(true);
          console.log("User authenticated:", user);
        } else {
          console.log("Auth failed, removing cookie");
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth verification failed:", error);
        removeCookie("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    verifyCookie();
  }, [cookies.token, navigate, removeCookie]); // Only depend on token, not all cookies

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
