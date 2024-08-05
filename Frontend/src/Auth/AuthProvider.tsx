import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { AuthResponse, User } from "../Types/types";  
import { API_URL } from "./constants";

interface AuthContextType {
  isAuthenticated: boolean;
  getAccessToken: () => string | null;
  saveUser: (userData: AuthResponse) => void;
  getRefreshToken: () => string | null;
  getUser: () => User | undefined;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  getAccessToken: () => null,
  saveUser: () => {},
  getRefreshToken: () => null,
  getUser: () => undefined,
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [user, setUser] = useState<User | undefined>(undefined);

  async function requestNewAccessToken(refreshToken: string): Promise<string> {
    const response = await fetch(`${API_URL}/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (response.ok) {
      const json = await response.json();
      if (json.error) {
        throw new Error(json.error);
      }
      return json.body.accessToken;
    } else {
      throw new Error("Unable to refresh access token.");
    }
  }

  async function getUserInfo(accessToken: string): Promise<User> {
    const response = await fetch(`${API_URL}/user`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const json = await response.json();
      if (json.error) {
        throw new Error(json.error);
      }
      return json;
    } else {
      throw new Error(response.statusText);
    }
  }

  const getRefreshToken = (): string | null => {
    return localStorage.getItem("refreshToken");
  };

  const getAccessToken = (): string | null => {
    return localStorage.getItem("accessToken");
  };

  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(undefined);
    setIsAuthenticated(false);
  }

  async function checkAuth() {
    const token = getRefreshToken();
    if (token) {
      try {
        const newAccessToken = await requestNewAccessToken(token);
        if (newAccessToken) {
          const userInfo = await getUserInfo(newAccessToken);
          if (userInfo) {
            saveSessionInfo(userInfo, newAccessToken, token);
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  function saveSessionInfo(userInfo: User, accessToken: string, refreshToken: string) {
    console.log("Saving session info:", { userInfo, accessToken, refreshToken });
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setIsAuthenticated(true);
    setUser(userInfo);
  }  
  
  function saveUser(userData: AuthResponse) {
    if (userData && userData.body && userData.body) {
      const userInfo = {
        name: userData.body.name,
        email: userData.body.email,
      };
      saveSessionInfo(userInfo, userData.body.accessToken, userData.body.refreshToken);
    } else {
      console.error("Invalid user data:", userData);
    }
  }
  
  

  function getUser(): User | undefined {
    return user;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        getRefreshToken,
        saveUser,
        getUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
