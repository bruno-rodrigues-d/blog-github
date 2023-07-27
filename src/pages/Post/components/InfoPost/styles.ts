import styled from "styled-components";

export const InfoPostContainer = styled.main`
  width: 54rem;
  height: 12rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  padding: 2rem;
  margin: -5rem auto 0;

  > span {
    color: ${(props) => props.theme['base-title']};

    font-family: Nunito;
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
  }
`

export const ProfileLink = styled.a`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['blue']};
  
    font-family: Nunito;
    font-size: 12px;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  }
`

export const InfoPostHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProfileIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: Nunito;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
  }
`

export const InfoPostFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`