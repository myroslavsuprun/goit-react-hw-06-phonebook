import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;

  border-radius: 4px;
  border: 1px solid black;
  outline: none;

  font-size: 20px;
`;

export const FormButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-left: none;
  padding: 8px;
  border-radius: 4px;

  cursor: pointer;

  :hover {
    background-color: aliceblue;
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1),
      -1px -1px 1px 0px rgba(0, 0, 0, 0.1);
  }
`;
