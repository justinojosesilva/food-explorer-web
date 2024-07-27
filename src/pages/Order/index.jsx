import { useEffect, useState } from "react";
import { Container, Content, Table } from "./styles";
import { ButtonLink } from "../../components/ButtonLink";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { Status } from "../../components/Status";
import { SelectWrapper } from "../../components/SelectWrapper";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { api } from "../../service/api";
import { Menu } from "../../components/Menu";

export function Order() {

  const listOptions = [
    {id: 1, name: 'status', value:'pending', label: "Pendente", color: 'red' }, 
    {id: 2,  name: 'status', value:'preparing', label: "Preparando", color: 'yellow'},
    {id: 3,  name: 'status', value:'delivered', label: "Entregue", color: 'green'}
  ]
  const [ orders, setOrders ] = useState([])
  const { user } = useAuth()
  const [ isAdmin ] = useState(user.role === USER_ROLE.ADMIN)
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function generateDate(date) {
    let d = new Date(date)
    return `${("0" + d.getDay()).slice(-2)}/${("0"+(d.getMonth()+1)).slice(-2)} às ${("0"+d.getHours()).slice(-2)}h${("0"+d.getMinutes()).slice(-2)}`
  }

  function generateCod(number, length) {
    let my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }
    return my_string;
  }

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get("/orders", { withCredentials: true})
      setOrders(response.data)
    }
    loadOrders()
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
        {isAdmin ? <Title title="Pedidos"/> : <Title title="Histórico de pedidos"/>}
        <section>

          <Table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e Hora</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map(order => (
                  <tr key={order.id}>
                    <td>
                      
                      { !isAdmin && <Status value={order.status} /> }
                      {isAdmin &&
                        <SelectWrapper
                          id={order.id}
                          placeholder="Selecione status"
                          value={order.status}
                          options={listOptions}
                        />
                      }
                    </td>
                    <td>{generateCod(order.id, 8)}</td>
                    <td>
                      {order.products.map(product => (
                        `${product.quantity} x ${product.name}, `
                      ))}
                    </td>
                    <td>{generateDate(order.date)}</td>
                  </tr>
                ))
              }
            </tbody>

          </Table>

          {
            orders &&
            orders.map(order => (
              <article key={order.id}> 
                <div>
                  <p>{generateCod(order.id, 8)}</p>
                  {!isAdmin && <p><Status value={order.status}/></p>}
                  <p>{generateDate(order.date)}</p>
                </div>
                <div>
                  <p>
                    {order.products.map(product => (
                        `${product.quantity} x ${product.name}, `
                      ))}
                  </p>
                </div>
                {isAdmin &&
                  <div> 
                    <SelectWrapper
                      id={order.id}
                      placeholder="Selecione status"
                      value={order.status}
                      options={listOptions}
                    />
                  </div>  
                }    
              </article>  
            ))
          }                                       
        </section>
      </Content>
      <Footer />
    </Container>
  )
}