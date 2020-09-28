import React from "react"
import styled from "styled-components"

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #612f80;
`

const CardFooter = styled.div`
  width: 100%;
  background: #fffafa;
`

const CardBody = styled.section`
  width: 100%;
  background: red;
  display: flex;
  flex-direction: column;
`

const CardLayout = styled.div`
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  heigth: 140px;
`

const Card = ({ children, image }) => (
  <>
    <CardLayout>
      <CardHeader>{image}</CardHeader>
      <CardBody>{children}</CardBody>
    </CardLayout>
  </>
)
export default Card
