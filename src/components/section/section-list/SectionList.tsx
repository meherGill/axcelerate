import React from 'react'
import ListItem from '../list-item/ListItem'
import { StyledSectionList } from './styles'

type SectionListProps = {
  /** An array of {name. email, imageSrc} which is used for rendering an array of listItems.*/
  data: Array<{name: string, email?: string, imageSrc?: string}>
}

/** A wrapper component for a list of of ItemLists, providing padding and backdrop to it*/
const SectionList = React.forwardRef<HTMLDivElement, SectionListProps>(({data}: SectionListProps, ref) => {
  return (
    <StyledSectionList ref={ref}>
      {
        data.map(({name, email, imageSrc}) => <ListItem key={`${email}`} primaryText={name} secondaryText={email} imageSrc={imageSrc}/>)
      }
    </StyledSectionList>
  )
})

SectionList.displayName = "Section List"

export default SectionList