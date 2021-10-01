import styled from "styled-components";

import { IProps } from "./";

export const StyledButton = styled.button<IProps>`
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "32px"};
  border-radius: ${(props) => props.border_radius || "5px"};
  
  cursor: pointer;
  pointer-events: ${(props) => (props.isLoading ? "none" : "all")};



  background: var(--pink);
  color: white;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
`;
