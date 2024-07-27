import { Container } from "./styles";
import { Button } from "../../components/Button";
import imageLogo from "../../assets/polygon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service/api";

export function SignUp() {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate();

  function handleSignUp() {
    if( !name || !email || !password ) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!")
        navigate(-1)
      })
      .catch(error => {
        if( error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar.")
        }
      })
  }


  return (
    <Container>
      <section>
        <img src={imageLogo} alt="Logo tipo" />
        <h1>food explorer</h1>
      </section>
      <div>
        <p>Crie sua conta</p>

        <div>
          <label htmlFor="name">Seu nome</label>
          <input type="text" id="name" placeholder="Exemplo: Maria da Silva" onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>
        </div>
        <Button title="Criar conta" onClick={handleSignUp}/>

        <Link to="/">Já tenho uma conta</Link>
      </div>
    </Container>
  )
}