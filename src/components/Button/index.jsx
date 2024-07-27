import { Container } from "./styles";
import { TbPointFilled } from "react-icons/tb";


export function Button({ icon:Icon, title, value, color="TOMATO_100", type="button", ...rest }) {
  
  return (
    <Container
      type={type}
      $color={color}
      {...rest}
    >
      {Icon && <Icon />}
      {title} 
      {
        value && 
          <>
          <span><TbPointFilled /></span> 
          <span>R$ {value.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
        </>
      }
    </Container> 
  )
}