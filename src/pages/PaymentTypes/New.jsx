import { createPaymentType } from "../../api/payment_type";
import { useNavigate } from "react-router-dom";
import PaymentTypeForm from "../../components/PaymentTypes/Form";

export default function PaymentTypeNew() {

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      // Call the API to create a new payment type
      await createPaymentType(data);
      alert("Payment type created successfully!");
      navigate("/payment_types");
    } catch (error) {
      console.error("Error creating payment type:", error);
      alert("Failed to create payment type.");
    }
  }

  return (
    <PaymentTypeForm
      initialData={{}}
      onSubmit={handleSubmit}
      submitLabel="Criar"
    />
  );
}