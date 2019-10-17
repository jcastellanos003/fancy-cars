import PropTypes from 'prop-types';

import * as styled from './styles';

export const SearchBox = ({ onSubmit, onChange }) => {
  return (
    <styled.SearchForm onSubmit={onSubmit} autoComplete="off">
      <styled.SearchInput
        type="text"
        name="search"
        placeholder="Search your car"
        onChange={onChange}
        required
      />
      <styled.SearchButton type="submit">
        <styled.SearchIcon />
      </styled.SearchButton>
    </styled.SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
