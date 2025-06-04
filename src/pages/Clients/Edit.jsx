import {  useEffect, useState } from "react";
import ClientForm from "../../components/Clients/Form";
import { getClient, updateClient } from "../../api/client";
import { useNavigate, useParams } from "react-router-dom";

export default function ClientEdit() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchClient() {
      try {
        const data = await getClient(id);
        setClient(data);
      } catch (error) {
        console.error("Erro ao carregar cliente:", error);
        alert("Erro ao carregar cliente.");
      }
    }
    fetchClient();
  }, [id]);

  const handleSubmit = async (clientData) => {
    try{
      await updateClient(id, clientData);
      alert("Cliente atualizado com sucesso!");
      navigate("/clients"); 
      }
      catch (error){
        console.error("Erro ao atualizar cliente:", error);
        alert("Erro ao atualizar cliente.");
      }
    }

  return (
    <ClientForm 
      initialData={client}
      onSubmit={handleSubmit}
      submitLabel="Salvar"
    />
  );
}