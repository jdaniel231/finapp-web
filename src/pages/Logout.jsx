import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth";

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
    // <button className="btn btn-primary" onClick={handleSubmit}>
    //   Sair
    // </button>
    <a className="dropdown-item" href="#" onClick={handleSubmit}>
      Sair
    </a>
  );
}