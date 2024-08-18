/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { StyledSearchBox, StyledInput, StyledIconContainer } from './styles'

type SearchBoxProps = {
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [restOfProps: string]: any,
}

const SearchBox:React.FC<SearchBoxProps> = (props) => {
  return (
    <StyledSearchBox>
      <StyledIconContainer>
        {/* Not using next/image because thats a next only feature and I am trying to make the component generic for all react frameworks */}
        <img 
          src='searchIcon.svg'
          alt='searchIcon' />
      </StyledIconContainer>
      <StyledInput {...props} placeholder='Search'/>
    </StyledSearchBox> 
  )
}

export default SearchBox