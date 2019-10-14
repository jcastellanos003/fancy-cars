import { Nav } from '../../components';
import * as components from './styles';

const Header = () => (
  <section>
    <components.CustomHeader>
      <components.Logo src="/logo.png"/>
    </components.CustomHeader>

    <Nav />
  </section>
);

export default Header;
