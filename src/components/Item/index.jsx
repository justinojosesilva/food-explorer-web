import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export function Item({ isNew = false, value, type, placeholder, onClick, ...rest}) {
  return (
    <Container $isnew={isNew.toString()} {...rest}>
      <input readOnly={!isNew} type={type} placeholder={placeholder} value={value}/>
      <button type="button" onClick={onClick}>
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  )
}