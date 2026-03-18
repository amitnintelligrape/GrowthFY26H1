import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  token: string | null;
  children: React.ReactNode;
}

/**
 * Renders children only when user is authenticated (token present).
 * Otherwise redirects to /login.
 */
export default function ProtectedRoute({ token, children }: ProtectedRouteProps): React.ReactElement {
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
