import React, { useState } from 'react'
import { StyledSectionHeader } from './styles'

type HeaderProps = {
  text: string,
  onClickHandler?: Function
}

const Header:React.FC<HeaderProps> = ({ text, onClickHandler }) => {

  const handleClick = () => {
    setIsExpanded((isExpanded) => !isExpanded);
    if (onClickHandler){
      onClickHandler();
    }
  }
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <StyledSectionHeader onClick={handleClick}>
      <span>{text}</span>
      <img src={isExpanded ? 'arrowDown.svg' : 'arrowRight.svg'} />
    </StyledSectionHeader>
  )
}

export default Header