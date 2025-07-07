import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientForm({ initialData = {}, onSubmit, submitLabel = "Criar" }) {

  
  const [name, setName] = useState(initialData?.name || "");
  const [phone, setPhone] = useState(initialData?.phone || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setPhone(initialData.phone || "");
    } else {
      setName("");
      setPhone("");
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientData = { name, phone };
    try {
      await onSubmit(clientData);
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
      alert("Erro ao salvar cliente.");
    }
  };

  return (
    <div className="clients-container">
      <h2>{submitLabel === "Criar" ? "Novo Cliente" : "Editar Cliente"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite o nome do cliente"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite o telefone do cliente"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            {submitLabel}
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/clients')}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}