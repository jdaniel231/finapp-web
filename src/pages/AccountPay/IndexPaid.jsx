import { useEffect, useState } from "react";
import { getAccountPay } from "../../api/account_pay";

export default function AccountPayPaid() {

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

  const total = account
    .filter(item => item.status === "paid")
    .reduce((sum, item) => sum + Number(item.value || 0), 0)
  
  return (
    <div>
      <h5 className="card-title text-success">Total Pago</h5>
      <p className="card-text fs-4 fw-bold"> {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
    </div>
  );
}