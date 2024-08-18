import styled from "styled-components";
import { colors } from "../../../lib/theme";

export const StyledListItem = styled.div<{type?: 'primary'}>`
  height: 3.25rem;
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.25rem;
  
  box-sizing: border-box;
  
  background-color: ${props => {
    if (!props.type){
      return colors.background
    }

    if (props.type === 'primary'){
      return colors.primary["200"]

    }

  }};

  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background-color: ${colors.secondary.hover};
  }

  &:active {
    background-color: ${colors.secondary.active};
  }

  & img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`
export const StyledTextContainer = styled.div<{type?: 'primary' | 'secondary'}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  color: ${props => props.type === 'primary' ? colors.primary.text : colors.text};

  & span:nth-child(2){
    color: ${colors.textLight};
    font-size: 0.8125rem;
  }
`