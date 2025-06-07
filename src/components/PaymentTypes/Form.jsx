import { useState, useEffect } from "react";

export default function PaymentTypeForm({ initialData = {}, onSubmit, submitLabel = "Criar" }) {

  
  const [name, setName] = useState(initialData?.name || "");
  const [taxa, setTaxa] = useState(initialData?.taxa || "");
  // const navigate = useNavigate();

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setTaxa(initialData.taxa || "");
    } else {
      setName("");
      setTaxa("");
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientData = { name, taxa };
    try {
      await onSubmit(clientData);
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
      alert("Erro ao salvar cliente.");
    }
  };

  return (
    <div className="clients-container">
      <h2>{submitLabel === "Criar" ? "Novo " : "Editar"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite tipo de pagamento"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Taxa</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite a taxa "
            value={taxa}
            onChange={(e) => setTaxa(e.target.value)}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}