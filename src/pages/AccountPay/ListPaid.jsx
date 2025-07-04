import React, { useEffect, useState } from 'react';
import { getAccountPay, cancelAccountPay } from '../../api/account_pay';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function ListPaid() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchAccounts = async () => {
    try {
      const data = await getAccountPay();
      setAccounts(data.filter(item => item.status === 'paid'));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleCancelPayment = async (id) => {
    const confirmCancel = window.confirm('Tem certeza que deseja cancelar este pagamento?');
    if (!confirmCancel) return;

    try {
      await cancelAccountPay(id);
      alert('Pagamento cancelado com sucesso!');
      fetchAccounts();
    } catch (error) {
      console.error('Erro ao cancelar pagamento:', error);
      alert(`Erro ao cancelar o pagamento. Tente novamente.`);
    }
  };

  if (loading) return <p>Carregando contas pagas...</p>;
  if (error) return <p>Erro ao carregar contas pagas: {error.message}</p>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Contas Pagas</h2>
        <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
          <i className="fas fa-arrow-left me-2"></i> Voltar
        </button>
      </div>
      {accounts.length === 0 ? (
        <p>Nenhuma conta paga encontrada.</p>
      ) : (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data de Vencimento</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map(account => (
              <tr key={account.id}>
                <td>{account.id}</td>
                <td>{account.title}</td>
                <td>{account.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                <td>{new Date(account.due_date).toLocaleDateString('pt-BR')}</td>
                <td>{account.status === 'paid' ? 'Pago' : 'Pendente'}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleCancelPayment(account.id)}
                  >
                    <i className="fas fa-undo"></i> Cancelar Pagamento
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}