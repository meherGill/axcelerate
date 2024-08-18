import styled from "styled-components";
import { colors } from "../../lib/theme";

export const StyledSearchBox = styled.div`
  box-sizing: border-box;
  
  display: flex;
  align-items: center;
  gap: 0.25rem;

  height: 3rem;
  padding: 0.5rem 1rem;

  background-color: ${colors.background};
  color: ${colors.text};
  
  & ::placeholder {
    color: ${colors.placeholderText};
  }
`
export const StyledInput = styled.input`
  all: unset;
  flex-grow: 1;
`

export const StyledIconContainer = styled.div`
 width: 1.25rem;
 height: 1.25rem;
 
 display: flex;
 justify-content: center;
 align-items: center;
 & > img {
  width: 14.21px;
  height: 14.22px;
 }
`