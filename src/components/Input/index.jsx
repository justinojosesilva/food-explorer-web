import { Container } from "./styles";

export function Input({ title, id, size, ...rest}) {
  return (
    <Container 
      size={size}
    >
      <label htmlFor={id}>{title}</label>
      <input id={id} {...rest} />
    </Container>
  )
}