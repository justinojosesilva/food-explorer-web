import { useEffect, useId, useState } from "react";
import { Container, Content, Form, RowFooter, Section } from "./styles";
import { ButtonLink } from "../../components/ButtonLink";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PiCaretLeft } from "react-icons/pi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Item } from "../../components/Item";
import { TextArea } from "../../components/TextArea";
import { Title } from "../../components/Title";
import { Row } from "../../components/Row";
import { Select } from "../../components/Select";
import { Avatar } from "../../components/Avatar";
import { GoUpload } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../service/api";
import { uploadImage } from "../../utils/uploadImage";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Menu } from "../../components/Menu";

export function NewDish() {
  const { user } = useAuth()
  const [ isAdmin ] = useState(user.role === USER_ROLE.ADMIN)
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [ isNew, setIsNew ] = useState(true)
  const params = useParams()
  const [ categories, setCategories ] = useState([])
  const [ categoryId, setCategoryId ] = useState() 
  const [ setAvatar ] = useState()
  const [ avatarFile, setAvatarFile ] = useState(null)
  const [ name, setName ] = useState('')
  const [ price, setPrice ] = useState(0)
  const [ description, setDescription ] = useState('')
  const [ items, setItems ] = useState([])
  const [ newItem, setNewItem ] = useState('')

  const navigate = useNavigate()

  function handleAddItem() {
    setItems(prevItem => [ ...prevItem, newItem ])
    setNewItem('')
  }

  function handleRemoveItem(deleted) {
    setItems( prevItem => prevItem.filter(item => item !== deleted))
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  async function handleSaveProduct() {
    const productSave = {
      name,
      category_id: categoryId,
      description,
      price,
      items
    }

    const response = await api.post("/products", productSave, { withCredentials: true })
    const { id } = response.data 

    await uploadImage({
      imageFile: avatarFile,
      product_id: id
    })

    alert("Produto cadastrado com sucesso!")
    navigate(-1)
  }

  async function handleUpdateProduct() {
    const productUpdate = {
      name,
      category_id: categoryId,
      description,
      price,
      items
    }

    await api.put(`/products/${params.id}`, productUpdate, { withCredentials: true })
    await uploadImage({
      imageFile: avatarFile,
      product_id: params.id
    })

    alert("Produto Atualizado com sucesso!")
    navigate(-1)
  }

  async function handleDelete(id) {
    if(confirm("Deseja realmente excluir o produto?")) {
      await api.delete(`/products/${id}`, {withCredentials: true})

      alert("Produto deletado com sucesso!")
      navigate("/")
    }
  }

  function handleBack(){
    navigate(-1)
  }

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("/categories", {withCredentials: true})
      setCategories(response.data)
    }
    loadCategories()

    async function loadProduct() {
      const product_id = params.id
      if(product_id) {
        const response = await api.get(`/products/${product_id}`, { withCredentials: true })
        const product = response.data
        setName(product.name)
        setCategoryId(product.category_id)
        if(product.items) {
          product.items.map((item) => setItems(prevItem => [ ...prevItem, item.name ]))
        }
        setPrice(product.price)
        setDescription(product.description)
        setIsNew(false)
      }
    }
    loadProduct()
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
        {isNew ? <Title title="Adicionar prato"/> : <Title title="Editar prato"/>}
        <Form>
          <Row>
            <Avatar title="Imagem do prato" icon={GoUpload} placeholder={isAdmin? "Selecione imagem para alterá-la": "Selecione imagem"} onChange={handleChangeAvatar}/>
            <Input id="name" title="Nome" type="text" placeholder="Ex.: Salada Ceasar" value={name} onChange={e => setName(e.target.value)} />

            <Select value={categoryId} title="Categoria" onChange={e => setCategoryId(e.target.value)}>
              <option value="0">Selecione</option>
              {categories && categories.map(category => (
                 <option key={category.id} value={category.id}>{category.name}</option>
                ))
              }
            </Select>
          </Row>
          <Row>

            <Section>
              <label>Ingrediente</label>
              <article>
                {
                  items.map((item, index) => (
                    <Item
                      key={String(index)} 
                      value={item}
                      onClick={() => handleRemoveItem(item)}
                    />

                  ))
                }
                <Item 
                  isNew 
                  placeholder="Adicionar"
                  value={newItem}
                  onChange={e => setNewItem(e.target.value)}
                  onClick={handleAddItem}
                />
              </article>
            </Section>
            <Input 
              id="price" 
              title="Preço" 
              type="text" 
              placeholder="R$ 00,00" 
              value={price.toLocaleString('pt-br', {minimumFractionDigits: 2})} 
              onChange={e => setPrice(e.target.value)}
            />
          </Row>

          <Row>
            <TextArea 
              size={112} 
              id="description" 
              title="Descrição" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"  
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Row>

          <RowFooter>
            {!isNew && 
              <>
                <Button type="button" title="Excluir prato" color="DARK_800" onClick={() => handleDelete(params.id)}/>
                <Button type="button" title="Salvar Alterações" color="TOMATO_400" onClick={handleUpdateProduct}/>
              </>
            }
            {isNew && <Button type="button" title="Salvar" color="TOMATO_400" onClick={handleSaveProduct}/>}
          </RowFooter>

        </Form>
      </Content>
      <Footer />
    </Container>
  )
}