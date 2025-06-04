import { useEffect, useState } from "react";
import { deleteClient, getClients } from "../../api/client";
// import { useNavigate } from "react-router-dom";

export default function Clients() {
  const [clients, setClients] = useState([]);
  // const navigate = useNavigate();

  const fetchClients = async () => {
    try {
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      // Considerar adicionar um alerta ou feedback visual para o usuário aqui também
      alert("Erro ao carregar a lista de clientes.");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

 const handleDelete = async (id, name) => {
  const confirmDelete = window.confirm(`Tem certeza que deseja excluir o cliente "${name}"?`);
  if (!confirmDelete) return;

  try {
    await deleteClient(id);
    alert('Cliente excluído com sucesso!');
    setClients(clients.filter(client => client.id !== id));
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
    alert(`Erro ao excluir o cliente "${name}". Tente novamente.`);
  }
};

  return (
    <div className="clients-container">
      <h2>Clientes</h2>
      <a href="/clients/new" className="btn btn-success mb-3">
        <i className="fas fa-plus"></i> Adicionar Cliente
      </a>
      {/* Adicionar verificação se clients está vazio ou carregando */}
      {clients.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>COD. CLIENTE</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>
                  {/* Link para edição - Verifique se a rota está correta */}
                  <a href={`/clients/${client.id}`} className="btn btn-primary btn-sm me-2" title="Editar">
                    <i className="fas fa-edit"></i>
                  </a>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(client.id, client.name)}
                    title="Excluir"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum cliente encontrado ou carregando...</p> // Mensagem alternativa
      )}
      {/* Adicionar um botão para criar novo cliente, se aplicável */}
      {/* <button onClick={() => navigate('/clients/new')}>Adicionar Cliente</button> */}
    </div>
  );
}
