import { Container, Content, Logo, Search, SignOut, Order, MiniOrder } from "./styles";
import { PiReceiptBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch, GoSignOut, GoX } from "react-icons/go";
import logoImage from "../../assets/polygon.svg"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useOrder } from "../../hooks/order";
import { api } from "../../service/api";
import { useSearch } from "../../hooks/search";

export function Header({ isAdmin, onOpenMenu, onCloseMenu, menuIsOpen }) {
  const { signOut } = useAuth()
  const { total, products, status, order_id } = useOrder()
  const { setSearch } = useSearch()

  const navigate = useNavigate()

  const handleNewDash = () => {
    navigate("/new")
  }

  const logOut = () => {
    signOut()
    navigate("/")
  }

  function handleSearch(value) {
    if(value.length == 0 || value.length > 2) {
      setSearch(value)
    }
  }
  
  const handleMyOrder = async () => {
    let amount = 0 
    const productsSave = products.map(item => {
      amount = amount + (item.product.price * item.quantity)
      return {
        product_id: item.product.id,
        quantity: item.quantity,
        unit_price:item.product.price
      }
    })

    if(status !== 'pending') {
      await api.post(`/orders`, { amount, products: productsSave }, { withCredentials: true })
    } else {
      await api.put(`/orders/${order_id}`, { amount, products: productsSave }, { withCredentials: true })
    }
    navigate("/payment")
  }

  return (
    <Container>
      <Content $isadmin={isAdmin.toString()}>
        {
          menuIsOpen ? (
            <button onClick={onCloseMenu}>
              <GoX/>
            </button>
          ) : (
            <button onClick={onOpenMenu}>
              <GiHamburgerMenu/>
            </button>
          )
          
        }
        
        <Logo to="/">
          <div >
            <img src={logoImage} alt="Logo do food explorer" />
            <h1>food explorer</h1>
          </div>
          {isAdmin && <span>admin</span>}
        </Logo>

        <Search> 
          <GoSearch />
          <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={e => handleSearch(e.target.value)}/>
        </Search>


        <Link to="/favorite">Meus Favoritos</Link>
        <Link to="/order">Histórico de pedidos</Link>

        {
          isAdmin ?
            <Order onClick={handleNewDash}>
              <span>
                Novo prato
              </span>
            </Order>
          :
          <Order onClick={handleMyOrder}>
            <PiReceiptBold />
            <span>
              Pedidos ({total})
            </span>
          </Order>
        }
        { !isAdmin &&
          <MiniOrder onClick={handleMyOrder}>
            <PiReceiptBold />
            <span>
            {total}
            </span>
          </MiniOrder>
        }
        <SignOut onClick={logOut}>
          <GoSignOut />
        </SignOut>
      </Content>
    </Container>
  )
}