import { useState } from "react";
import { getServices, deleteService } from "../../api/service";

export default function Services() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try{
      const data = await getServices();
      setServices(data);
    } catch (error) {
      console.error("Erro ao buscar serviços:", error);
      alert("Erro ao carregar a lista de serviços.");
    }
  }

  useState(() => {
    fetchServices();
  }
  , []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este serviço?");
    if (!confirmDelete) return;

    try {
      await deleteService(id);
      alert("Serviço excluído com sucesso!");
      setServices(services.filter(service => service.id !== id));
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
      alert("Erro ao excluir o serviço. Tente novamente.");
    }
  }

  return (
    <div className="services-container">
      <h2>Serviços</h2>
      <a href="/services/new" className="btn btn-success mb-3">
        <i className="fas fa-plus"></i> Adicionar Serviço
      </a>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Cod. Serviço</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.value}</td>
              <td>
                <a href={`/services/edit/${service.id}`} className="btn btn-primary btn-sm me-2" title="Editar">
                  <i className="fas fa-edit"></i>
                </a>
                <button 
                  className="btn btn-danger btn-sm" t
                  itle="Excluir"
                  onClick={() => handleDelete(service.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}