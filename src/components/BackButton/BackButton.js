import PropTypes from 'prop-types';

import * as components from './styles';

export const BackButton = ({ onClick }) => (
  <components.StyledBackButton onClick={onClick}>
    <components.BackButtonIcon /> Back
  </components.StyledBackButton>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
