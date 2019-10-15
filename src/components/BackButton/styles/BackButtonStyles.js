import styled from 'styled-components';

export const StyledBackButton = styled.div`
  color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.black};
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.5s;
  margin-right: 1rem;

  & :hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
`;
