import React, { useEffect, useState } from 'react';
import { getAccountPay, deleteAccountPay, payAccountPay } from '../../api/account_pay';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

export default function ListToPay() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchAccounts = async () => {
    try {
      const data = await getAccountPay();
      setAccounts(data.filter(item => item.status === 'pending'));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este item?');
    if (!confirmDelete) return;

    try {
      await deleteAccountPay(id);
      alert('Item excluído com sucesso!');
      fetchAccounts();
    } catch (error) {
      console.error('Erro ao excluir item:', error);
      alert(`Erro ao excluir o item. Tente novamente.`);
    }
  };

  const handlePay = async (id) => {
    try {
      const data = await payAccountPay(id);
      alert(`Pagamento realizado com sucesso! Valor: R$ ${data.value}`);
      fetchAccounts();
    } catch (error) {
      console.error('Erro ao realizar pagamento:', error);
      alert(`Erro ao realizar o pagamento. Tente novamente.`);
    }
  };

  if (loading) return <p>Carregando contas a pagar...</p>;
  if (error) return <p>Erro ao carregar contas a pagar: {error.message}</p>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Contas a Pagar</h2>
        
        <button className="btn btn-primary" onClick={() => navigate('/account_pay/new')}>
          <i className="fas fa-plus"></i> 
          </button>
      </div>
      {accounts.length === 0 ? (
        <p>Nenhuma conta a pagar encontrada.</p>
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
                <td>{account.status === 'pending' ? 'Pendente' : 'Pago'}</td>
                <td>
                  <Link to={`/account_pay/edit/${account.id}`} className="btn btn-primary btn-sm me-2">
                    <i className="fas fa-edit"></i>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => handleDelete(account.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handlePay(account.id)}
                  >
                    <i className="fas fa-dollar-sign"></i>
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