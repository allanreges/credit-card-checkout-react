import React, { useCallback, useRef, useState } from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Container, Content, Card, CardTitle } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import CreditCard from '../../components/CreditCard';
import 'react-credit-cards/es/styles-compiled.css';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CardIcon from '../../assets/card.svg';

const SigUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('Email Obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocused] = useState<any>(undefined);

  return (
    <>
      <Container>
        <Card>
          <p>Alterar forma de pagamento</p>
          <CardTitle>
            <img src={CardIcon} />
            <h2>Adicione um novo cartão de crédito</h2>
          </CardTitle>
          <CreditCard
            name={name}
            number={number}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </Card>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>
            <Input
              name="name"
              placeholder="Nome"
              onChange={e => setName(e.target.value)}
              onClick={() => setFocused('name')}
            />
            <Input
              name="number"
              placeholder="Número do Cartão"
              onChange={e => setNumber(e.target.value)}
              onClick={() => setFocused('number')}
            />
            <Input
              name="expiry"
              placeholder="Data de expiração"
              onChange={e => setExpiry(e.target.value)}
              onClick={() => setFocused('expiry')}
            />
            <Input
              name="cvc"
              placeholder="Código do cartão"
              onChange={e => setCvc(e.target.value)}
              onClick={() => setFocused('cvc')}
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <a href="#">
            <FiArrowLeft />
            Voltar para Login
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SigUp;
