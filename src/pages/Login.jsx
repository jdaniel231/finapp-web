import { useNavigate } from "react-router-dom";
import { login } from "../api/api";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.token);
      Navigate('/dashboard');
    }
    catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
      return;
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4" >
          <div className="card-body" >
            <h5 className="card-title text-center mb-4">Login</h5>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Digite seu email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Digite sua senha"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}