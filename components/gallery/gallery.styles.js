import styled from "styled-components";

export const GalleryContainer = styled.section`
  background-color: #073044;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 0;

  @media screen and (max-width: 950px) {
    padding: 5vh 0;
  }
`

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  
  padding: 10vh 0;
  justify-items: center;
  gap: 150px;
  margin: 0 auto;
  width: 85vw;
  
  @media screen and (max-width: 950px) {
    padding: 5vh 0;
    gap: 50px;
    width: 90vw;
  }

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85vw;
  }
`