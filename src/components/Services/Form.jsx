import {  useEffect, useState } from "react";

export default function ServiceForm({initialData = {}, onSubmit, submitLabel = "Criar"}) {
  
  const [name, setName] = useState(initialData?.name || "");
  const [value, setValue] = useState(initialData?.value || "");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setValue(initialData.value || "");
    } else {
      setName("");
      setValue("");
    }
  }, [initialData]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceData = { name, value };
    try {
      await onSubmit(serviceData);
    } catch (error) {
      console.error("Erro ao salvar serviço:", error);
      alert("Erro ao salvar serviço.");
    }
  }

  
  return (
    <div className="service-form-container">
      <h2>{submitLabel === "Criar" ? "Novo Serviço" : "Editar Serviço"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite o nome do serviço"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Valor</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite o valor do serviço"
            value={value}
            onChange={(e) => setValue(e.target.value)}
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