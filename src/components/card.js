import React from "react"
import styled from "styled-components"

const TopCard = styled.div`
  width: 100%;
  background: #612f80;
`

const BottomCard = styled.div`
  width: 100%;
  background: #fffafa;
`

const CardLayout = styled.div`
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 25vw;
`

const Card = ({ children, image }) => (
  <>
    <CardLayout>
      <TopCard>{image}</TopCard>
      <BottomCard>{children}</BottomCard>
    </CardLayout>
  </>
)
export default Card
