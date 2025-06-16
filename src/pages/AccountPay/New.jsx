import { useNavigate } from "react-router-dom";
import AccountPayForm from "../../components/AccountPay/Form";
import { createAccountPay } from "../../api/account_pay";

export default function AccountPayNew() {

  const navigate = useNavigate();

  const handleSubmit = async (accountPayData) => {
    try {
      await createAccountPay(accountPayData);
      alert("Conta a pagar criada com sucesso!");
      navigate("/account_pay");
    } catch (error) {
      console.error("Erro ao criar conta a pagar:", error);
      alert("Erro ao criar conta a pagar. Tente novamente.");
    }
  }

  return (
    <div>
      <AccountPayForm 
        initialData={{}}
        onSubmit={handleSubmit}
        submitLabel="Criar"
      />
    </div>
  );
}