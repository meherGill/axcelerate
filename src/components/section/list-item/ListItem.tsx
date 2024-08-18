/* eslint-disable @next/next/no-img-element */
'use client'

import React from "react"
import { StyledListItem, StyledTextContainer } from "./styles"

export type ListItemProps = {
  /** Used as the main text */
  primaryText: string,

  /** Used as the secondary text on the bottom. If absent main text takes the entire space otherwise its shared between the two */
  secondaryText?: string,

  /** Source of the displau picture. A default one is used if absent */
  imageSrc?: string,

  /** type is a string, because in future it can be extended to secondary / tertiary */
  type?: 'primary',
}

/**  Items used as tiles in a section */
const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(({primaryText, secondaryText, imageSrc, type } : ListItemProps, ref) => {
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
    <StyledListItem type={type} ref={ref}>
      <img alt='profile picture' src={`${imageSrc ? imageSrc : 'defaultProfilePicture.svg'}`}></img>
      <span>{textItemToRender()}</span>
    </StyledListItem>
  )
})

ListItem.displayName = "List Item"

export default ListItem