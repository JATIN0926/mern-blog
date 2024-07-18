import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  Navigate;
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
