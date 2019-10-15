import PropTypes from 'prop-types';

import * as components from './styles';

export const PageHeader = ({ children }) => (
  <components.StyledPageHeader>
    {children}
  </components.StyledPageHeader>
);

PageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
