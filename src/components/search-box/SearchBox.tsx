/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { StyledSearchBox, StyledInput, StyledIconContainer } from './styles'

type SearchBoxProps = {
  /** Optional, value used for input if making it a controlled component */
  value?: string,

  /** Optional, callback function when onChange is fired in the input element */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [restOfProps: string]: any,
}

/** Used for searching for users */
const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>((props : SearchBoxProps, ref) => {
  return (
    <StyledSearchBox>
      <StyledIconContainer>
        {/* Not using next/image because thats a next only feature and I am trying to make the component generic for all react frameworks */}
        <img 
          src='searchIcon.svg'
          alt='searchIcon' />
      </StyledIconContainer>
      <StyledInput ref={ref} {...props} placeholder='Search'/>
    </StyledSearchBox> 
  )
})

SearchBox.displayName = "Search Box"
export default SearchBox