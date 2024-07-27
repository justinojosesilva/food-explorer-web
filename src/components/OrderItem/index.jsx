import { useState } from "react"
import { Container } from "./styles"
import foodDefault from "../../assets/foodDefault.svg";
import { api } from "../../service/api";

export function OrderItem({ img, name, quantity, price, title, ...rest }) {
  const imgUrl = img ? `${api.defaults.baseURL}/files/${img}`: foodDefault
  const [ imageLoad ] = useState(imgUrl)
  return (
    <Container>
      <img src={imageLoad} alt={name} />
      <div>
        <p>
          {quantity && <>{quantity} x</>} {name} {price && <span>R$ {price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>}
        </p>
        <button {...rest}>
          {title}
        </button>
      </div>
    </Container>
  )
}