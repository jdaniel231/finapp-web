import { useEffect, useState } from "react";
import ServiceForm from "../../components/Services/Form";
import { getService, updateService } from "../../api/service";
import { useNavigate, useParams } from "react-router-dom";

export default function ServiceEdit() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchService() {
      try {
        const data = await getService(id);
        setService(data);
      } catch (error) {
        console.error("Erro ao carregar serviço:", error);
        alert("Erro ao carregar serviço.");
      }
    }
    fetchService();
  }, [id]);

  const handleSubmit = async (serviceData) => {
    try {
      await updateService(id, serviceData);
      alert("Serviço atualizado com sucesso!");
      navigate("/services");
    } catch (error) {
      console.error("Erro ao atualizar serviço:", error);
      alert("Erro ao atualizar serviço.");
    }
  }

  return (
    <ServiceForm
      initialData={service}
      onSubmit={handleSubmit}
      submitLabel="Salvar"
    />
  );
}