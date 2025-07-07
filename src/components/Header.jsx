import { NavLink } from "react-router-dom";
import Logout from "../pages/Logout";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "var(--header-bg)", boxShadow: "var(--header-shadow)" }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-primary" to="/dashboard">FinApp</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Listas
              </a>
              <ul className="dropdown-menu shadow rounded-3"> {/* Added shadow and rounded-3 */}
                <li><NavLink className="dropdown-item" to="/clients">Clientes</NavLink></li>
                <li><NavLink className="dropdown-item" to="/services">Serviços</NavLink></li>
                <li><NavLink className="dropdown-item" to="/payment_types">Tipos de Pagamento</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cadastro
              </a>
              <ul className="dropdown-menu shadow rounded-3"> {/* Added shadow and rounded-3 */}
                <li><NavLink className="dropdown-item" to="/clients/new">Novo Cliente</NavLink></li>
                <li><NavLink className="dropdown-item" to="/services/new">Novo Serviço</NavLink></li>
                <li><NavLink className="dropdown-item" to="/payment_types/new">Novo Tipo de Pagamento</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Financeiro
              </a>
              <ul className="dropdown-menu shadow rounded-3"> {/* Added shadow and rounded-3 */}
                <li><NavLink className="dropdown-item" to="/account_pay">Contas a Pagar</NavLink></li>
                <li><NavLink className="dropdown-item" to="/redecard">Venda Maquininha</NavLink></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-user-circle me-2"></i>
                <span>Usuário</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end shadow rounded-3"> {/* Added shadow and rounded-3 */}
                <li><a className="dropdown-item" href="#">Perfil</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Logout /></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}