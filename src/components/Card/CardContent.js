import PropTypes from 'prop-types';

import { StyledCardBody } from './styles';

export const CardContent = ({children}) => {
  return (
    <StyledCardBody>
      {children}
    </StyledCardBody>
  );
};

CardContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
