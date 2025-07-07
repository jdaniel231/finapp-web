import { useEffect, useState } from "react";
import { getRedeCards } from "../../api/rede_card";

export default function RedeCard() {

  const [redeCards, setRedeCards] = useState([]);

  const fetchRedeCards = async () => {
    try {
      const data = await getRedeCards();
      setRedeCards(data);
    } catch (error) {
      console.error("Erro ao buscar transações de RedeCard:", error);
      alert("Erro ao carregar a lista de transações de RedeCard.");
    }
  };

  useEffect(() => {
    fetchRedeCards();
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Transações de RedeCard</h2>
      </div>
      <div className="card-body">
        {redeCards.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>TID</th>
                  <th>NSU</th>
                  <th>Valor</th>
                  <th>Data</th>
                  <th>Bandeira</th>
                </tr>
              </thead>
              <tbody>
                {redeCards.map((redeCard) => (
                  <tr key={redeCard.id}>
                    <td>{redeCard.id}</td>
                    <td>{redeCard.tid}</td>
                    <td>{redeCard.nsu}</td>
                    <td>{redeCard.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>{new Date(redeCard.created_at).toLocaleDateString()}</td>
                    <td>{redeCard.card_brand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Nenhuma transação encontrada ou carregando...</p> // Mensagem alternativa
        )}
      </div>      
    </div>  
  );
}