import styled from 'styled-components';
import { CompareArrows } from 'styled-icons/material/CompareArrows';
import { Home } from 'styled-icons/material/Home';

import ActiveLink from '../ActiveLink';

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.whiteDark};
  height: 50px;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  background: ${({ active, theme }) => active ? theme.grey : 'transparent'};
  color: ${props => props.theme.blueDark};
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.grey};
  user-select: none;
  width: 50%;
`;

const CompareIcon = styled(CompareArrows)`
  color: ${props => props.theme.blueDark};
  margin-right: 0.5rem;
  width: 1.3rem;
`;

const HomeIcon = styled(Home)`
  color: ${props => props.theme.blueDark};
  margin-right: 0.5rem;
  width: 1.3rem;
`;

const Nav = () => (
  <NavMenu>

    <ActiveLink href="/">
      <NavItem>
        <HomeIcon />
        Home
      </NavItem>
    </ActiveLink>

    <ActiveLink href="/comparison">
      <NavItem>
        <CompareIcon />
        Compare
      </NavItem>
    </ActiveLink>

  </NavMenu>
);

export default Nav;
