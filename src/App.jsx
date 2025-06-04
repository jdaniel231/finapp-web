import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./pages/Dashboard"
import Clients from "./pages/Clients/Index"
import ClientNew from "./pages/Clients/New"
import ClientEdit from "./pages/Clients/Edit"

import ProtectedLayout from "./components/ProtectedLayout"


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
          <Route path="/clients/:id" element={<ClientEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
