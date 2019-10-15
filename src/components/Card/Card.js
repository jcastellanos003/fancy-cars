import PropTypes from 'prop-types';

import { StyledCardContainer } from './styles';

export const Card = ({ size, children }) => (
  <StyledCardContainer>
    <div className={size}>
      {children}
    </div>
  </StyledCardContainer>
);

Card.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
