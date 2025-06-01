import Logout from "./Logout";

export default function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4" >
          <div className="card-body" >
            <h5 className="card-title text-center mb-4">dashboard</h5>
            <p className="card-text text-center">
              Olá, usuário! Aqui você pode ver seus dados financeiros.
            </p>
            <Logout  />
          </div>
        </div>
      </div>
    </div>
  );
}