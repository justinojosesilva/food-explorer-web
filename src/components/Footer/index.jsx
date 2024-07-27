import { Container, Content, Copywriting, Logo } from "./styles";
import logoImage from "../../assets/polygonfooter.svg"

export function Footer() {
  return (
    <Container>
      <Content>
        <Logo>
          <div >
            <img src={logoImage} alt="Logo do food explorer" />
            <h1>food explorer</h1>
          </div>
        </Logo>
        <Copywriting>
          © 2023 - Todos os direitos reservados.
        </Copywriting>
      </Content>
    </Container>
  )
}