import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  position: relative;
  border-radius: 5px;
  background: ${props => props.theme.white};
  border: none;
  cursor: pointer;

  & .medium {
    width: 100%;
    height: 100%;
    max-width: 300px;
  }

  & .large {
    width: 100%;
    height: auto;
    max-width: 500px;
  }

  & :hover {
    box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
`;
