import styled from 'styled-components';

export const StyledVehiclesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;

  .vehicle-item {
    position: relative;
    margin: 1rem;
  }

  .compare-button div {

    & ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      background: transparent;
      border-radius: 50%;
    }
  }

  .compare-link {
    background: ${props => props.theme.white};
    color: ${props => props.theme.black};
    border: 2px solid ${props => props.theme.white};
    margin-bottom: 1rem;

    & :hover {
      background: ${props => props.theme.yellow};
      border: 2px solid ${props => props.theme.yellow};
    }
  }
`;
