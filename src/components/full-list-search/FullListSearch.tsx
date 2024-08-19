import React, {useState, useRef, useEffect, useMemo} from 'react'
import SearchBox from '../search-box/SearchBox';
import SectionList from '../section/section-list/SectionList';
import Header from '../section/header/Header';
import { ExpandWrapper, Wrapper } from './styles';

type FullSearchListProps = {
  /** A nested javascript object, where the first level defines all headers, and the the second level for each header contains the users belonging to that header */
  data: {
    [sectionTitle: string]: Array<{name: string, email?: string, imageSrc?: string}>
  }
};

type HeaderAndSectionProps = {
  /** Header used for this section */
  header: string,

  /** List of users associated with this section */
  listOfUsers: Array<{name: string, email?: string, imageSrc?: string}>

}

/** A component that encapsulates header and its list of users, making it easier to work with animating the list */
export const HeaderAndSection:React.FC<HeaderAndSectionProps> = ({header, listOfUsers}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true)

  // use javascript to transition height, since it has a calculated height (auto) and css doesnt do it automatically
  const sectionListRef = useRef<HTMLDivElement>(null);
  const expandedWrapperRef = useRef<HTMLDivElement>(null);
  const calculatedHeightForList = useRef(0);
  
  const handleHeaderClick = () => {
    const newIsExapnded = !isExpanded;
    expandedWrapperRef.current!.style.transition = '200ms all ease-in'
    if (newIsExapnded){
      expandedWrapperRef.current!.style.height = `${calculatedHeightForList.current}px`
    }
    else {
      expandedWrapperRef.current!.style.height = '0px';
    }
    setIsExpanded(newIsExapnded)
  }
  
  useEffect(() => {
    expandedWrapperRef.current!.style.transition = '0s all'
    calculatedHeightForList.current = sectionListRef.current!.offsetHeight;
    expandedWrapperRef.current!.style.height = `${calculatedHeightForList.current}px`;

    if (!isExpanded){
      expandedWrapperRef.current!.style.height = '0px'
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOfUsers])
  
  return (
    <>
     <Header onClickHandler={handleHeaderClick} label={header}/>
     <ExpandWrapper data-testid={`${header}_expandWrapper`} ref={expandedWrapperRef}>
      <SectionList ref={sectionListRef} data={listOfUsers}/>
    </ExpandWrapper>
    </>
  )
}

/** Full fledeged omponent used for searching for people and categorizing them by different sections */
const FullListSearch = React.forwardRef<HTMLDivElement, FullSearchListProps>(({data} : FullSearchListProps, ref) => {
  const [searchValue, setSearchValue] = useState('')
  const sectionHeadersArr = Object.keys(data);

  const dataToShow = useMemo(() => {
    if (!searchValue) return data;

    const objectToReturn : typeof data = {}
    for (const key of Object.keys(data)){
      objectToReturn[key] = data[key].filter((val) => val.name.startsWith(searchValue))
    }
    return objectToReturn;
  }, [searchValue, data])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  return (
    <Wrapper ref={ref}>
      <SearchBox data-test-id="search-box" value={searchValue} onChange={handleSearch}/>
        {
          sectionHeadersArr.map((header) => {
            const listOfUsers = dataToShow[header];
            return(
              <HeaderAndSection key={header} header={header} listOfUsers={listOfUsers}/>
            )
          })
        }
    </Wrapper>
  )
})
FullListSearch.displayName = "Full List Search"
export default FullListSearch