import styled from '@emotion/styled';
import React from 'react';
import { useForm } from 'react-hook-form';

const FormContainerStyled = styled.div`
  h4 {
    color: white;
    font-weight: 500;
    font-size: 1.25rem;
  }
`;
const FormContainer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormContainerStyled>
      <h4>¿Quieres unirte? Envianos tú solicitud.</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="company">
          <span>Nombre de la empresa o persona</span> <input type="text" name="company" id="company" />
        </label>
        <label htmlFor="email">
          <span>Correo</span>
          <input type="email" name="email" id="email" />
        </label>
        <select name="" id="">
          <option value="">Seleccione una opción</option>
        </select>
        <textarea name="" id="" cols={30} rows={10} />
        <button type="submit">Enviar información</button>
      </form>
    </FormContainerStyled>
  );
};

export default FormContainer;
