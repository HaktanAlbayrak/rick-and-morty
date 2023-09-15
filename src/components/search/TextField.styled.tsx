import { TextField, styled } from '@mui/material';
import { CSSProperties } from '@mui/styled-engine';

export const StyledTextField = styled(TextField)<CSSProperties>(
  `
   label {
      color: #42b983;
   }
      & label.Mui-focused {
        color: #42b983;
      }
      & .MuiOutlinedInput-root {
         color: #42b983;
        & fieldset {
            border-color: #42b983;
        }   
        &:hover fieldset {
            border-color: #42b983;
            border-width: 2px;
          }
        &.Mui-focused fieldset {
          border-color: #42b983;
        }
      }
   `
);
