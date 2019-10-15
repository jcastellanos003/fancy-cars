import styled from 'styled-components';

export const SearchInput = styled.input`
  background: ${props => props.theme.white};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid ${props => props.theme.black};
  padding: 10px;
  font-size: 0.8rem;
  flex: 1 1 0;
  outline: none;
`;
