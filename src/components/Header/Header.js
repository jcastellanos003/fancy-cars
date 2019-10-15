import { Nav } from '../Nav/Nav';
import * as styled from './styles';

export const Header = () => (
  <section>

    <styled.CustomHeader>
      <styled.Logo src="/logo.png"/>
    </styled.CustomHeader>

    <Nav />

  </section>
);
