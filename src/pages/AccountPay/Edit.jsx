import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  getAccountPayById, updateAccountPay } from "../../api/account_pay";
import AccountPayForm from "../../components/AccountPay/Form";

export default function AccountPayEdit() {
  const { id } = useParams();
  const [accountPay, setAccountPay] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchAccountPay() {
      try {
        // Aqui você deve chamar a API para buscar os dados da conta a pagar pelo ID
        const data = await getAccountPayById(id);
        setAccountPay(data);
        console.log(`Buscando conta a pagar com ID: ${id}`);
      } catch (error) {
        console.error("Erro ao carregar conta a pagar:", error);
        alert("Erro ao carregar conta a pagar.");
      }
    }
    fetchAccountPay();
  }, [id]);

  const handleSubmit = async (accountPayData) => {
    try {
      
      await updateAccountPay(id, accountPayData);
      alert("Conta a pagar atualizada com sucesso!");
      navigate("/account_pay"); 
    } catch (error) {
      console.error("Erro ao atualizar conta a pagar:", error);
      alert("Erro ao atualizar conta a pagar.");
    }
  }

  return (
    <AccountPayForm 
      initialData={accountPay}
      onSubmit={handleSubmit}
      submitLabel="Salvar"
    />
  );
}