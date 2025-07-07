import { Link } from "react-router-dom";
import AccountPayTotal from "./AccountPay/IndexTotal";
import AccountPayPaid from "./AccountPay/IndexPaid";
import ListBalance from "./RedeCard/ListBalance";
import RedeCard from './RedeCard/Index';
import RedeCardBalanceTotal from "./RedeCard/BalanceTotal";
import RedeCardBalanceDaily from "./RedeCard/BalanceDaily";

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="h2">Dashboard</h1>
        <p className="text-muted">Visão geral das suas finanças.</p>
      </div>

      {/* KPI Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <Link to="/account_pay/to_pay" className="text-decoration-none">
            <div className="card text-center">
              <div className="card-body">
                <AccountPayTotal />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/account_pay/paid" className="text-decoration-none">
            <div className="card text-center">
              <div className="card-body">
                <AccountPayPaid />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/redecard" className="text-decoration-none">
            <div className="card text-center">
              <div className="card-body">
                <RedeCardBalanceTotal />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/redecard" className="text-decoration-none">
            <div className="card text-center">
              <div className="card-body">
                <RedeCardBalanceDaily />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Financial Chart */}
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="card-title mb-0">Transações de Rede(Itau)</h5>
        </div>
        <div className="card-body">
          {/* Placeholder for a chart library like Chart.js or Recharts */}
          <div className="text-center py-5">
            <ListBalance />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      
    </div>
  );
}