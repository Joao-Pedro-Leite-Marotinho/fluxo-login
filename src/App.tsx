import { Login } from "./components/Login"
import { ProtectedLayout } from "./components/ProtectedLayout"
import { Teste } from "./components/Teste"
import { AuthProvider } from "./context/AuthProvider"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  

  return (
   <AuthProvider>
    <BrowserRouter>
      <Routes>

        <Route path="/profile" element={<ProtectedLayout />}/>
        
        <Route path="/login" element={<Login />}  />
        

      </Routes>
    </BrowserRouter>
   </AuthProvider>
  )
}

export default App
