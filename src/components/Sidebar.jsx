import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar-container">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              'nav-link text-white' + (isActive ? ' active' : '')
            }
          >
            <i className="fas fa-home me-2"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              'nav-link text-white' + (isActive ? ' active' : '')
            }
          >
            <i className="fas fa-user-tie me-2"></i>
            Clientes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              'nav-link text-white' + (isActive ? ' active' : '')
            }
          >
            <i className="fas fa-briefcase me-2"></i>
            Serviços
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/payment_types"
            className={({ isActive }) =>
              'nav-link text-white' + (isActive ? ' active' : '')
            }
          >
            <i className="fas fa-money-bill-wave me-2"></i>
            Tipos de Pagamento
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account_pay"
            className={({ isActive }) =>
              'nav-link text-white' + (isActive ? ' active' : '')
            }
          >
            <i className="fas fa-credit-card me-2"></i>
            Contas a Pagar
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;