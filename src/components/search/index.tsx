import { FC } from 'react';
import { StyledTextField } from './TextField.styled';

interface ISearchBarProps {
  labelText: string;
}

export const SearchBar: FC<ISearchBarProps> = ({ labelText }) => {
  return (
    <>
      <StyledTextField
        id='search'
        label={labelText}
        variant='outlined'
        fullWidth
      />
    </>
  );
};
