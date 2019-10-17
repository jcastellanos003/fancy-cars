import styled from 'styled-components';

export const StyledSelectedCard = styled.div`
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9;
  cursor: default;
  user-select: none;
`;

