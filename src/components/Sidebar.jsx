import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>FinApp</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <NavLink to="/dashboard">
            <i className="fas fa-home me-2"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/clients">
            <i className="fas fa-user-tie me-2"></i>
            Clientes
          </NavLink>
        </li>
        <li>
          <NavLink to="/services">
            <i className="fas fa-briefcase me-2"></i>
            Serviços
          </NavLink>
        </li>
        <li>
          <NavLink to="/payment_types">
            <i className="fas fa-money-bill-wave me-2"></i>
            Tipos de Pagamento
          </NavLink>
        </li>
        <li>
          <NavLink to="/account_pay">
            <i className="fas fa-credit-card me-2"></i>
            Contas a Pagar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
