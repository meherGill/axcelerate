import React from 'react'
import ListItem from '../list-item/ListItem'
import { StyledSectionList } from './styles'

type SectionListProps = {
  data: Array<{name: string, email?: string, imageSrc?: string}>
}


const SectionList = React.forwardRef<HTMLDivElement, SectionListProps>(({data}, ref) => {
  return (
    <StyledSectionList ref={ref}>
      {
        data.map(({name, email, imageSrc}) => <ListItem key={`${email}`} primaryText={name} secondaryText={email} imageSrc={imageSrc}/>)
      }
    </StyledSectionList>
  )
})

export default SectionList