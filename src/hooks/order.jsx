import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../service/api";


export const OrderContext = createContext({})

function OrderProvider({ children }) {
  const [ total, setTotal ] = useState(0)
  const [ order_id, setOrderId ] = useState(0)
  const [ products, setProducts ] = useState([])
  const [ status, setStatus ] = useState('')
  const [ search, setSearch ] = useState("")

  function addProducts({ product, quantity}) {
    const productExists = products.map(prod => prod.product.id === product.id)
    if(productExists && productExists.length > 0 ) {product
      const produstsAlter = products.filter(prod => prod.product.id !== product.id)
      setProducts([ ...produstsAlter, {product, quantity}])
      alert(`Pedido alterado com sucesso!`)
    } else {
      setProducts([ ...products, {product, quantity}])
      alert(`${product.name} adicionado ao pedido!`)
    }
    let quantityTotal = total + quantity
    setTotal(quantityTotal)
  }

  function removeProducts({id}) {
    products.map(product => {
      if(product.id === id) {
        setTotal(total - product.quantity)
        alert(`${product.name} removido do pedido!`)
      }
    })
    const productsRemove = products.filter(product => product.id !== id)
    setProducts(productsRemove)
  }

  function changeSearch({value}) {
    setSearch(value)
  }

  useEffect(() => {
    async function getLocalOrder() {
      try {
        //const order = localStorage.getItem("@foodexplorer:order")
        const response = await api.get("/orders-pending", { withCredentials: true })
        const order = response.data
        if(order) {

          const { id, products, status } = order
          let total = 0
          products.map(item => {
            total = total + item.quantity
          })

          setOrderId(id)
          setTotal(total)
          setStatus(status)
          setProducts(products)
          
        }
      } catch(error) {
        console.log(error.message)
      }

    }
    getLocalOrder()
  },[])

  return (
    <OrderContext.Provider
      value={{
        order_id,
        total,
        setTotal,
        status,
        setStatus,
        products,
        setProducts,
        addProducts,
        removeProducts,
        search, 
        changeSearch
      }}
    >
      {children}
    </OrderContext.Provider>
  )

}

function useOrder() {
  const context = useContext(OrderContext)
  return context
}

export { OrderProvider, useOrder }