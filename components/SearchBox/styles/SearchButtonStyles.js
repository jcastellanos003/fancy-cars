import styled from 'styled-components';

export const SearchButton = styled.button`
  color: ${props => props.theme.white};
  background: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.black};
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

