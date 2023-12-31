import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(NavLink)`
  max-width: 26rem;
  max-height: 16.25rem;
  padding: 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
`

export const PostHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  span {
    max-width: 15rem;
    color: ${(props) => props.theme['base-title']};

    font-family: Nunito;
    font-size: 20px;
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

export const PostText = styled.span`
  width: 22rem;
  height: 7rem;
  margin-top: 1.25rem;

  overflow: hidden;
  color: ${(props) => props.theme['base-text']};
  text-overflow: ellipsis;

  font-family: Nunito;
  font-size: 14px;
  font-weight: 400;
  line-height: 160%;
`