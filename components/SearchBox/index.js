import PropTypes from 'prop-types';

import * as components from './styles';

export const SearchBox = ({ onSubmit, onChange, searchMode }) => {
  return (
    <components.SearchForm onSubmit={onSubmit} autoComplete="off">
      <components.SearchInput
        type="text"
        name="search"
        placeholder="Search your car"
        onChange={onChange}
        required
      />
      <components.SearchButton type="submit">
        {
          searchMode
          ? (<components.CloseIcon />)
          :  (<components.SearchIcon />)
        }
      </components.SearchButton>
    </components.SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchMode: PropTypes.bool
};
