import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
  const isAuthenticated = localStorage.access_token;

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}
