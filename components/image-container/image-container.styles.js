import styled from "styled-components";

export const ImageBorder = styled.div`
  border: 1.5px solid #b5c9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    transform: scale(1.1);
  }
`