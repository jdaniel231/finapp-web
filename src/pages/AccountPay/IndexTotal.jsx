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
      <h5 className="card-title text-primary">Total a Pagar</h5>
      <p className="card-text fs-4 fw-bold"> {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
    </div>
  );
}