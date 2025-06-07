import { useEffect, useState } from "react";
import {  deletePaymentType, getPaymentTypes } from "../../api/payment_type";

export default function PaymentTypes() {

  const [paymentTypes, setPaymentTypes] = useState([]);

  const fetchPaymentTypes = async () => {
    try {
      const data = await getPaymentTypes();
      setPaymentTypes(data);
    } catch (error) {
      console.error("Erro ao buscar tipos de pagamento:", error);
      alert("Erro ao carregar a lista de tipos de pagamento.");
    }
  };

  useEffect(() => {
    fetchPaymentTypes();
  }, []);

  const handleDelete = async (id) => {
    const paymentType = paymentTypes.find(pt => pt.id === id);
    if (!paymentType) {
      alert("Tipo de pagamento não encontrado.");
      return;
    }
    const confirmDelete = window.confirm(`Tem certeza que deseja excluir o tipo de pagamento "${paymentType.name}"?`);
    if (!confirmDelete) return;
    try {
      await deletePaymentType(id);
      alert('Tipo de pagamento excluído com sucesso!');
      setPaymentTypes(paymentTypes.filter(pt => pt.id !== id));
    } catch (error) {
      console.error('Erro ao excluir tipo de pagamento:', error);
      alert(`Erro ao excluir o tipo de pagamento "${paymentType.name}". Tente novamente.`);
    }
  };
  return (
    <div className="payment-types-container">
      <h2>Tipos de Pagamento</h2>
      <a href="/payment_types/new" className="btn btn-success mb-3">
        <i className="fas fa-plus"></i> Adicionar Tipo de Pagamento
      </a>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Taxa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {paymentTypes.map((paymentType) => (
            <tr key={paymentType.id}>
              <td>{paymentType.name}</td>
              <td>{paymentType.taxa}</td>
              <td>
                <a href={`/payment_types/edit/${paymentType.id}`} className="btn btn-primary btn-sm me-2" title="Editar">
                  <i className="fas fa-edit"></i>
                </a>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(paymentType.id)}
                  title="Excluir"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}