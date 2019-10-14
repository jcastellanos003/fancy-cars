import PropTypes from 'prop-types';

import { StyledCardHeader } from './styles';

export const CardHeader = ({ children }) => {
  return (
    <StyledCardHeader>
      {children}
    </StyledCardHeader>
  );
};

CardHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
