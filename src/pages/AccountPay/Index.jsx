import { useEffect, useState } from "react";
import { cancelAccountPay, deleteAccountPay, getAccountPay, payAccountPay } from "../../api/account_pay";

export default function AccountPay() {

    const [account, setAccount] = useState([]);
  
    const fetchAccountPay = async () => {
      try{
        const data = await getAccountPay();
        setAccount(data);
      } catch (error) {
        console.error("Erro ao buscar account_pay:", error);
        alert("Erro ao buscar account_pay.");
      }
    }
  
    useEffect(() => {
      fetchAccountPay();
    }
    , []);

    const handleDelete = async (id) => {
      const confirmDelete = window.confirm('Tem certeza que deseja excluir este item?');
      if (!confirmDelete) return;

      try {
        await deleteAccountPay(id);
        alert('Item excluído com sucesso!');
        setAccount(account.filter(item => item.id !== id));
      } catch (error) {
        console.error('Erro ao excluir item:', error);
        alert(`Erro ao excluir o item. Tente novamente.`);
      }
    };

   const handlePay = async (id) => {
      try {
        const data = await payAccountPay(id);
        alert(`Pagamento realizado com sucesso! Valor: R$ ${data.value}`);
        await fetchAccountPay();
      } catch (error) {
        console.error('Erro ao realizar pagamento:', error);
        alert(`Erro ao realizar o pagamento. Tente novamente.`);
      }
    };

    const handleCancelPayment = async (id) => {
      const confirmCancel = window.confirm('Tem certeza que deseja cancelar este item?');
      if (!confirmCancel) return;

      try {
        await cancelAccountPay(id);
        alert('Item cancelado com sucesso!');
        setAccount(account.filter(item => item.id !== id));
        await fetchAccountPay();
      } catch (error) {
        console.error('Erro ao cancelar item:', error);
        alert(`Erro ao cancelar o item. Tente novamente.`);
      }
    };

  return (
    <div>
      <h1>Contas a Pagar</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data de Vencimento</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {account.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>R$ {item.value}</td>
              <td>{new Date(item.due_date).toLocaleDateString("pt-BR")}</td>
              <td>{item.status === "pending" ? "Pendente" : "Pago"}</td>
              <td>
                {item.status === "pending" ? (
                  <>
                    <button className="btn btn-primary btn-sm">
                      <a href={`/account_pay/edit/${item.id}`} className="text-white text-decoration-none">
                        <i className="fas fa-edit"></i>
                      </a>
                    </button>

                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>

                    <button
                      className="btn btn-success btn-sm ms-2"
                      onClick={() => handlePay(item.id)}
                    >
                      <i className="fas fa-dollar-sign"></i>
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleCancelPayment(item.id)}
                  >
                    <i className="fas fa-undo"></i> Cancelar Pagamento
                  </button>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <a href="/account_pay/new" className="btn btn-success mb-3">
        <i className="fas fa-plus"></i> Adicionar Conta a Pagar
      </a>
    </div>
  );
}