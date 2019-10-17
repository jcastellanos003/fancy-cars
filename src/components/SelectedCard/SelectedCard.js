import PropTypes from 'prop-types';

import * as styled from './styles';

export const SelectedCard = ({ children }) => (
  <styled.StyledSelectedCard>
    <styled.StyledSelectedText>Selected to compare</styled.StyledSelectedText>
    <styled.StyledSelectedContent>
      {children}
    </styled.StyledSelectedContent>
  </styled.StyledSelectedCard>
);

SelectedCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
