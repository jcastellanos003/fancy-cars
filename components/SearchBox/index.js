import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Close } from 'styled-icons/material/Close';
import { SearchAlt } from 'styled-icons/boxicons-regular/SearchAlt';

const SearchIcon = styled(SearchAlt)`
  width: 1.3rem;
`;

const CloseIcon = styled(Close)`
  width: 1.3rem;
`;

const SearchInput = styled.input`
  background: ${props => props.theme.white};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid ${props => props.theme.blueDark};
  padding: 10px;
  font-size: 0.8rem;
  flex: 1 1 0;
  outline: none;
`;

const SearchButton = styled.button`
  color: ${props => props.theme.white};
  background: ${props => props.theme.blueDark};
  border: 1px solid ${props => props.theme.blueDark};
  border: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const SearchForm = styled.form`
  padding: 1rem;
  display: flex;
`;

const SearchBox = ({ onSubmit, searchMode }) => {
  return (
    <SearchForm onSubmit={onSubmit} autoComplete="off">
      <SearchInput
        type="text"
        name="search"
        placeholder="Search your car"
        required
      />
      <SearchButton type="submit">
        {
          searchMode
          ? (<CloseIcon />)
          :  (<SearchIcon />)
        }
      </SearchButton>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
  searchMode: PropTypes.bool
};

export default SearchBox;
