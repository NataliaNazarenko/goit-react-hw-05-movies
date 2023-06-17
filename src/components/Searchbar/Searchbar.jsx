import { Wrapper, Input, Icon, Form, SubmitButton, Span } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return Notify.warning('You didn`t enter anything in the search box. Please try again.');
    }

    const data = e.target.elements.searchQuery.value.trim();

    onSubmit(data);
    setInputValue('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchQuery"
          placeholder="Search movies"
          value={inputValue}
          onChange={handleChange}
        />

        <SubmitButton type="submit">
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Span>Search</Span>
        </SubmitButton>
      </Form>
    </Wrapper>
  );
};
