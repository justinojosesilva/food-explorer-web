import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { ButtonLink } from "../../components/ButtonLink";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import { Title } from "../../components/Title";
import { OrderItem } from "../../components/OrderItem";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Menu } from "../../components/Menu";

export function Favorite() {
  const { user } = useAuth()
  const [ isAdmin ] = useState(user.role === USER_ROLE.ADMIN)
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [ favorites, setFavorites ] = useState([])

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  async function handleRemoveFavorite(id) {
    const favoritesRemove = favorites.filter(favorite => favorite.product_id !== id)
    setFavorites(favoritesRemove)
    await api.delete(`/favorites/${id}`, { withCredentials: true})
  } 

  useEffect(() => {
    async function loadFavorites() {
      const response = await api.get('/favorites', { withCredentials: true })
      setFavorites(response.data)
    }

    loadFavorites()
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
        {isAdmin ? <Title title="Favoritos"/> : <Title title="Meus Favoritos"/>}

        <section>
          {
            favorites &&
            favorites.map(favorite => (
              <OrderItem key={favorite.id} img={favorite.image} name={favorite.name} onClick={() => handleRemoveFavorite(favorite.product_id)} title="Remover dos Favoritos" />
            ))
          }
        </section>
      </Content>
      <Footer />
    </Container>
  )
}