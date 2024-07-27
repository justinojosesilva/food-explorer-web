import { useEffect, useState } from "react";
import { Container } from "./styles";
import { FaCheck, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { api } from "../../service/api";


export function SelectWrapper({id, title, value, options = []}) {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ selected, setSelected ] = useState({color: 'gray', label:'Selecione'})

  const handleClickOpen = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  async function selectOption(option, id) {
    await api.patch(`/orders/${id}`,{ status: option.value }, { withCredentials: true })
    setSelected(option)
    setIsOpen(false)
  }



  useEffect(() => {
    function optionVerify(value) {
      const optionValue = options.filter(option => option.value === value)
      if(optionValue && optionValue.length > 0) {
        setSelected(optionValue[0])
      }
    }
    optionVerify(value)
  },[])

  return (
    <Container id={id}>
      <div className="category-select">
        {title && <label htmlFor="options-view-button">{title}</label>}
        <input type="checkbox" name="options-view-button" id="options-view-button" onClick={handleClickOpen}/>

        <div id="select-button">
          <div id="selected-value"><GoDotFill style={{ color: selected.color }}/> { selected.label}</div>
          <div id="chevrons">
            {
              isOpen? <FaChevronUp data-icon="chevron-up" /> : <FaChevronDown data-icon="chevron-down"/>
            }
          </div>
        </div>
      </div>
      {isOpen &&
        <ul id="options">
          {options &&
            options.map(option => {
              return (
                <li key={option.id} className="option" onClick={() => selectOption(option, id)}>
                  {option.teste}
                  <input 
                    type="radio" 
                    name={option.name}
                    value={option.value}
                    data-label={option.label}
                  />
                  <GoDotFill style={{ color: option.color }}/>
                  <span className="label">{option.label}</span>
                  <FaCheck data-icon="check"/>
                </li>
              )
            })
          }
        </ul>
      }
    </Container>
  )
}

