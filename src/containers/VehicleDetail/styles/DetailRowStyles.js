import styled from 'styled-components';

export const DetailRow = styled.span`
  font-size: 0.9rem;
  display: flex;
  font-weight: 500;
  margin: 0.5rem 0;

  & .title {
    color: ${props => props.theme.greyLight};
    text-align: left;
    width: 30%;
    display: block;
    font-weight: 600;
    text-transform: capitalize;
  }

  & .info {
    color: ${props => props.theme.black};
    text-align: left;
    width: 70%;
    display: block;
  }
`;
