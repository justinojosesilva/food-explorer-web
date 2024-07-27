import { Container } from "./styles";

export function Avatar({ title, id, icon:Icon, placeholder, onChange, ...rest }) {
  return (
    <Container>
      <label>{title}</label>
      <label htmlFor={id}>
        {Icon && <Icon />}
        {placeholder && <p>{placeholder}</p> }
        <input id={id} type="file" {...rest} onChange={onChange}/>
      </label>
    </Container>
  )
}