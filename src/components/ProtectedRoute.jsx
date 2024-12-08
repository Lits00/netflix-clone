import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <Spinner />; 
  }

  // Check if user is null, undefined, or {}
  if (!user || Object.keys(user).length === 0) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
