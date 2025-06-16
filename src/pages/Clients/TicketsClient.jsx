import { useEffect, useState } from "react";
import { getTicketsClient } from "../../api/client";
import { useParams } from "react-router-dom";
import { deleteTicket } from "../../api/ticket";

export default function TicketsClient() {

  const { id: clientId } = useParams();
  const [ tickets, setTickets ] = useState([]);
  

  const fetchGetTickets = async () => {
    try {
      const data = await getTicketsClient(clientId);
      setTickets(data);
    
    } catch (error) {
      console.error("Erro ao buscar tickets do cliente:", error);
      alert("Erro ao buscar tickets do cliente.");
    }
  };

  useEffect(() => {
    fetchGetTickets();
  }, [clientId]);


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este ticket?');
    if (!confirmDelete) return;

    try {
      await deleteTicket(id);
      alert('Ticket excluído com sucesso!');
      setTickets(tickets.filter(ticket => ticket.id !== id));
    } catch (error) {
      console.error('Erro ao excluir ticket:', error);
      alert(`Erro ao excluir o ticket. Tente novamente.`);
    }
  };


  return (
    <div>
      {tickets.length > 0 && (
        <ul className="mt-3">
          {tickets.map(ticket => (
            <li key={ticket.id}>
              Ticket #{ticket.id} - {ticket.status} - R$ {ticket.total_value} <button className="btn btn-primary btn-sm">
                <a href={`/tickets/${ticket.id}/show`} className="text-white">Ver Detalhes</a>
              </button>
              <button 
                className="btn btn-danger btn-sm ms-2"
                onClick={() => handleDelete(ticket.id)}
                title="Excluir Ticket"
              >
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      )}
      {tickets.length === 0 && <p>Nenhum ticket encontrado para este cliente.</p>}
    </div>
  );
}