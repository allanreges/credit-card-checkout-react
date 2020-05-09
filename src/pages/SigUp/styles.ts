import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 672px;
  padding: 50px 64px 50px 200px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin: 0 16px 0 0;
    }
  }
`;

export const Card = styled.div`
  flex: 1;
  background-color: #de4b4b;
  padding: 50px 16px 50px 64px;
  max-width: 352px;

  p {
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 20px;

    &::before {
      content: ' ';
      position: absolute;
      border-left: 2px solid #fff;
      border-top: 2px solid #fff;
      width: 8px;
      height: 8px;
      left: -20px;
      transform: rotate(-45deg);
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  margin: 50px 15px 30px 0;

  h2 {
    font-size: 22px;
    line-height: 1.2;
    margin: 0 0 0 15px;
  }
`;
