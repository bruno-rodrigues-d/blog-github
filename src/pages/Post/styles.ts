import styled from 'styled-components';

export const PostPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostPageContent = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 54rem;
  padding: 2.5rem 2rem;
  gap: 1.5rem;

  color: ${(props) => props.theme['base-text']};

  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
`
