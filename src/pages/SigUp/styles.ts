import styled from 'styled-components';
import { shade } from 'polished';
import Input from '../../components/Input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 672px;
  padding: 0 40px;

  @media (min-width: 720px) {
    padding: 50px 64px 50px 168px;
  }

  form {
    width: 100%;
    max-width: 295px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-between;
    margin: 90px 0 55px 0;

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

    @media (min-width: 720px) {
      margin: 54px 0 0 0;
      max-width: none;
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
  display: flex;
  flex-direction: column;
  background-color: #de4b4b;
  padding: 40px;
  position: relative;
  max-height: 240px;
  align-items: center;

  p {
    color: #fff;
    position: relative;
    align-items: center;
    display: flex;

    span {
      font-weight: 800;
      margin-right: 5px;
    }

    @media (min-width: 720px) {
      margin-left: 20px;
    }

    &::before {
      content: ' ';
      position: absolute;
      border-left: 3px solid #fff;
      border-top: 3px solid #fff;
      width: 13px;
      height: 13px;
      left: -130px;
      top: 0px;
      transform: rotate(-45deg);
      z-index: 2;
    }

    @media (min-width: 720px) {
      &::before {
        content: '';
        position: absolute;
        border-left: 2px solid #fff;
        border-top: 2px solid #fff;
        width: 8px;
        height: 8px;
        top: 2px;
        left: -20px;
        transform: rotate(-45deg);
      }
    }
  }

  @media (min-width: 720px) {
    padding: 50px 16px 50px 64px;
    max-width: 352px;
    max-height: none;
    align-items: flex-start;
    &::before {
      display: none;
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 16px 0;

  img {
    width: 40px;

    @media (min-width: 720px) {
      width: auto;
    }
  }

  h2 {
    font-size: 19px;
    line-height: 1.2;
    margin: 0 0 0 15px;
    max-width: 165px;

    @media (min-width: 720px) {
      max-width: none;
    }
  }

  @media (min-width: 720px) {
    margin: 50px 15px 30px 0;

    h2 {
      font-size: 22px;
      line-height: 1.2;
      margin: 0 0 0 15px;
    }
  }
`;

export const Stepper = styled.div`
  display: none;
  justify-content: flex-end;

  @media (min-width: 720px) {
    display: flex;
  }
`;

export const Step1 = styled.div`
  p {
    font-size: 13px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 23px;
    color: #de4b4b;

    &::before {
      content: '';
      width: 4px;
      height: 8px;
      position: absolute;
      border-top: 3px solid #fff;
      border-left: 3px solid #fff;
      transform: rotate(-135deg);
      left: -23px;
      top: -1px;
    }

    &::after {
      content: '';
      width: 22px;
      height: 22px;
      position: absolute;
      background: #de4b4b;
      border-radius: 50%;
      left: -30px;
      top: -5px;
      z-index: -1;
    }
  }
`;

export const Step2 = styled.div`
   p {
    font-size: 13px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #de4b4b;
    margin: 0 0 0 50px;

    span {
      margin: 0 15px 0 20px;
      font-weight: 800;

      &::after {
      content: '';
      width: 18px;
      height: 18px;
      position: absolute;
      border: 2px solid  #de4b4b;
      border-radius: 50%;
      left: 12px;
      top: -4px;
      z-index: -1;
    }

      &::before {
        content: '';
        width: 8px;
        height: 8px;
        position: absolute;
        border-top: 3px solid #de4b4b;
        border-left: 3px solid #de4b4b;
        transform: rotate(-225deg);
        left: -23px;
        top: -1px;
      }
    };
`;
