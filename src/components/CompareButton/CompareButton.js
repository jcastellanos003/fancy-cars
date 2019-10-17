import PropTypes from 'prop-types';

import * as components from './styles';

export const CompareButton = ({ onClick, id }) => (
  <components.StyledCompareButton onClick={onClick}>
    <span item={id}>
      <components.CompareButtonIcon />
    </span>
  </components.StyledCompareButton>
);

CompareButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired
};
