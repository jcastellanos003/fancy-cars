import styled from 'styled-components';

export const CompareLink = styled.a`
  border-radius: 5px;
  display: block;
  text-align: center;
  cursor: pointer;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  border: 2px solid ${props => props.theme.white};
  margin-bottom: 1rem;

  & :hover {
    background: ${props => props.theme.yellow};
    border: 2px solid ${props => props.theme.yellow};
  }
`;
