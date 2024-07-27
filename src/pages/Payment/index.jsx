import { useEffect, useState } from "react";
import { Container, Content, PaymentCard, PaymentPix, PaymentStatus, TypePayment} from "./styles";
import { ButtonLink } from "../../components/ButtonLink";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { OrderItem } from "../../components/OrderItem";

import { PiCaretLeft, PiReceiptBold, PiClock } from "react-icons/pi";
import { FaPix, FaCreditCard } from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../hooks/order";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import { Menu } from "../../components/Menu";

export function Payment() {
  const { user } = useAuth()
  const [ isAdmin ] = useState(user.role === USER_ROLE.ADMIN)
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [ isPix, setIsPix ] = useState(true)
  const [ isStatusPayment, setIsStatusPayment ] = useState(false)
  const [ totalOrder, setTotalOrder ] = useState(0)
  const [ number_credit, setNumberCredit ] = useState() 
  const [ validate_credit, setValidateCredit ] = useState() 
  const [ cvc_credit, setCvcCredit ] = useState() 
  const { products, setProducts, setTotal, removeProducts, order_id } = useOrder()
  

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleForPaymenty() {
    const payment = document.querySelector('#payment')
    const order = document.querySelector('#order')
    payment.style.display = 'block'
    order.style.display = 'none'
  }

  function handleDeleteFromOrder(id) {
    removeProducts({ id })
  }

  async function handleFinalizePayment() {
    let payment = {}
    if(isPix){
      payment = {
        order_id,
        type_payment: 'pix',
        pix_code: 'frefgejfvbrehvutrhjbvitrgujvtgrhjvtguyhobsycvoue834908539u98h35g78fv'
      }
    } else {
      payment = {
        order_id,
        type_payment: 'credit',
        number_credit,
        validate_credit,
        cvc_credit
      }
    }
    try {
      await api.post(`/payments`, payment, { withCredentials: true })
      alert('Pagamento finalizado com sucesso!')
      setProducts(null)
      setTotal(0)
      navigate('/')
    } catch (error) {
      alert(error.response.data.message)
    }

  }

  useEffect(() => {
    function calcTotalOrder() {
      let calc = 0 
      products && products.map(item => {
        calc = calc + (item.product.price * item.quantity)
      })
      setTotalOrder(calc)
    }
    calcTotalOrder()
  }, [products])

  return(
    <Container>
            <Header 
        isAdmin={isAdmin} 
        onOpenMenu={() => setMenuIsOpen(true)}
        onCloseMenu={() => setMenuIsOpen(false)} 
        menuIsOpen={menuIsOpen}
      />
      <Menu
        isAdmin={isAdmin}
        menuIsOpen={menuIsOpen}
      />
      <Content>
        <ButtonLink title="voltar" icon={PiCaretLeft} onClick={handleBack}/>
        <section>
          <article id="order">
            <Title title="Meu pedido"/>
            <div>
              {
               products.map(item => {
                return <OrderItem 
                  key={item.product.id} 
                  img={item.product?.image} 
                  name={item.product.name} 
                  quantity={item.quantity} 
                  price={item.product.price * item.quantity} 
                  onClick={() => handleDeleteFromOrder(item.product.id)}
                  title="Excluir" 
                />
})
               
              }

              <h2>Total: R$ {totalOrder.toLocaleString('pt-br', {minimumFractionDigits: 2})}</h2>
              <span>
                <Button title="Avançar" onClick={handleForPaymenty}/>
              </span>
            </div>


          </article>
          <article id="payment">
            <Title title="Pagamento"/>
            <TypePayment>
              <div onClick={() => setIsPix(true)}><FaPix /> PIX</div>
              <div onClick={() => setIsPix(false)}><FaCreditCard/>Crédito</div>
            </TypePayment>
     
              {(!isStatusPayment && isPix) &&
                <PaymentPix>
                  <BsQrCode />
                </PaymentPix>
              }
              {(!isStatusPayment && !isPix) &&
                <PaymentCard>
                <li>
                  <div>
                    <label htmlFor="">Número do Cartão</label>
                    <input type="text" placeholder="0000 0000 0000 0000" onChange={(e) => setNumberCredit(e.target.value)}/>
                  </div>
                </li>
                <li>
                  <div>
                    <label htmlFor="">Validade</label>
                    <input type="text" placeholder="04/25" onChange={(e) => setValidateCredit(e.target.value)}/>
                  </div>
                  <div>
                    <label htmlFor="">CVC</label>
                    <input type="text"  placeholder="000"onChange={(e) => setCvcCredit(e.target.value)}/>
                  </div>
                </li>
                <li>
                  <div>
                    <Button icon={PiReceiptBold} title="Finalizar pagamento" onClick={handleFinalizePayment}/>
                  </div>
                </li>
                </PaymentCard>
              }

              {isStatusPayment &&            
                <PaymentStatus>
                  <div>
                    <PiClock />
                    <p>Aguardando pagamento no caixa</p>
                  </div>
                </PaymentStatus>
              }
          </article>
        </section>
      </Content>
      <Footer />
    </Container>
  )
}