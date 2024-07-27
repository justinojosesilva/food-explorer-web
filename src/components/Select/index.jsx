import { Container } from "./styles";

export function Select({ title, id, children, ...rest}) {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <select id={id} {...rest}>{children}</select>
    </Container>
  )
}