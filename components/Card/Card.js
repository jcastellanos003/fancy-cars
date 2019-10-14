import PropTypes from 'prop-types';

import { StyledCardContainer } from './styles';

export const Card = ({ className, size, children}) => (
  <StyledCardContainer className={className}>
    <div className={size}>
      {children}
    </div>
  </StyledCardContainer>
);

Card.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
