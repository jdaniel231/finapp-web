import { useNavigate } from "react-router-dom";
import ServiceForm from "../../components/Services/Form";
import { createService } from "../../api/service";


export default function ServiceNew() {

  const navigate = useNavigate();

  const handleSubmit = async (serviceData) => {
    try {
      await createService(serviceData);
      alert("Serviço criado com sucesso!");
      navigate("/services");
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
      alert("Erro ao criar serviço. Tente novamente.");
    }
  }
  return (
    <ServiceForm 
      initialData={{}}
      onSubmit={handleSubmit}
      submitLabel="Criar"
    />
  );
}