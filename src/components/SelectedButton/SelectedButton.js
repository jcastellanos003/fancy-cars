import PropTypes from 'prop-types';

import { StyledSelectedButton } from './styles';

export const SelectedButton = ({ id, onClick, text }) => (
  <StyledSelectedButton>
    <span item={id} onClick={onClick}>{text}</span>
  </StyledSelectedButton>
);

SelectedButton.propTypes = {
  id: PropTypes.any,
  text: PropTypes.string,
  onClick: PropTypes.func
};
