import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { login as loginAPI } from "../services/authAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") !== null,
  );

  const handleAuthUser = useCallback(
    async (res) => {
      if (res.status === 200) {
        const { token, refreshToken, userId, displayName, userType } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("userId", userId);
        localStorage.setItem("displayName", displayName);
        localStorage.setItem("userType", userType);
        setIsAuthenticated(true);
        navigate("/livestreams");
      }
    },
    [navigate],
  );

  const login = useCallback(
    async (data) => {
      try {
        const res = await loginAPI(data);
        handleAuthUser(res);
      } catch (error) {
        toast.error(error);
      }
    },
    [handleAuthUser],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("displayName");
    localStorage.removeItem("userType");
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be called inside AuthProvider");
  }
  return context;
}
