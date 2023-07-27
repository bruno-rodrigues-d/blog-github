import styled from "styled-components";

export const ListPost = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 2rem;

  margin: 3rem auto 6rem;
`

export const SearchContainer = styled.main`
  max-width: 54rem;
  max-height: 13.5rem;
  margin: 4.5rem auto 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
`

export const SearchHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: Nunito;
    font-size: 18px;
    font-weight: 700;
    line-height: 160%;
  }

  p {
    color: ${(props) => props.theme['base-span']};

    font-family: Nunito;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};

  color: ${(props) => props.theme['base-label']};

  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;

  &::placeholder {
      color: ${props => props.theme['base-label']};
    }

  &:active {
    border: 1px solid ${(props) => props.theme['blue']};
  }
`