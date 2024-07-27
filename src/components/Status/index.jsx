import { Container, Red, Yellow, Green } from "./styles";

export function Status({ value }) {
  let valueStatus = statusPont(value)
  return (
    <Container>
      <valueStatus.status>&bull;</valueStatus.status> <p>{valueStatus.name}</p>
    </Container>
  )
}

const statusPont =(value) => {
  switch(value) {

    case 'preparing':
        return {
          status: Yellow,
          name: 'Preparando'
        }
    case 'delivered':
        return {
          status: Green,
          name: 'Entregue'
        }
    case 'pending':
      return {
        status: Red,
        name: 'Pendente'
      }
    
  }
}