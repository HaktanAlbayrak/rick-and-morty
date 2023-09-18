import { Clear } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { FC } from 'react';
import { StyledTextField } from './TextField.styled';

interface ISearchBarProps {
  labelText: string;
  value: string;
  setValue: (value: string) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<ISearchBarProps> = ({
  labelText,
  onChange,
  setValue,
  value = null,
}) => {
  return (
    <>
      <StyledTextField
        id='search'
        variant='outlined'
        fullWidth
        label={labelText}
        value={value}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              {value !== '' ? (
                <IconButton
                  onClick={() => {
                    setValue('');
                  }}
                >
                  <Clear />
                </IconButton>
              ) : null}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
