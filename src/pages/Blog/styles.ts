import styled from "styled-components";

export const ProfileContainer = styled.main`
  max-width: 54rem;
  max-height: 13.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  padding: 2rem 2.5rem;
  margin: -5rem auto 0;

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  > p {
    max-width: 38.25rem;
    color: ${(props) => props.theme['base-text']};

    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
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

export const ProfileTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    color: ${(props) => props.theme['base-title']};

    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`

export const ProfileFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
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