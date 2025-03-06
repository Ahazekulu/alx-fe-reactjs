import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Mock authentication state
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
