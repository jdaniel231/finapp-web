import { useEffect, useState } from "react";
import { getRedeCards } from "../../api/rede_card";

export default function RedeCardBalanceDaily() {

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

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  const dailyTotal = balance
    .filter(item => {
      if (!item.created_at) {
        return false;
      }
      const itemDate = new Date(item.created_at);
      return itemDate.getFullYear() === todayYear &&
             itemDate.getMonth() === todayMonth &&
             itemDate.getDate() === todayDate;
    })
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);



  return (
    <div>
      <h5 className="card-title text-success">Faturamento do dia</h5>
      <p className="card-text fs-4 fw-bold">{dailyTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
    </div>
  );
}