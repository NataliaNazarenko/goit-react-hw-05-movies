import { Wrapper, Input, Icon } from './Searchbar.styled';

export const SearchBar = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input type="text" value={value} onChange={e => onChange(e.target.value)} />
    </Wrapper>
  );
};
