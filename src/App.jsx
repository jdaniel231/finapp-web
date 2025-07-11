import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./pages/Dashboard"
import Clients from "./pages/Clients/Index"
import ClientNew from "./pages/Clients/New"
import ClientEdit from "./pages/Clients/Edit"

import ProtectedLayout from "./components/ProtectedLayout"
import Services from "./pages/Services/Index"
import ServiceNew from "./pages/Services/New"
import ServiceEdit from "./pages/Services/Edit"
import PaymentTypes from "./pages/PaymentTypes/Index"
import PaymentTypeNew from "./pages/PaymentTypes/New"
import PaymentTypeEdit from "./pages/PaymentTypes/Edit"
import TicketsNew from "./pages/Tickets/New"
import TicketsClient from "./pages/Clients/TicketsClient"
// import TicketShow from "./pages/Tickets/Show"
import AccountPay from "./pages/AccountPay/Index"
import AccountPayNew from "./pages/AccountPay/New"
import AccountPayEdit from "./pages/AccountPay/Edit"
import ListToPay from "./pages/AccountPay/ListToPay"
import ListPaid from "./pages/AccountPay/ListPaid"
import RedeCard from "./pages/RedeCard/Index"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          element={
            <PrivateRoute>
              <ProtectedLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/new" element={<ClientNew />} />
          <Route path="/clients/edit/:id" element={<ClientEdit />} />
          <Route path="/clients/:id/tickets" element={<TicketsClient />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/new" element={<ServiceNew />} />
          <Route path="/services/edit/:id" element={<ServiceEdit />} />
          <Route path="/payment_types" element={<PaymentTypes />} />
          <Route path="/payment_types/new" element={<PaymentTypeNew />} />
          <Route path="/payment_types/edit/:id" element={<PaymentTypeEdit />} />
          <Route path="/clients/:id/tickets/new" element={<TicketsNew />} />
          <Route path="/account_pay" element={<AccountPay />} />
          <Route path="/account_pay/new" element={<AccountPayNew />} />
          <Route path="/account_pay/edit/:id" element={<AccountPayEdit />} />
          <Route path="/account_pay/to_pay" element={<ListToPay />} />
          <Route path="/account_pay/paid" element={<ListPaid />} />
          <Route path="/redecard" element={<RedeCard />} />
          {/* Adicione outras rotas protegidas aqui */}
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App