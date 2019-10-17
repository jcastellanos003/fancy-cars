import styled from 'styled-components';

export const StyledSelectedButton = styled.span`
  border-radius: 5px;
  display: block;
  text-align: center;
  cursor: pointer;
  background: transparent;
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.yellow};

  & :hover {
    background: ${props => props.theme.yellow};
    color: ${props => props.theme.black};
  }

  & span {
    display: block;
    padding: 0.2rem 0.5rem;
  }
`;
