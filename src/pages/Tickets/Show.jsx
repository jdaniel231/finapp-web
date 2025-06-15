import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteTicketService, getTicket } from "../../api/ticket";

export default function TicketShow() {
  const { id } = useParams();
  const [ticketServices, setTicketServices] = useState([]);

  const fetchGetTicket = async () => {
    try {
      const data = await getTicket(id);
      setTicketServices(data.ticket_services || []);
    } catch (error) {
      console.error("Erro ao buscar ticket:", error);
      alert("Erro ao buscar ticket.");
    }
  };

  useEffect(() => {
    fetchGetTicket();
  }, [id]);

  const handleDelete = async (id, ticketServiceId) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este serviço?');
    if (!confirmDelete) return;

    try {
      await deleteTicketService(id, ticketServiceId);
      alert('Serviço excluído com sucesso!');
      setTicketServices(ticketServices.filter(ticketService => ticketService.id !== ticketServiceId));
    } catch (error) {
      console.error('Erro ao excluir serviço do ticket:', error);
      alert(`Erro ao excluir o serviço do ticket. Tente novamente.`);
    }
  };

  return (
    <div>
      {ticketServices.length > 0 ? (
        <ul className="mt-3">
          {ticketServices.map(ticket_service => (
            <li key={ticket_service.id}>
              Serviço: {ticket_service.name} - R$ {ticket_service.value}
              <button className="btn btn-primary btn-sm ms-2"
                onClick={() => handleDelete(id, ticket_service.id)}
                title="Excluir Serviço"
              >
                <i className="fas fa-trash"></i>
              </button>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum serviço encontrado para este ticket.</p>
      )}
    </div>
  );
}