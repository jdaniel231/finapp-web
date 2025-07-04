import AccountPay from "./AccountPay/IndexTotal";

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="h2">Dashboard</h1>
        <p className="text-muted">Visão geral das suas finanças.</p>
      </div>

      {/* KPI Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title text-primary">Total a Pagar</h5>
              <p className="card-text fs-4 fw-bold">R$ 1.234,56</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title text-success">Total Pago</h5>
              <p className="card-text fs-4 fw-bold">R$ 7.890,12</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title text-danger">Saldo Pendente</h5>
              <p className="card-text fs-4 fw-bold">R$ 345,67</p>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Chart */}
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="card-title mb-0">Visão Geral Financeira</h5>
        </div>
        <div className="card-body">
          {/* Placeholder for a chart library like Chart.js or Recharts */}
          <div className="text-center py-5">
            <i className="fas fa-chart-line fa-3x text-muted"></i>
            <p className="mt-2 text-muted">Gráfico em breve</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <AccountPay />
    </div>
  );
}