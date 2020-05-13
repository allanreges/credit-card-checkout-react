import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import {
  Container,
  Content,
  Card,
  CardTitle,
  Stepper,
  Step1,
  Step2,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import CreditCard from '../../components/CreditCard';
import 'react-credit-cards/es/styles-compiled.css';
import api from '../../services/api';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import CardIcon from '../../assets/card.svg';

const SigUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [name, setName] = useState('');
  const [cardTitle, setCardTitle] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocused] = useState<any>(undefined);

  useEffect(() => {
    if (window.innerWidth < 720) {
      setCardTitle('mobile');
    } else {
      setCardTitle('desktop');
    }
  }, []);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Por favor Insira o nome Completo'),
        number: Yup.string().required('Insira um número válido'),
        expiry: Yup.string().required('Insira uma data válida'),
        cvc: Yup.string().required('Insira um código válido'),
        payment: Yup.number().moreThan(0, 'Selecione a quantidade de parcelas'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
    const response = await api.post('/pagar', data);
  }, []);

  return (
    <>
      <Container>
        <Card>
          {cardTitle === 'desktop' ? (
            <p>Alterar forma de pagamento</p>
          ) : (
              <p>
                <span>Etapa 2 </span> de 3
              </p>
            )}

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
          <Stepper>
            <Step1>
              <p>Carrinho</p>
            </Step1>
            <Step2>
              <p>
                <span>2</span>
                Pagamento
              </p>
            </Step2>
            <Step2>
              <p>
                <span>3</span>
                Confirmação
              </p>
            </Step2>
          </Stepper>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              mask="9999 9999 9999 9999"
              maskPlaceholder=""
              name="number"
              placeholder="Número do Cartão"
              onChange={e => setNumber(e.target.value)}
              onClick={() => setFocused('number')}
            />
            <Input
              mask=""
              maskPlaceholder=""
              name="name"
              placeholder="Nome (igual ao cartão)"
              onChange={e => setName(e.target.value)}
              onClick={() => setFocused('name')}
            />
            <Input
              mask="99/99"
              maskPlaceholder=""
              name="expiry"
              placeholder="Validade"
              onChange={e => setExpiry(e.target.value)}
              onClick={() => setFocused('expiry')}
              width="50%"
            />
            <Input
              mask="999"
              maskPlaceholder=""
              name="cvc"
              width="45%"
              placeholder="CVV"
              onChange={e => setCvc(e.target.value)}
              onClick={() => setFocused('cvc')}
            />
            <Select name="payment" placeholder="Número de parcelas" />
            <Button type="submit">Cadastrar</Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SigUp;
