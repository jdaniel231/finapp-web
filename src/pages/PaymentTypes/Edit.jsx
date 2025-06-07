import { useNavigate, useParams } from "react-router-dom";
import { getPaymentType, getPaymentTypes, updatePaymentType } from "../../api/payment_type";
import PaymentTypeForm from "../../components/PaymentTypes/Form";
import { useEffect, useState } from "react";

export default function PaymentTypeEdit() {

  const { id } = useParams();
  const [paymentType, setPaymentType] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    async function fetchPaymentType() {
      try {
        const data = await getPaymentType(id);
        setPaymentType(data);
      } catch (error) {
        alert("Erro ao carregar tipo de pagamento.");
      }
    }
    fetchPaymentType();
  }, [id]);

  const handleSubmit = async (paymentTypeData) => {
    try {
      await updatePaymentType(id, paymentTypeData);
      alert("Tipo de pagamento atualizado com sucesso!");
      navigate("/payment_types");
    } catch (error) {
      alert("Erro ao atualizar tipo de pagamento.");
    }
  };

 

  return (
    <PaymentTypeForm
      initialData={paymentType}
      onSubmit={handleSubmit}
      submitLabel="Salvar"
    />
  );
}