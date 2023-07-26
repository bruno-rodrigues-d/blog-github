import styled from "styled-components";

export const ProfileContainer = styled.main`
  max-width: 54rem;
  max-height: 13.5rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  padding: 2rem 2.5rem;
  margin: -5rem auto 0;
`