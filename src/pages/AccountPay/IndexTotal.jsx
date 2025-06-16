import { useEffect, useState } from "react";
import { getAccountPay } from "../../api/account_pay";

export default function AccountPayTotal() {

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

  // const total = account.reduce((sum, item) => sum + Number(item.value || 0), 0);

  const total = account
    .filter(item => item.status === "pending")
    .reduce((sum, item) => sum + Number(item.value || 0), 0)
  
  return (
    <div>
      <h1>COntas a Pagar</h1>

      <h3>Total:R$ {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>

      <a href="/account_pay" className="btn btn-primary">
        <i className="fas fa-eye"></i> Ver detalhes
      </a>
    </div>
  );
}