import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./pages/Dashboard"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
