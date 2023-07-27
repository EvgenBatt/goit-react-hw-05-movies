import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, SubmitBtn } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleInput}
        type="text"
        autoComplete="off"
        value={query}
        id="outlined-basic"
        label="Search films"
        variant="outlined"
        size="small"
      />
      <SubmitBtn variant="contained" type="submit">
        Search
      </SubmitBtn>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
