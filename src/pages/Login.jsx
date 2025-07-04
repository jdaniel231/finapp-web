import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { useState } from "react";
import Modal from "../components/Modal";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    }
    catch (error) {
      console.error('Login failed:', error);
      setModalMessage('Falha no login. Por favor, verifique suas credenciais.');
      setShowErrorModal(true);
    }
    finally {
      setIsLoading(false);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#eef2f5" }}>
        <div className="col-md-5 col-lg-4">
          <div className="card shadow-sm border-0 rounded-lg">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <h1 className="h3 fw-bold text-primary">FinApp</h1>
                <p className="text-muted">Seu App de Finanças</p>
              </div>
              <form onSubmit={handleLogin}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="input-group mb-3"> {/* Changed to input-group */}
                  <div className="form-floating flex-grow-1"> {/* Added flex-grow-1 to make it fill space */}
                    <input
                      type={showPassword ? "text" : "password"} // Dynamic type
                      className="form-control"
                      id="floatingPassword"
                      name="password"
                      placeholder="Digite sua senha"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <label htmlFor="floatingPassword">Senha</label>
                  </div>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={{ borderTopRightRadius: '0.375rem', borderBottomRightRadius: '0.375rem' }} // Apply border-radius manually
                  >
                    <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i> {/* Dynamic icon */}
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Lembrar-me
                    </label>
                  </div>
                  <a href="#" className="small text-decoration-none">Esqueceu a senha?</a>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Entrando...
                      </>
                    ) : (
                      'Entrar'
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center py-3">
              <div className="small">
                © 2025 FinApp. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showErrorModal} onClose={() => setShowErrorModal(false)} title="Erro de Login" variant="danger">
        <p>{modalMessage}</p>
      </Modal>
    </>
  )
}