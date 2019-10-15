import * as components from './styles';
import { ActiveLink } from '../ActiveLink/ActiveLink';

export const Nav = () => (
  <components.NavMenu>

    <ActiveLink href="/">
      <components.NavItem>
        <components.HomeIcon className="icon" />
        Home
      </components.NavItem>
    </ActiveLink>

    <ActiveLink href="/comparison">
      <components.NavItem>
        <components.CompareIcon className="icon" />
        Compare
      </components.NavItem>
    </ActiveLink>

  </components.NavMenu>
);
