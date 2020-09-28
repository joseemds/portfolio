import React from "react"
import styled from "styled-components"
import Card from "./card"
import Image from "./image"

const ProfileCard = ({ image, name, description }) => {
  return (
    <Card image={<Image />}>
      <p>{name}</p>
      <p>{description}</p>
    </Card>
  )
}

export default ProfileCard
