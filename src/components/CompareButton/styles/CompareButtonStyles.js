import styled from 'styled-components';

export const StyledCompareButton = styled.div`
  background: ${props => props.theme.white};
  border-radius: 50%;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: transform .2s;

  & span::after {
    content: '';
    display: block;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 50%;
    background: transparent;
  }

  & :hover {
    background: ${props => props.theme.yellow};
    transform: scale(1.5);
  }
`;
