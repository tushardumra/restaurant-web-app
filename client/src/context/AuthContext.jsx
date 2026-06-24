// import React, { createContext, useContext, useEffect, useState } from 'react'

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//   const [user, setUser] = useState(null);
//   const [authLoading, setAuthLoading] = useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/auth/me",
//           {
//             credentials: 'include',
//           }
//         );

//         console.log("AUTH RESPONSE:", response);

//         if (!response.ok) {
//           // Optional: Log the error body from the server to help debugging
//           const errorData = await response.json().catch(() => ({}));
//           console.error('Server Error:', response.status, errorData);
//           return;
//         }

//         const data = await response.json();
//         setUser(data.user);

//         console.log("AUTH DATA:", data);

//       } catch (error) {
//         console.log(error);
//       } finally {
//         setAuthLoading(false);
//       }
//     };
//     checkAuth();
//   },[]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user, setUser, authLoading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
  const checkAuth = async () => {
    try {
      console.log("🔍 Checking auth...");
      const res = await axios.get("http://localhost:5000/api/auth/me", { withCredentials: true });
      console.log("✅ /me response:", res.data);
      setUser(res.data.user);
      // console.log("User name: ", user)
    } catch (error) {
      console.error("❌ /me failed:", error.response?.status, error.response?.data);
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };
  checkAuth();
}, []);

  if (authLoading) return null; // Optionally, you could return a loading spinner here instead of null

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authLoading,
      }}
    >
      {/* 💡 SUGGESTION: Only render the app once authentication check completes */}
      {!authLoading ? children : (
        <div className="min-h-screen bg-[#141414] flex items-center justify-center text-white font-sans">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#FF5F00] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Verifying Session...</p>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
