/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { StyledSectionHeader } from './styles'

type HeaderProps = {
  /** Label displayed as Header */
  label: string,

  /** optional, by default clicking it changes the arrow from right to down.
   * Adding to the function causes
   */
  onClickHandler?: Function
}

/** Header Component for section of users */
const Header = React.forwardRef<HTMLButtonElement, HeaderProps>(({ label: text, onClickHandler }: HeaderProps, ref) => {

  const handleClick = () => {
    setIsExpanded((isExpanded) => !isExpanded);
    if (onClickHandler){
      onClickHandler();
    }
  }
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <StyledSectionHeader onClick={handleClick} ref={ref}>
      <span>{text}</span>
      <img alt='arrow' src={isExpanded ? 'arrowDown.svg' : 'arrowRight.svg'} />
    </StyledSectionHeader>
  )
})

Header.displayName = "Header"

export default Header