
import ClientForm from "../../components/Clients/Form";
import { createClient } from "../../api/client";
import { useNavigate } from "react-router-dom";

export default function ClientNew() {

  const navigate = useNavigate();
  
  const handleSubmit = async (clientData) => {
    try{
      await createClient(clientData);
      alert("Cliente criado com sucesso!");
      navigate("/clients");
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      alert("Erro ao criar cliente. Tente novamente.");
    }
  }
  
  return (
    <ClientForm 
      initialData={{}}
      onSubmit={handleSubmit}
      submitLabel="Criar"
    />
  );
}