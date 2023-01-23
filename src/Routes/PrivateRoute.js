import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Loder/Loader";
import { AuthContext } from "../Context/Auth.Context";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <Loader></Loader>;
  if (!user && !user?.uid) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
