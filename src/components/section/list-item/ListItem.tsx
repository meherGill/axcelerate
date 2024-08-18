'use client'

import React from "react"
import { StyledListItem, StyledTextContainer } from "./styles"

export type ListItemProps = {
  primaryText: string,
  secondaryText?: string,
  imageSrc?: string,
  type?: 'primary',
}
const ListItem = ({primaryText, secondaryText, imageSrc, type } :  ListItemProps) => {

  const textItemToRender = () => {
    if (!secondaryText){
      return <StyledTextContainer type={type}>{primaryText}</StyledTextContainer>
    }
    else {
      return (
        <StyledTextContainer>
          <span>{primaryText}</span>
          <span>{secondaryText}</span>
        </StyledTextContainer>
      )
    }
  }

  return (
    <StyledListItem type={type}>
      <img alt='profile picture' src={`${imageSrc ? imageSrc : 'defaultProfilePicture.svg'}`}></img>
      <span>{textItemToRender()}</span>
    </StyledListItem>
  )
}

export default ListItem