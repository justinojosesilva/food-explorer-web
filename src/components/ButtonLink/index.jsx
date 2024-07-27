import { Container } from "./styles";

export function ButtonLink({ title, icon:Icon, ...rest }) {
  return (
    <Container 
      {...rest}
    >
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  )
}