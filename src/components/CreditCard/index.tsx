import React, { ButtonHTMLAttributes, Children } from 'react';
import { ReactCreditCardProps } from 'react-credit-cards';
import { CreditCard } from './styles';
import './style.css';

const Card: React.FC<ReactCreditCardProps> = ({ ...rest }) => (
  <CreditCard {...rest} />
);

export default Card;
