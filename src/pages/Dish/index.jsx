import { useEffect, useState } from "react";
import { Container, Content, Display, PriceQuantity } from "./styles";
import { ButtonLink } from "../../components/ButtonLink";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PiCaretLeft, PiReceiptBold } from "react-icons/pi";
import { Tag } from "../../components/Tag";
import { Quantity } from "../../components/Quantity";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";
import { useOrder } from "../../hooks/order";
import { Menu } from "../../components/Menu";

export function Dish() {
  const { user } = useAuth()
  const [ isAdmin ] = useState(user.role === USER_ROLE.ADMIN)
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [ product, setProduct ] = useState(null)
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ quantity, setQuantity ] = useState(0)
  const params = useParams()
  const { addProducts, removeProducts, products } = useOrder()
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }
  
  function handleEditDish(id) {
    navigate(`/new/${id}`)
  }

  function handleAddQuantity() {
    setQuantity(quantity+1)
    if(quantity > 0) {
      let alterPrice = totalPrice + product.price
      setTotalPrice(alterPrice)
    }
  }

  function handleSubtractQuantity() {
    setQuantity(quantity-1)
    if(quantity > 0) {
      let alterPrice = totalPrice - product.price
      setTotalPrice(alterPrice)
    } else {
      setTotalPrice(product.price)
      setQuantity(0)
      removeProducts({id: product.id})
    }
  }

  function handleIncludeOrder(product, quantity) {
    addProducts({product, quantity})
    
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`, { withCredentials: true})
      setProduct(response.data)
    }
    fetchProduct()

    function verifyOrder() {
      if(products && products.length > 0) {
        const productOrder = products.filter(product => product.id === Number(params.id))
        productOrder.map(product => {
          setQuantity(product.quantity)
        })
      }
    }

    verifyOrder()

    function loadProducts() {
      products && products.map(item => {
        if(item.product.id === Number(params.id)) {
          setQuantity(item.quantity)
        }
      })
    }
    loadProducts()
  },[])  

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
        {product &&
          <Display>
            <img src={`${api.defaults.baseURL}/files/${product.image}`} alt={product.name} />
            <article>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <div>
                {
                  product.items.map(item => {
                    return <Tag key={item.id} name={item.name}/>
                  })
                }
              </div>
              <PriceQuantity>
                {isAdmin && <Button type="button" title="Editar prato" onClick={() => handleEditDish(product.id)}/>}
                {!isAdmin &&
                  <>
                    <Quantity
                      quantity={quantity}
                      onChangeMinus={() => handleSubtractQuantity()}
                      onChangePlus={() => handleAddQuantity()}
                    />
                    <Button title="incluir" value={quantity > 0 ? product.price * quantity: product.price} onClick={() => handleIncludeOrder(product, quantity)}/>
                    <Button type="button" icon={PiReceiptBold} title="pedir" value={quantity > 0 ? product.price * quantity: product.price} onClick={() => handleIncludeOrder(product, quantity)}/>
                  </> 
                }
              </PriceQuantity>
            
            </article>
          </Display>
        }
      </Content>
      <Footer />
    </Container>
  )
}