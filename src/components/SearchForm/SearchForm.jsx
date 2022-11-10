import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, FormButton } from './SearchForm.styled';
import { FcSearch } from 'react-icons/fc';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchInputChange = e => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const onSearchFormSubmit = e => {
    e.preventDefault();

    const searchValue = e.target.search.value;
    onSubmit(searchValue);

    resetForm();
  };

  const resetForm = () => {
    setSearchQuery('');
  };

  return (
    <Form onSubmit={onSearchFormSubmit}>
      <Input
        type="text"
        name="search"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={onSearchInputChange}
      />
      <FormButton type="submit">
        <FcSearch size={20} />
      </FormButton>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
