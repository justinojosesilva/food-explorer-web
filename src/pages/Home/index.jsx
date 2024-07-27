import { useEffect, useState } from "react";
import { Container, Content, Banner,Image, Section } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import frustsBanner from "../../assets/fruts.svg";
import { SliderShow } from "../../components/SliderShow";
import { Menu } from "../../components/Menu";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { api } from "../../service/api";
import { useSearch } from "../../hooks/search";

export function Home() {
  const [ data, setData ] = useState([])
  const { user } = useAuth()
  const { search } = useSearch()
  const [ isAdmin ] = useState(user.role === USER_ROLE.ADMIN)
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/products?search=${search}`, { withCredentials: true })
      const { data } = response
      setData(data)      
    }
    loadData()
  }, [search])
  
  return (
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
        <Section>
          <Image src={frustsBanner} alt="Imagem de frutas e macarrones caindo."/>
          <Banner>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>   
          </Banner>
        </Section>
        {
          data && data.map(category => (
            <SliderShow 
              key={category.id} 
              title={category.name} 
              items={category.products}
            />
          ))
        }

      </Content>
      <Footer />
    </Container>
  )
}