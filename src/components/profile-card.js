import React from "react"
import styled from "styled-components"
import Card from "./card"
import Image from "./image"

const ProfileCard = ({ image, name, description }) => {
  return (
    <Card image={<Image style={{ borderRadius: "25px;", width: "10px;" }} />}>
      <p>{name}</p>
      <p>{description}</p>
    </Card>
  )
}

export default ProfileCard
