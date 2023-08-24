import { Box, Card, CardContent, Typography, styled } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import { CharacterStatus } from '../../../pages/characters';

interface ICharacterCardProps {
  name: string;
  species: string;
  status: CharacterStatus;
  image: string;
}

const Border = styled(Box)({
  border: '2px solid #42b983',
  borderRadius: '0.5rem',
  padding: '0.5rem',
});

export const CharacterCard: React.FC<ICharacterCardProps> = ({
  name,
  species,
  status,
  image,
}) => {
  const shortenedName = name.length > 16 ? `${name.substring(0, 16)}...` : name;

  const getStatusBackgroundColor = (status: CharacterStatus): string => {
    switch (status) {
      case 'Alive':
        return '#5DFF18';
      case 'unknown':
        return '#fcd34d';
      case 'Dead':
        return '#ef4444';
      default:
        return '#52525b';
    }
  };

  return (
    <Border sx={{ boxShadow: '0 0 1rem rgb(18, 167, 80)' }}>
      <Card
        sx={{
          backgroundColor: getStatusBackgroundColor(status),
          opacity: 1,
          position: 'relative',
        }}
      >
        <img
          src={image}
          alt={name}
          className='w-full h-auto border-b-2 border-black'
        />
        <div className='absolute w-full right-1 bottom-[6.15rem] flex justify-center items-center'>
          <span
            className={classNames(
              'rounded-full font-bold py-2 border-black border-2 w-40 flex justify-center items-center',
              {
                'bg-[#5DFF18]': status === 'Alive',
                'bg-[#fcd34d]': status === 'unknown',
                'bg-[#ef4444]': status === 'Dead',
              }
            )}
          >
            {status && status === 'unknown' ? 'Unknown' : status}
          </span>
        </div>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1.25rem',
          }}
        >
          <Typography variant='h6' sx={{ fontWeight: 800 }}>
            {shortenedName}
          </Typography>
          <Typography component='span' sx={{ fontWeight: 500 }}>
            {species}
          </Typography>
        </CardContent>
      </Card>
    </Border>
  );
};
