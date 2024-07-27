import { useRef, useState } from "react";
import { Title } from "../Title";
import { Container, ButtonLeft, ButtonRight, Gallery } from "./styles";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { Card } from "../Card";

export function SliderShow({ title, items = [] }) {
  const gallery = useRef(null)

  function handleLeftClick(e) {
    e.preventDefault()
    gallery.current.scrollLeft = gallery.current.scrollLeft - 50
  }

  function handleRightClick(e) {
    e.preventDefault()
    gallery.current.scrollLeft = gallery.current.scrollLeft + 50
  }

  return (
    <Container>
      <Title title={title}/>
      <ButtonLeft>
        <button onClick={handleLeftClick}>
          <PiCaretLeft />
        </button>
      </ButtonLeft>
      <Gallery ref={gallery}>
        {
          items && items.map( product => (
            <Card
              key={product.id}
              id={product.id}
              favorite={product.favorite}
              link={`/dish/${product.id}`}
              image={product.image}
              title={product.name}
              description={product.description}
              price={product.price}
            />
          ))
        }
      </Gallery>
      <ButtonRight>
        <button onClick={handleRightClick}>
          <PiCaretRight />
        </button>
      </ButtonRight>
    </Container>
  )
}