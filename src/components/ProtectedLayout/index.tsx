import { useAuth } from "../../context/AuthProvider/useAuth"
import { Teste } from "../Teste"



export function ProtectedLayout() {
    const auth = useAuth()

    if(!auth.email){
        return <h1>Sem acesso</h1>
    }

    return <Teste/>
}