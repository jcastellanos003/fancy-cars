import styled from 'styled-components';

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  background: ${props => props.theme.black};
  border-bottom: 5px solid ${({ active, theme }) => active ? theme.yellow : theme.dark};
  color: ${({ active, theme }) => active ? theme.yellow : theme.white};
  font-size: 0.8rem;
  font-weight: 500;
  user-select: none;
  width: 50%;
  transition: color 0.5s;

  & :hover {
    color: ${props => props.theme.yellow};

    .icon {
      color: ${props => props.theme.yellow};
    }
  }

  & .icon {
    color: ${({ active, theme }) => active ? theme.yellow : theme.white};
    transition: color 0.5s;
  }
`;
