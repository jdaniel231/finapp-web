import { useNavigate } from "react-router-dom";
import { logout } from "../api/api";

export default function Logout() {

  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    try {
      await logout();
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
  return (
    <button className="btn btn-primary" onClick={handleSubmit}>
      Sair
    </button>
  );
}