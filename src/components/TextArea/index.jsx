import { Container } from "./styles";

export function TextArea({ title, id, size, ...rest }) {
  return (
    <Container size={size}>
      <label htmlFor={id}>{title}</label>
      <textarea id={id} {...rest} />
    </Container>
  )
}