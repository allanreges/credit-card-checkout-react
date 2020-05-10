import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;

  button {
    background: #de4b4b;
    border-radius: 10px;
    border: 0;
    height: 51px;
    padding: 0 16px;
    color: #312e38;
    font-weight: 500;
    width: 246px;
    font-size: 17px;
    color: #fff;
    transition: background-color 0.2s;
    display: block;
    margin: 21px 0 0 auto;

    &:hover {
      background: ${shade(0.2, '#DE4B4B')};
    }
  }
`;
