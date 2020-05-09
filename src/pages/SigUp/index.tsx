import React, { useCallback, useRef, useState } from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Container, Content, Card } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import CreditCard from '../../components/CreditCard';
import 'react-credit-cards/es/styles-compiled.css';

import Input from '../../components/Input';
import Button from '../../components/Button';

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

  function handleFocus(e: any) {
    setFocused(e.target.name);
    console.log(e.target.name);
  }

  console.log(focus);

  return (
    <>
      <Container>
        <Card>
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
              icon={FiUser}
              placeholder="Nome"
              onChange={e => setName(e.target.value)}
              onFocus={() => setFocused('name')}
            />
            <Input
              name="number"
              icon={FiUser}
              placeholder="Número do Cartão"
              onChange={e => setNumber(e.target.value)}
              onFocus={() => setFocused('number')}
            />
            <Input
              name="expiry"
              icon={FiUser}
              placeholder="Data de expiração"
              onChange={e => setExpiry(e.target.value)}
              onFocus={() => setFocused('expiry')}
            />
            <Input
              name="cvc"
              icon={FiUser}
              placeholder="Código do cartão"
              onChange={e => setCvc(e.target.value)}
              onFocus={() => setFocused('cvc')}
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
