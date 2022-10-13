import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
        title="Model S"
        description="Order Online for Touchless Delivery."
        backgroungImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        />
       <Section
       title="Model Y"
       description="Order Online for Touchless Delivery."
       backgroungImg="model-y.jpg"
       leftBtnText="Custom order"
       rightBtnText="Existing inventory"
       
       />
       <Section
       title="Model 3"
       description="Order Online for Touchless Delivery."
       backgroungImg="model-3.jpg"
       leftBtnText="Custom order"
       rightBtnText="Existing inventory"
       />
       <Section
       title="Model X"
       description="Order Online for Touchless Delivery."
       backgroungImg="model-x.jpg"
       leftBtnText="Custom order"
       rightBtnText="Existing inventory"/>
      <Section
       title="Lowerst Cost Solar Panel In Ghana"
       description="Money-Back-Guarantee."
       backgroungImg="solar-panel.jpg"
       leftBtnText="Order Now"
       rightBtnText="Learn More"
      />
      <Section
       title="Solar for New Roofs"
       description="Solor Roof Costs Less Than A New Roof Plus Solor Panels."
       backgroungImg="solar-roof.jpg"
       leftBtnText="Order Now"
       rightBtnText="Learn More"
      />
      <Section
       title="Accessories"
       description=""
       backgroungImg="accessories.jpg"
       leftBtnText="Shop Now"
       
      
      />
        

    </Container>
  )
}

export default Home
const Container = styled.div `
height: 100vh;


`