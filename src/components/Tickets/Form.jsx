import { useNavigate, useParams } from "react-router-dom";
import { createTicket } from "../../api/ticket";
import { useEffect, useState } from "react";
import { getServices } from "../../api/service";

export default function TicketForm() {
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const { id: clientId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
        alert("Erro ao buscar serviços.");
      }
    };
    fetchServices();
  }, []);

  const handleAddService = () => {
    if (!selectedServiceId) return;

    const service = services.find(s => s.id === Number(selectedServiceId));
    if (!service) return;

    const alreadyAdded = selectedServices.some(s => s.service_id === service.id);
    if (alreadyAdded) {
      alert("Serviço já adicionado.");
      return;
    }

    const serviceWithValue = {
      service_id: service.id,
      name: service.name,
      value: Number(service.value),
    };

    setSelectedServices(prev => [...prev, serviceWithValue]);
    setSelectedServiceId("");
  };

  const handleRemoveService = (id) => {
    setSelectedServices(prev => prev.filter(s => s.service_id !== id));
  };

  const total = selectedServices.reduce((sum, s) => sum + Number(s.value), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Adicione ao menos um serviço.");
      return;
    }

    const ticketData = {
      client_id: clientId,
      status: "aberto",
      opening_date: new Date().toISOString().split("T")[0], // hoje
      ticket_services_attributes: selectedServices.map(s => ({
        service_id: s.service_id,
        value: s.value,
      }))
    };

    try {
      await createTicket({ ticket: ticketData });
      alert("Ticket criado com sucesso!");
      navigate("/clients");
    } catch (error) {
      console.error("Erro ao criar ticket:", error);
      alert("Erro ao criar ticket.");
    }
  };

  return (
    <div className="container">
      <h2>Criar Novo Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Serviço</label>
          <select
            className="form-select"
            value={selectedServiceId}
            onChange={(e) => setSelectedServiceId(e.target.value)}
          >
            <option value="">Selecione um serviço</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - R$ {Number(service.value).toFixed(2)}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={handleAddService}
          >
            Adicionar Serviço
          </button>
        </div>

        {selectedServices.length > 0 && (
          <div className="mb-3">
            <h5>Serviços Adicionados:</h5>
            <ul className="list-group">
              {selectedServices.map((service) => (
                <li
                  key={service.service_id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {service.name} - R$ {Number(service.value).toFixed(2)}
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemoveService(service.service_id)}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-2">
              <strong>Total:</strong> R$ {total.toFixed(2)}
            </p>
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Criar Ticket
        </button>
      </form>
    </div>
  );
}
