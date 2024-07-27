import { Container } from "./styles";
import { FiPlus, FiMinus } from "react-icons/fi";


export function Quantity({ quantity, setQuantity, onChangeMinus, onChangePlus  }) {
  return (
    <Container>
      <button type="button" onClick={onChangeMinus}>
        <FiMinus />
      </button>
      <input type="text" value={quantity} readOnly/>
      <button type="button" onClick={onChangePlus}>
        <FiPlus />
      </button>
    </Container>
  )
}