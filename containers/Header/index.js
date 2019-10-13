import { useCallback } from 'react';
import styled from 'styled-components';

import { Nav, SearchBox } from '../../components';

const CustomHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.whiteDark};
`;

const Logo = styled.img`
  width: 100%;
  max-width: 4rem;
  padding: 1rem 0 0.5rem 0;
  margin: 0 auto;
`;

const Header = () => {

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    console.log('tetassssss', event);
  });

  return (
    <div>
      <CustomHeader>
        <Logo src="/logo.png"/>
      </CustomHeader>
      <Nav />
      <div className="search">
        <SearchBox
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Header;
