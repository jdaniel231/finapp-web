import { useEffect, useState } from "react";
import { getRedeCards } from "../../api/rede_card";

export default function RedeCardBalanceTotal() {

  const [balance, setBalance] = useState([]);

  const fetchRedeCardBalance = async () => {
    try {
      const data = await getRedeCards();
      setBalance(data);
    } catch (error) {
      console.error("Erro ao buscar saldo do RedeCard:", error);
      alert("Erro ao buscar saldo do RedeCard.");
    }
  }

  useEffect(() => {
    fetchRedeCardBalance();
  }, []);

  const total = balance.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return (
    <div>
      <h5 className="card-title text-primary">Faturamento do mês</h5>
      <p className="card-text fs-4 fw-bold">{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
    </div>
  );
}