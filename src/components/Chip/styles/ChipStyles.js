import styled from 'styled-components';

export const StyledChip = styled.div`
  color: ${props => props.theme.white};
  background: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.black};
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;

  & span {
    margin-right: 0.5rem;
  }
`;
