import React, {useState, useRef, useEffect, useMemo} from 'react'
import SearchBox from '../search-box/SearchBox';
import SectionList from '../section/section-list/SectionList';
import Header from '../section/header/Header';
import { ExpandWrapper } from './styles';

type FullSearchListProps = {
  data: {
    [sectionTitle: string]: Array<{name: string, email?: string, imageSrc?: string}>
  }
};

type HeaderAndSectionProps = {
  header: string,
  listOfUsers: Array<{name: string, email?: string, imageSrc?: string}>

}
const HeaderAndSection:React.FC<HeaderAndSectionProps> = ({header, listOfUsers}) => {
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
  }, [listOfUsers])
  
  return (
    <>
     <Header onClickHandler={handleHeaderClick} text={header}/>
     <ExpandWrapper ref={expandedWrapperRef}>
      <SectionList ref={sectionListRef} data={listOfUsers}/>
    </ExpandWrapper>
    </>
  )
}
const FullListSearch:React.FC<FullSearchListProps> = ({data}) => {
  const [searchValue, setSearchValue] = useState('')
  const sectionHeadersArr = Object.keys(data);

  const dataToShow = useMemo(() => {
    if (!searchValue) return data;

    const objectToReturn : typeof data = {}
    for (const key of Object.keys(data)){
      objectToReturn[key] = data[key].filter((val) => val.name.startsWith(searchValue))
    }
    return objectToReturn;
  }, [searchValue])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  return (
    <div style={{width: '400px'}}>
      <SearchBox value={searchValue} onChange={handleSearch}/>
        {
          sectionHeadersArr.map((header) => {
            const listOfUsers = dataToShow[header];
            return(
              <HeaderAndSection key={header} header={header} listOfUsers={listOfUsers}/>
            )
          })
        }
    </div>
  )
}

export default FullListSearch