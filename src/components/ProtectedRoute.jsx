import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function ProtectedRoute({ children, allowedRole }) {
  const token = sessionStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    if (allowedRole && decoded.role !== allowedRole) {
      return <Navigate to="/" replace />;
    }

    return children;

  } catch (error) {
    return <Navigate to="/login" replace />;
  }
}

export default ProtectedRoute;
