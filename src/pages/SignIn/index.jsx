import { Container } from "./styles";
import { Button } from "../../components/Button";
import imageLogo from "../../assets/polygon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <section>
        <img src={imageLogo} alt="Logo tipo" />
        <h1>food explorer</h1>
      </section>
      <div>
        <p>Faça login</p>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>
        </div>
        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">Criar uma conta</Link>
      </div>
    </Container>
  )
}