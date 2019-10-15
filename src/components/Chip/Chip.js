import PropTypes from 'prop-types';

import * as components from './styles';

export const Chip = ({ name, onClose }) => (
  <components.StyledChip>
    <span>{name}</span> <components.CloseIcon onClick={onClose} />
  </components.StyledChip>
);

Chip.propTypes = {
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};
