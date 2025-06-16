import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";

export default function AccountPayForm({ initialData = {}, onSubmit, submitLabel = "Criar" }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [value, setValue] = useState(initialData?.value || 0);
  const [dueDate, setDueDate] = useState(initialData?.due_date || "");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setValue(initialData.value || 0);
      setDueDate(initialData.due_date || "");
    } else {
      setTitle("");
      setValue(0);
      setDueDate("");
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accountPayData = { title, value, due_date: dueDate };
    try {
      await onSubmit(accountPayData);
    } catch (error) {
      console.error("Erro ao salvar conta a pagar:", error);
      alert("Erro ao salvar conta a pagar.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="value">Valor (R$)</label>
          <input
            type="number"
            className="form-control"
            id="value"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
          />
        </div>
        <label htmlFor="dueDate">Data de Vencimento</label>
        <br />
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          dateFormat="dd/MM/yyyy"
          locale={ptBR}
          className="form-control"
        />
        <br />
        <button type="submit" className="btn btn-primary">
          {submitLabel}
        </button>
      </form>
    </div>
  );
}