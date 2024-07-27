import { useNavigate } from "react-router-dom";
import { Container, Search } from "./styles";
import { GoSearch } from "react-icons/go";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";

export function Menu({menuIsOpen, isAdmin, ...rest}) {
  const { signOut } = useAuth()
  const { setSearch } = useSearch()
  const navigate = useNavigate()

  function handleNewDish() {
    navigate("/new")
  }

  function handleFavorites() {
    navigate("/favorite")
  }

  function handleOrders() {
    navigate("/order")
  }

  function handleSearch(value) {
    if(value.length == 0 || value.length > 2) {
      setSearch(value)
    }
  }

  function logOut() {
    signOut()
    navigate("/")
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Search> 
        <GoSearch />
        <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={e => handleSearch(e.target.value)}/>
      </Search>
      {
        isAdmin &&
        <button onClick={handleNewDish}>
          Novo prato
        </button>
      }
      <button onClick={handleFavorites}>
        Meus favoritos
      </button>

      <button onClick={handleOrders}>
        Histórico de pedidos
      </button>

      <button onClick={logOut}>
        Sair
      </button>
    </Container>
  )
}