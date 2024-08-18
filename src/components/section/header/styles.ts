import styled from "styled-components";
import { colors } from "../../../lib/theme";

export const StyledSectionHeader = styled.button`
  all: unset;

  box-sizing: border-box;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2.3125rem;
  padding: 0 0.5rem 0 1rem;

  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  background-color:  ${colors.background}; 

  &:hover {
    background-color: ${colors.secondary.hover};
  }

  &:active {
    background-color: ${colors.secondary.active};
  }
`