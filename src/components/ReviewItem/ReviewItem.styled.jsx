import styled from 'styled-components';

export const ReviewItemStyled = styled.li`
  margin-bottom: 14px;
`;

export const Author = styled.h4`
  margin-bottom: 4px;
`;

export const AuthorSpan = styled.span`
  font-size: 12px;
`;

export const Content = styled.p``;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  max-width: 80px;

  padding: 4px;
  margin-left: 8px;

  border: 1px solid black;
  border-radius: 8px;

  text-decoration: none;
  color: black;

  :hover,
  :focus-within {
    background-color: aliceblue;
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1),
      -1px -1px 1px 0px rgba(0, 0, 0, 0.1);
  }

  cursor: pointer;
`;
