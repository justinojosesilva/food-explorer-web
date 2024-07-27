import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Quantity } from "../Quantity";
import { Container } from "./styles";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { PiPencilSimple } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { api } from "../../service/api";
import foodDefault from "../../assets/foodDefault.svg";
import { useOrder } from "../../hooks/order";

export function Card({image, id, favorite, link, title, description, price}) {
  const { user } = useAuth()
  const [ isAdmin ] = useState(user.role === USER_ROLE.ADMIN)
  const navigate = useNavigate();
  const [ isFavorite, setIsFavorite ] = useState(favorite)
  const [ quantity, setQuantity ] = useState(0)
  const imgUrl = image ? `${api.defaults.baseURL}/files/${image}`: foodDefault
  const [ imageLoad ] = useState(imgUrl)
  const { addProducts, removeProducts, products } = useOrder()
 
  const handleEditDish = (id) => {
    navigate(`/new/${id}`)
  }

  async function handleFavorite(id) {
    if(isFavorite){
      await api.delete(`/favorites/${id}`, { withCredentials: true})
    } else {
      await api.post(`/favorites/${id}`, {}, { withCredentials: true})
    }
    setIsFavorite(!isFavorite)
  } 

  function handleAddQuantity() {
    setQuantity(quantity+1)
  }

  function handleSubtractQuantity() {
    setQuantity(quantity-1)
    if(quantity == 0) {
      setQuantity(0)
      removeProducts({ id })
    }
  }

  function handleAddOrder() {
    addProducts({
      product: {
        id,
        name: title,
        description,
        image,
        price
      }, 
      quantity
    })
  }

  useEffect(() => {
    function loadProducts() {
      products && products.map(item => {
        if(item.product.id === Number(id)) {
          setQuantity(item.quantity)
        }
      })
    }
    loadProducts()
  }, [])
  
  return (
    <Container>
      {image && <img src={imageLoad} alt={title}/>}
      <Link to={link}>{title} &#62;</Link>
      <p>{description.substr(0,70) +'...'}</p>
      <span>R$ {price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
      {
        !isAdmin &&
        <div>
          <Quantity 
            quantity={quantity}
            onChangeMinus={() => handleSubtractQuantity()}
            onChangePlus={() => handleAddQuantity()}
          />
          <Button title="incluir" onClick={() => handleAddOrder()}/>
        </div>
      }
      <span>

        {
          isAdmin &&
          <button onClick={() => handleEditDish(id)}>
            <PiPencilSimple /> 
          </button>
        }
        {
          (!isAdmin && isFavorite) &&
          <button type="button" onClick={() => handleFavorite(id)}>
            <FaHeart /> 
          </button>
        }
        {
          (!isAdmin && !isFavorite) &&
          <button type="button" onClick={() => handleFavorite(id)}>
            <FaRegHeart />
          </button>
        }
      </span>
    </Container>
  )
}