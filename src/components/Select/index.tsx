import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  width?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  onChange,
  width = '100%',
  ...rest
}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      isErrorEd={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      width={width}
    >
      <span>{placeholder}</span>
      <select
        placeholder={placeholder}
        defaultValue={defaultValue}
        onFocus={handleInputBlur}
        ref={inputRef}
        {...rest}
      >
        <option value="0" selected disabled>
          Selecione a quantidade de parcelas
        </option>
        <option value="1">Valor 1</option>
        <option value="2">Valor 2</option>
        <option value="3">Valor 3</option>
      </select>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
